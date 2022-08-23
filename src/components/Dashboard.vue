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
                                        {{ product.data.name }}
                                    </h4>
                                    <h6 class="mt-0 mb-3">
                                        ${{ product.data.price }}
                                    </h6>
                                </div>
                                <div>
                                        <TabView>
                                            <TabPanel header="Header I">
                                                <p class="line-height-3 m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></TabPanel>
                                            <TabPanel header="Header II">
                                                <p class="line-height-3 m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                                            </TabPanel>
                                            <TabPanel header="Header III">
                                                <p class="line-height-3 m-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                                    quo minus.</p>
                                            </TabPanel>
                                        </TabView>
                                   
                                </div>
                                <div>
                                    <Button label="READ MORE" class="mr-2 mb-2"/>
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
            carouselResponsiveOptions: [
                {
                    breakpoint: "1500px",
                    numVisible: 3,
                    numScroll: 3,
                },
                {
                    breakpoint: "1392px",
                    numVisible: 2,
                    numScroll: 2,
                },
                {
                    breakpoint: "824px",
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
