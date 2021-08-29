type PhoneNumberDictionary = {
  [phone in PhoneType]?: {
    num: number;
  };
};

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  'Home' = 'home',
  'Offices' = 'offices',
  'Studio' = 'studio',
}

export { PhoneNumberDictionary, PhoneType, Contact };
