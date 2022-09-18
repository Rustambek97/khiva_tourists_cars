<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <!-- one -->
                <div class="col-12">
                    <Dialog header="Maps" v-model:visible="display" :breakpoints="{'960px': '100vw'}"
                        :style="{width: '50vw'}" :modal="true">
                        <img src="images/welcome/uzbekistan_map.png" style="width: 100%;" />
                    </Dialog>
                    <Button type="button" label="TRAVEL TO UZBEKISTAN" @click="toggle" class="p-button-success" />
                </div>
                <Carousel :value="products" :numVisible="3" :numScroll="1" 
                    :responsiveOptions="carouselResponsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
                    <template #item="product">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3 flex justify-content-center">
                                    <img :src="'images/welcome/' + product.data.image" :alt="product.data.name"
                                        class="product-image" />
                                </div>
                                <div>
                                    <h4 class="mb-1">
                                        {{ product.data.name }}
                                    </h4>
                                    <h5 class="mt-0 mb-2">
                                        ${{ product.data.price }}
                                    </h5>
                                    <h6 class="mt-0 mb-1">
                                        {{ product.data.description }}
                                    </h6>
                                </div>

                                <div>
                                    <div class="col-12">
                                        <Button type="button" label="Price for Cars"
                                            @click="toggleDataTable(product.data.id)" class="p-button-success" />
                                    </div>
                                    <div class="col-12">
                                        <Button type="button" label="Galleria" @click="toggleGalleria(product.data.id)"
                                            class="p-button-success" />
                                    </div>
                                    <div class="col-12">
                                        <Button type="button" label="Data" @click="toggleData(product.data.id)"
                                            class="p-button-success" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </template>

                </Carousel>
                <Dialog header="Cars" v-model:visible="display2" :breakpoints="{'960px': '100vw'}"
                    :style="{width: '50vw'}" :modal="true">
                    <DataTable :value="cars" v-model:selection="selectedProduct" selectionMode="single"
                        :paginator="true" :rows="5" @row-select="onProductSelect" responsiveLayout="scroll">
                        <Column field="name" header="Name" :sortable="true" headerStyle="min-width:10rem;">
                            <template #body="car">
                                {{(car.data.name)}}
                            </template>
                        </Column>
                        <Column header="Image" headerStyle="min-width:10rem;">
                            <template #body="car">
                                <img :src="'images/cars/' + car.data.image" :alt="car.data.image" width="100"
                                    class="shadow-2" />
                            </template>
                        </Column>
                        <Column field="price" header="Price" :sortable="true" headerStyle="min-width:8rem;">
                            <template #body="car">
                                ${{(car.data.price)}}
                            </template>
                        </Column>
                    </DataTable>
                </Dialog>

                <Dialog header="Galleria" v-model:visible="display3" :breakpoints="{'960px': '100vw'}"
                    :style="{width: '50vw'}" :modal="true">

                    <Galleria :value="galleria" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true"
                        containerStyle="max-width: 960px" :showItemNavigators="true" :showThumbnails="false">
                        <template #item="slotProps">
                            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                style="width: 100%; display: block;" />
                        </template>
                        <template #thumbnail="slotProps">
                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"
                                style="display: block;" />
                        </template>
                    </Galleria>
                </Dialog>

                <Dialog header="Data" v-model:visible="display4" :breakpoints="{'960px': '100vw'}"
                    :style="{width: '50vw'}" :modal="true">
                    <TabView :value="text" style="text-align: justify;">
                        <TabPanel header="Duration">
                            <p class="line-height-3 m-0">
                                {{product.description1}}
                            </p>
                        </TabPanel>
                        <TabPanel header="Driving time">
                            <p class="line-height-3 m-0">
                                {{product.description2}}
                            </p>
                        </TabPanel>
                        <TabPanel header="Distance">
                            <p class="line-height-3 m-0">
                                {{product.description3}}
                            </p>
                        </TabPanel>
                    </TabView>
                </Dialog>

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
            display: false,
            display2: false,
            display3: false,
            display4: false,
            displayConfirmation: false,
            products: [],
            cars: [],
            galleria: [],
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
                    breakpoint: "1024px", //1500 1024
                    numVisible: 3,
                    numScroll: 3,
                },
                {
                    breakpoint: "768px", //1392 768
                    numVisible: 2,
                    numScroll: 2,
                },
                {
                    breakpoint: "560px", //824 560
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
        this.productService.getWelcome().then((products) => {
            this.products = products;
        });
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    },
    methods: {
        // open() {
        //     this.display = true;
        // },
        close() {
            this.display = false;
        },
        openConfirmation() {
            this.displayConfirmation = true;
        },
        closeConfirmation() {
            this.displayConfirmation = false;
        },
        toggle(event) {
            this.display = true;
            this.$refs.op.toggle(event);
        },
        toggleDataTable(event) {
            this.cars = this.products[event - 1].cars;
            this.display2 = true;
            // this.$refs.op2.toggleDataTable(event);
        },
        toggleGalleria(event) {
            this.galleria = this.products[event - 1].galleria;
            console.log(this.galleria);
            this.display3 = true;
            // this.$refs.op3.toggleGalleria(event);
        },
        toggleData(event) {
            this.product = this.products[event - 1];
            console.log(this.product);
            this.display4 = true;
            // this.$refs.op4.toggleData(event);
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 });
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
</script>
    
<style lang="scss" scoped>
@import '../assets/demo/badges.scss';
@import '../assets/demo/items.scss';

h5 {
    margin-bottom: -0.5rem;
    text-align: center;
}

* {
    cursor: context-menu;
}
</style> 
    