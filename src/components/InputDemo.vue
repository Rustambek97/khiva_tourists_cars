<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h5>Galleria</h5>
                <Galleria :value="images" :responsiveOptions="galleriaResponsiveOptions" :numVisible="7" :circular="true" containerStyle="max-width: 800px; margin: auto">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                    </template>
                    <!-- <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                    </template> -->
                </Galleria>
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
