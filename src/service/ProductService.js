export default class ProductService {

    getProductsSmall() {
		return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
	}
	getProductsSmall2() {
		return fetch('data/products-small2.json').then(res => res.json()).then(d => d.data);
	}
	getProductsSmall3() {
		return fetch('data/products-small3.json').then(res => res.json()).then(d => d.data);
	}
	getProductsSmall4() {
		return fetch('data/products-small4.json').then(res => res.json()).then(d => d.data);
	}
	getProductsSmall5() {
		return fetch('data/products-small5.json').then(res => res.json()).then(d => d.data);
	}

	getCars() {
		return fetch('data/cars.json').then(res => res.json()).then(d => d.data);
    }
	getGuide() {
		return fetch('data/guide.json').then(res => res.json()).then(d => d.data);
    }
	getWelcome() {
		return fetch('data/welcome.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
	}
	
}