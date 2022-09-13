export default class CarsService {

    getCarsPrice1() {
		return fetch('data/cars-price-1.json').then(res => res.json()).then(d => d.data);
	}
    getCarsPrice2() {
		return fetch('data/cars-price-2.json').then(res => res.json()).then(d => d.data);
	}
    getCarsPrice3() {
		return fetch('data/cars-price-3.json').then(res => res.json()).then(d => d.data);
	}
    getCarsPrice4() {
		return fetch('data/cars-price-4.json').then(res => res.json()).then(d => d.data);
	}
    getCarsPrice5() {
		return fetch('data/cars-price-1.json').then(res => res.json()).then(d => d.data);
	}
    getCarsPrice6() {
		return fetch('data/cars-price-2.json').then(res => res.json()).then(d => d.data);
	}
    getCarsPrice7() {
		return fetch('data/cars-price-3.json').then(res => res.json()).then(d => d.data);
	}
    getCarsPrice8() {
		return fetch('data/cars-price-4.json').then(res => res.json()).then(d => d.data);
	}
	
}