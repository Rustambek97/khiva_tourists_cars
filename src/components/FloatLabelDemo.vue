<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h5>Cars for Travels</h5>
                <Carousel :value="products" :numVisible="3" :numScroll="3" :circular="false" :responsiveOptions="carouselResponsiveOptions">
                    <template #item="product">
                        <div class="product-item">
                            <div class="product-item-content">
                                <div class="mb-3">
                                    <img :src="'images/cars/' + product.data.image" :alt="product.data.name" class="product-image" />
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
                                    <div class="col-12">
                                        <Button type="button" label="Price for Travels" @click="toggleDataTable" class="p-button-success"/>
                                        <OverlayPanel ref="op2" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 25rem">
                                            <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect" responsiveLayout="scroll">
                                                <Column field="name" header="Name" :sortable="true" headerStyle="min-width:10rem;"></Column>
                                                <Column header="Image" headerStyle="min-width:10rem;">
                                                    <template #body="slotProps">
                                                        <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="100" class="shadow-2" />
                                                    </template>
                                                </Column>
                                                <Column field="price" header="Price" :sortable="true" headerStyle="min-width:8rem;">
                                                    <template #body="slotProps">
                                                        {{formatCurrency(slotProps.data.price)}}
                                                    </template>
                                                </Column>
                                            </DataTable>
                                        </OverlayPanel>
                                    </div>
                                    <div class="col-12">
                                   
                                            <Button type="button" label="Galleria" @click="toggleGalleria" class="p-button-success"/>
                                            <OverlayPanel ref="op3" appendTo="body" :showCloseIcon="true">
                                                <Galleria :value="images" :responsiveOptions="galleriaResponsiveOptions" :numVisible="7" :circular="true" containerStyle="max-width: 300px; margin: auto">
                                                    <template #item="slotProps">
                                                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                                                    </template>
                                                    <!-- <template #thumbnail="slotProps">
                                                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                                                    </template> -->
                                                </Galleria>
                                            </OverlayPanel>
                                    </div>
                                    <div class="col-12">
                                        <Button type="button" label="Data" @click="toggleData" class="p-button-success"/>
                                        <OverlayPanel style="width: 25rem" ref="op4" appendTo="body" :showCloseIcon="true">
                                            <TabView style="text-align: justify;">
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
                                        </OverlayPanel>
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
            carouselResponsiveOptions: [
                {
                    breakpoint: "1024px", //1500
                    numVisible: 3,
                    numScroll: 3,
                },
                {
                    breakpoint: "768px", //1392
                    numVisible: 2,
                    numScroll: 2,
                },
                {
                    breakpoint: "560px", //824
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
        this.productService.getProducts().then((products) => {
            this.products = products;
        });
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    },
    methods: {
			open() {
				this.display = true;
			},
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
				this.$refs.op.toggle(event);
			},
			toggleDataTable(event) {
				this.$refs.op2.toggle(event);
			},
            toggleGalleria(event) {
				this.$refs.op3.toggle(event);
			},
            toggleData(event) {
				this.$refs.op4.toggle(event);
			},
			formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			},
			onProductSelect(event) {
				this.$refs.op.hide();
				this.$toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
			},
			confirm(event) {
				this.$confirm.require({
					target: event.currentTarget,
					message: 'Are you sure you want to proceed?',
					icon: 'pi pi-exclamation-triangle',
					accept: () => {
						this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
					},
					reject: () => {
						this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
					}
				});
			}
		}
};
</script>

<style lang="scss" scoped>
@import '../assets/demo/badges.scss';
@import '../assets/demo/items.scss';
</style> 
