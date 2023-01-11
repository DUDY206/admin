<template>
  <div class="d-flex align-items-center mb-3">
    <div>
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Trang</a></li>
        <li class="breadcrumb-item active">Sản phẩm</li>
      </ul>
      <h1 class="page-header mb-0">Sản phẩm</h1>
    </div>

    <div class="ms-auto">
      <a href="/product/create" class="btn btn-primary"
        ><i class="fa fa-plus-circle fa-fw me-1"></i> Add Product</a
      >
    </div>
  </div>

  <card>
    <div class="tab-content p-4">
      <div class="tab-pane fade show active" id="allTab">
        <!-- BEGIN input-group -->
        <div class="input-group mb-4">
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter products &nbsp;
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
          <div class="flex-fill position-relative">
            <div class="input-group">
              <div
                class="
                  input-group-text
                  position-absolute
                  top-0
                  bottom-0
                  bg-none
                  border-0
                "
                style="z-index: 1020"
              >
                <i class="fa fa-search opacity-5"></i>
              </div>
              <input
                type="text"
                class="form-control ps-35px"
                placeholder="Search products"
              />
            </div>
          </div>
        </div>
        <!-- END input-group -->

        <!-- BEGIN table -->
        <div class="table-responsive">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th class="pt-0 pb-2"></th>
                <th class="pt-0 pb-2">Thumb</th>
                <th class="pt-0 pb-2">Ảnh chi tiết</th>
                <th class="pt-0 pb-2">Tên</th>
                <th class="pt-0 pb-2">Mô tả</th>
                <th class="pt-0 pb-2">Thông tin thêm</th>
                <th class="pt-0 pb-2">Giá mặc định</th>
                <th class="pt-0 pb-2">Giá bán</th>
                <th class="pt-0 pb-2">Mã SKU</th>
                <th class="pt-0 pb-2">Slug</th>
                <th class="pt-0 pb-2">SaleCount</th>
                <th class="pt-0 pb-2">Danh mục</th>
                <th class="pt-0 pb-2">Thuộc tính</th>
                <th class="pt-0 pb-2">Filters</th>
                <th class="pt-0 pb-2">#</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in listProducts" :key="index">
                <td class="w-10px align-middle">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="product1"
                    />
                    <label class="form-check-label" for="product1"></label>
                  </div>
                </td>
                <td>
                  <img
                    class="preview-media"
                    alt=""
                    :src="listImageThumbnail?.[index]?.[0]?.data"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-default btn-sm d-block"
                    data-bs-toggle="modal"
                    :data-bs-target="'#modalThumbnail' + index"
                  >
                    Sủa
                  </button>
                  <div class="modal fade" :id="'modalThumbnail' + index">
                    <div class="modal-dialog modal-xl">
                      <div class="modal-content">
                        <input-multiple-file
                          :index="index"
                          :keyListFile="'previewThumbnail'"
                          :keyUploadFile="'uploadThumbnail'"
                          :mutationListFile="'setPreviewThumbnail'"
                          :mutationUpload="'setUploadThumbnail'"
                        ></input-multiple-file>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <img
                    class="preview-media"
                    alt=""
                    :src="listImages?.[index]?.[0]?.data"
                    v-if="listImages?.[index]?.[0]?.type === 'image'"
                  />
                  <video
                    class="preview-media"
                    alt=""
                    v-if="listImages?.[index]?.[0]?.type === 'video'"
                  >
                    <source :src="listImages?.[index]?.[0]?.data" />
                  </video>
                  <button
                    type="button"
                    class="btn btn-outline-default btn-sm d-block"
                    data-bs-toggle="modal"
                    :data-bs-target="'#modalImages' + index"
                  >
                    Sủa
                  </button>
                  <div class="modal fade" :id="'modalImages' + index">
                    <div class="modal-dialog modal-xl">
                      <div class="modal-content">
                        <input-multiple-file
                          :index="index"
                          :keyListFile="'previewFiles'"
                          :keyUploadFile="'uploadFiles'"
                          :mutationListFile="'setPreviewFiles'"
                          :mutationUpload="'setUploadFiles'"
                        ></input-multiple-file>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="discountName"
                    id="discountName"
                    v-model="product.name"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="discountName"
                    id="discountName"
                    v-model="product.description"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="discountName"
                    id="discountName"
                    v-model="product.addinfo"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="discountName"
                    id="discountName"
                    v-model="product.default_price"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="selling_price"
                    id="selling_price"
                    v-model="product.selling_price"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="sku"
                    id="sku"
                    v-model="product.sku"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="slug"
                    id="slug"
                    v-model="product.slug"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <textarea
                    @input="checkRowEdit(index)"
                    type="text"
                    name="saleCount"
                    id="saleCount"
                    v-model="product.sale_count"
                  ></textarea>
                </td>
                <td class="align-middle">
                  <category-widget
                    :category="product.category"
                    :image="listImageCategory[index]"
                    :index="index"
                  >
                  </category-widget>
                </td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-default me-2"
                    data-bs-toggle="modal"
                    :data-bs-target="'#modalCoverExample' + index"
                  >
                    Xem
                  </button>

                  <div
                    class="modal modal-cover fade"
                    :id="'modalCoverExample' + index"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <edit-property-product
                          @setParentProps="setParentProps($event, index)"
                          :propertiesList="product.properties"
                        >
                        </edit-property-product>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-default me-2"
                    data-bs-toggle="modal"
                    :data-bs-target="'#editProdFilters' + index"
                  >
                    Xem
                  </button>

                  <div
                    class="modal modal-cover fade"
                    :id="'editProdFilters' + index"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <edit-filters-product
                          @saveParentFilter="saveParentFilter($event, index)"
                          :filtersList="product.filters"
                        ></edit-filters-product>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-primary pr-2"
                    @click="updateProduct(index)"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger me-2"
                    data-bs-toggle="modal"
                    :data-bs-target="'#modalDeletecategory' + index"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END table -->

        <div class="d-md-flex align-items-center">
          <div class="me-md-auto text-md-left text-center mb-2 mb-md-0">
            Showing 1 to 10 of 57 entries
          </div>
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">6</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import { ProductService } from "../services/product.service";
import { CategoryService } from "../services/category.service";
import EditPropertyProduct from "./EditPropertyProduct.vue";
import EditFiltersProduct from "./EditFiltersProduct.vue";
import CategoryWidget from "../components/category/widget.vue";
import { ImageService } from "../services/image.service";
import InputMultipleFile from "../components/form/InputMultipleFile.vue";
export default {
  components: {
    EditPropertyProduct,
    EditFiltersProduct,
    CategoryWidget,
    InputMultipleFile,
  },
  methods: {
    viewProductDetail: function (id) {
      alert("asdas");
      this.$router.push(`/product/${id}`);
    },
    setParentProps(event, index) {
      this.listProducts[index].properties = event;
    },
    saveParentFilter(event, index) {
      this.listProducts[index].filters = event;
    },
    async updateProduct(index) {
      const presignThumb = await this.getPresignFileURL(
        this.$store.state.uploadThumbnail?.[index]
      );
      console.log(presignThumb);
    },
    async getPresignFileURL(listFile = []) {
      console.log(listFile);
      return await Promise.all(
        listFile.map(async (file) => {
          if (file) {
            const response = await ImageService.getPresignUrlImageProduct(
              file.name
            );
            return JSON.parse(response.data.data).formData;
          }
        })
      );
    },
  },
  data() {
    return {
      listProducts: [],
      categories: [],
      listImageCategory: [],
      listImageThumbnail: [],
      listImages: [],
    };
  },
  async mounted() {
    const res = await ProductService().getProductPage();
    this.listProducts = res.data;

    this.listImageCategory = await Promise.all(
      this.listProducts.map(async (product) => {
        if (product.category?.image) {
          return await ImageService.getBlobSrc(product.category?.image);
        }
      })
    );

    const listUploadThumbnails = [];
    const listUploadFiles = [];
    //add all file to blob
    await Promise.all(
      this.listProducts.map(async (product, index) => {
        //thumb image
        const countThumbImage = product.thumb_image.length;
        if (countThumbImage) {
          listUploadThumbnails.push(Array(countThumbImage).fill(""));
          this.listImageThumbnail.push(
            await Promise.all(
              product.thumb_image.map(async (img) => {
                return {
                  data: await ImageService.getBlobSrc(img.url),
                  type: img.type,
                };
              })
            )
          );
        }

        //images detail
        const countImages = product.images.length;
        if (countImages) {
          listUploadFiles.push(Array(countImages).fill(""));
          this.listImages.push(
            await Promise.all(
              product.images.map(async (img) => {
                return {
                  data: await ImageService.getBlobSrc(img.url),
                  type: img.type,
                };
              })
            )
          );
        }
      })
    );

    //save thumbnail to store
    this.$store.commit("setPreviewThumbnail", this.listImageThumbnail);
    this.$store.commit("setUploadThumbnail", listUploadThumbnails);

    //save details image to store
    this.$store.commit("setPreviewFiles", this.listImages);
    this.$store.commit("setUploadFiles", listUploadFiles);
  },
};
</script>
<style>
textarea {
  border: none;
  height: 80px;
  resize: none;
}

.modal-dialog {
  max-width: 80%;
  align-items: start !important;
  height: 90vh;
}

.modal-content {
  height: 100%;
  padding: 50px;
}

table img.preview-media,
table video.preview-media {
  width: 150px;
  height: 150px;
  object-fit: fill;
  display: block;
}
</style>