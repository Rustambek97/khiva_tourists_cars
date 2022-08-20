<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h5>Travel places</h5>
                <Carousel :value="products" :numVisible="3" :numScroll="3" :circular="false" :responsiveOptions="carouselResponsiveOptions">
                    <template #item="product">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img :src="'images/product/' + product.data.image" :alt="product.data.name" class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">
                                        
                                    </h4>
                                    <h6 class="mt-0 mb-3">
                                        
                                    </h6>
                                    
                                    <div class="car-buttons mt-5">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
		
		
    </div>
</template>

<script>

import ProductService from "../service/ProductService";
import PhotoService from "../service/PhotoService";
export default {
    data() {
        return {
            products: [],
            images: [],
            galleriaResponsiveOptions: [
                {
                    breakpoint: "1024px",
                    numVisible: 5,
                },
                {
                    breakpoint: "960px",
                    numVisible: 4,
                },
                {
                    breakpoint: "768px",
                    numVisible: 3,
                },
                {
                    breakpoint: "560px",
                    numVisible: 1,
                },
            ],
            carouselResponsiveOptions: [
                {
                    breakpoint: "1024px",
                    numVisible: 3,
                    numScroll: 3,
                },
                {
                    breakpoint: "768px",
                    numVisible: 2,
                    numScroll: 2,
                },
                {
                    breakpoint: "560px",
                    numVisible: 1,
                    numScroll: 1,
                },
            ],
        };
    },
    created() {
        this.productService = new ProductService();
        this.photoService = new PhotoService();
    },
    mounted() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/demo/badges.scss';
@import '../assets/demo/items.scss';
</style> 

