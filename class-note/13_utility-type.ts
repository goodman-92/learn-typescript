interface Product {
	readonly id: number;
	name: string;
	price: number;
	brand: string;
	stock: number;
	some?: any;
}

// 상품 목록 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {}

// 위에 상품 인터페이스와 중복된다
interface ProductDetail {
	id: number;
	name: string;
	price: number;
}

// function displayProductDetail(shoppingItem: ProductDetail) {}

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem) {
	const {name, price, id} = shoppingItem
}

// 3. 특정 상품 정보를 업데이트(개싱)하는 함수
function updateProductItem(productItem: Partial<Product>) {
}

// Partial 아래와값이 필수사항이 아닌값과 같다
interface UpdateProduct {
	id?: number;
	name?: string;
	price?: number;
	brand?: string;
	stock?: number;
}

function changeProductItem({price, some, brand, stock, name}: Omit<Product, 'id'>) {

}

updateProductItem({name: ""})
updateProductItem({})

interface UserProfile {
	username: string;
	email: string;
	profilePhotoUrl: string;
}

// interface UserProfileUpdate {username?: string;email?: string;profilePhotoUrl?: string;}

// # 1
type UserProfileUpdate1 = {
	username?: UserProfile['username'];
	email?: UserProfile['email'];
	profilePhotoUrl?: UserProfile['profilePhotoUrl']
}

// # 2
type UserProfileUpdate2 = {
	[p in 'username' | 'email' | 'profilePhotoUrl' ]? : UserProfile[p]
}

// 타입의 키만 빼서 사용할수잇엇지
type UserProfileKeys = keyof UserProfile

// # 3
type UserProfileUpdate3 = {
	[p in keyof  UserProfile]?: UserProfile[p]
}

// # 4
type Subset<T> = {
	[p in keyof T]?: T[p];
}

const updateProfile = ({profilePhotoUrl}: UserProfileUpdate3) => {

}