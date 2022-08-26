<template>
	<div class="grid">
		<div class="col-12 lg:col-6">
			
			<div class="card p-fluid">
				<h5>Overlay Panel</h5>
				<div class="grid formgrid">
					<div class="col-6">
						<Button type="button" label="Image" @click="toggle" class="p-button-success"/>
						<OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">
							<img src="images/nature/nature9.jpg" alt="Nature 9" />
						</OverlayPanel>
					</div>
					<div class="col-6">
						<Button type="button" label="DataTable" @click="toggleDataTable" class="p-button-success"/>
						<OverlayPanel ref="op2" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px">
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ProductService from '../service/ProductService'

	export default {
		data() {
			return {
				display: false,
				displayConfirmation: false,
				visibleLeft: false,
				visibleRight: false,
				visibleTop: false,
				visibleBottom: false,
				visibleFull: false,
				products: null,
				selectedProduct: null
			}
		},
		productService: null,
		created() {
			this.productService = new ProductService();
		},
		mounted() {
			this.productService.getProductsSmall().then(data => this.products = data);
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
	}
</script>
