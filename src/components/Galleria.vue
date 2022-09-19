<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h3 style="text-align:center">GALLERIA</h3>
                <Galleria :value="products" v-model:activeIndex="activeIndex" :responsiveOptions="responsiveOptions"
                    :numVisible="7" containerStyle="max-width: 850px" :circular="true" :fullScreen="true"
                    :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayCustom">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"
                            style="display: block;" />
                    </template>
                </Galleria>

                <div v-if="products" class="grid" style="max-width: 100%;">
                    <div v-for="(image, index) of products" class="col-1" :key="index">
                        <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer"
                            @click="imageClick(index)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from "../service/ProductService";

export default {
    data() {
        return {
            products: [],
            images: null,
            activeIndex: 0,
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
            displayBasic: false,
            displayBasic2: false,
            displayCustom: false
        };
    },
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getGalleria().then((products) => {
            this.products = products;
        });
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/demo/badges.scss';
@import '../assets/demo/items.scss';
</style> 
