import axios, { AxiosResponse } from 'axios';
import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';
import { Country, CountryInfo, CountryInfoResponse, CovidStatus, CovidSummaryResponse } from './covid';

// utils
// 상속을 해야 되니 타입을 제한 할 수 있다!
const $ = <T extends HTMLElement = HTMLDivElement>(selector: string) => document.querySelector(selector) as T;

const getUnixTimestamp = (date: number | string | Date): number => new Date(date).getTime();

const createSpinnerElement = (id: string): HTMLDivElement => {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', id);
  wrapperDiv.setAttribute('class', 'spinner-wrapper flex justify-center align-center');
  const spinnerDiv = document.createElement('div');
  spinnerDiv.setAttribute('class', 'ripple-spinner');
  spinnerDiv.appendChild(document.createElement('div'));
  spinnerDiv.appendChild(document.createElement('div'));
  wrapperDiv.appendChild(spinnerDiv);
  return wrapperDiv;
};

// 제네릭은 함수명 사이에 입력
// 결과 값을 단언을 해준다( querySelector 함수에 결과값을 확신할수 없다)
const confirmedTotal = $<HTMLSpanElement>('.confirmed-total');
const deathsTotal = $<HTMLParagraphElement>('.deaths');
const recoveredTotal = $<HTMLParagraphElement>('.recovered');
const lastUpdatedTime = $<HTMLParagraphElement>('.last-updated-time');
const rankList = $<HTMLOListElement>('.rank-list');
// const rankList = $('.rank-list');
const deathsList = $('.deaths-list') as HTMLOListElement;
const recoveredList = $('.recovered-list') as HTMLOListElement;
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

// state
let isDeathLoading = false;

const fetchCovidSummary = (): Promise<AxiosResponse<CovidSummaryResponse>> => {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
};

const fetchCountryInfo = (countryCode: string | undefined, status: CovidStatus): Promise<AxiosResponse<CountryInfoResponse>> => {
  const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
  return axios.get(url);
};

// methods
const startApp = () => {
  setupChartJs();
  setupData();
  initEvents();
};

// events
function initEvents() {
  if (!rankList) return;

  rankList.addEventListener('click', handleListClick);
  // AddEventListener 의 인자의 두번째 콜랙함수에는 Event 라는 타입이 들어간다
}

// async function handleListClick(event: MouseEvent) {
async function handleListClick(event: Event) {
  let selectedId;
  if (event.target instanceof HTMLParagraphElement || event.target instanceof HTMLSpanElement) {
    selectedId = event.target.parentElement ? event.target.parentElement.id : undefined;
  }

  if (event.target instanceof HTMLLIElement) {
    selectedId = event.target.id;
  }
  if (isDeathLoading) {
    return;
  }
  clearDeathList();
  clearRecoveredList();
  startLoadingAnimation();
  isDeathLoading = true;
  const { data: deathResponse } = await fetchCountryInfo(selectedId, CovidStatus.Deaths);
  const { data: recoveredResponse } = await fetchCountryInfo(selectedId, CovidStatus.Recovered);
  const { data: confirmedResponse } = await fetchCountryInfo(selectedId, CovidStatus.Confirmed);
  endLoadingAnimation();
  setDeathsList(deathResponse);
  setTotalDeathsByCountry(deathResponse);
  setRecoveredList(recoveredResponse);
  setTotalRecoveredByCountry(recoveredResponse);
  setChartData(confirmedResponse);
  isDeathLoading = false;
}

const setDeathsList = (data: CountryInfoResponse): void => {
  const sorted = data.sort((a: CountryInfo, b: CountryInfo) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date));
  sorted.forEach((value: CountryInfo) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases.toString();
    span.setAttribute('class', 'deaths');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    deathsList.appendChild(li);
  });
};

const clearDeathList = (): void => {
  deathsList.innerHTML = '';
};

const setTotalDeathsByCountry = (data: CountryInfoResponse): void => {
  deathsTotal.innerText = data[0].Cases.toString();
};

const setRecoveredList = (data: CountryInfoResponse): void => {
  const sorted = data.sort((a: CountryInfo, b: CountryInfo) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date));
  sorted.forEach((value: CountryInfo) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases.toString();
    span.setAttribute('class', 'recovered');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    recoveredList?.appendChild(li);
  });
};

const clearRecoveredList = (): void => {
  // recoveredList?.innerHTML = '';
  recoveredList.innerHTML = '';
};

const setTotalRecoveredByCountry = (data: CountryInfoResponse): void => {
  recoveredTotal.innerText = data[0].Cases.toString();
};

const startLoadingAnimation = (): void => {
  deathsList.appendChild(deathSpinner);
  recoveredList?.appendChild(recoveredSpinner);
};

const endLoadingAnimation = (): void => {
  deathsList.removeChild(deathSpinner);
  recoveredList?.removeChild(recoveredSpinner);
};

const setupData = async () => {
  const { data } = await fetchCovidSummary();
  setTotalConfirmedNumber(data);
  setTotalDeathsByWorld(data);
  setTotalRecoveredByWorld(data);
  setCountryRanksByConfirmedCases(data);
  setLastUpdatedTimestamp(data);
};

// arf
const setupChartJs = () => {
  Chart.defaults.color = '#f5eaea';
  Chart.defaults.font = {
    lineHeight: 10,
    size: 0,
    style: 'normal',
    weight: 'bold',
    family: 'Exo 2',
  };
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
};

const renderChart = (data: number[], labels: string[]) => {
  const canvas = $('#lineChart') as HTMLCanvasElement;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Confirmed for the last two weeks',
          backgroundColor: '#feb72b',
          borderColor: '#feb72b',
          data,
        },
      ],
    },
    options: {},
  });
};

const setChartData = (data: CountryInfoResponse): void => {
  const chartData = data.slice(-14).map((value: CountryInfo) => value.Cases);
  const chartLabel = data.slice(-14).map((value: CountryInfo) => new Date(value.Date).toLocaleDateString().slice(5, -1));
  renderChart(chartData, chartLabel);
};

const setTotalConfirmedNumber = (data: CovidSummaryResponse) => {
  confirmedTotal.innerText = data.Countries.reduce(
    (total: number, current: Country) => (total += current.TotalConfirmed),
    0
  ).toString();
};

const setTotalDeathsByWorld = (data: CovidSummaryResponse): void => {
  deathsTotal.innerText = data.Countries.reduce(
    (total: number, current: Country) => (total += current.TotalDeaths),
    0
  ).toString();
};

const setTotalRecoveredByWorld = (data: CovidSummaryResponse): void => {
  recoveredTotal.innerText = data.Countries.reduce(
    (total: number, current: Country) => (total += current.TotalRecovered),
    0
  ).toString();
};

const setCountryRanksByConfirmedCases = (data: CovidSummaryResponse) => {
  const sorted = data.Countries.sort((a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed);
  sorted.forEach((value: Country) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item flex align-center');
    li.setAttribute('id', value.Slug);
    const span = document.createElement('span');
    span.textContent = value.TotalConfirmed.toString();
    span.setAttribute('class', 'cases');
    const p = document.createElement('p');
    p.setAttribute('class', 'country');
    p.textContent = value.Country;
    li.appendChild(span);
    li.appendChild(p);
    rankList.appendChild(li);
  });
};

const setLastUpdatedTimestamp = (data: CovidSummaryResponse): void => {
  lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
};

startApp();
