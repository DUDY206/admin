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
        <div class="table-responsive" v-dragscroll>
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th class="pt-0 pb-2">Thumb</th>
                <th class="pt-0 pb-2">Ảnh chi tiết</th>
                <th class="pt-0 pb-2">Tên</th>
                <th class="pt-0 pb-2">Mô tả</th>
                <th class="pt-0 pb-2">Thông tin thêm</th>
                <th class="pt-0 pb-2">Giá mặc định</th>
                <th class="pt-0 pb-2">Giá bán</th>
                <th class="pt-0 pb-2">Mã SKU</th>
                <th class="pt-0 pb-2">SaleCount</th>
                <th class="pt-0 pb-2">Danh mục</th>
                <th class="pt-0 pb-2">Thuộc tính</th>
                <th class="pt-0 pb-2">Filters</th>
                <th class="pt-0 pb-2">#</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(product, index) in listProducts"
                :key="index"
                :class="getClassEditted(index)"
              >
                <!-- <td class="w-10px align-middle">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="product1"
                    />
                    <label class="form-check-label" for="product1"></label>
                  </div>
                </td> -->
                <td>
                  <img
                    class="preview-media"
                    alt=""
                    :src="listImageThumbnail?.[index]?.[0]?.data"
                    v-if="
                      isImageFileType(listImageThumbnail?.[index]?.[0]?.type)
                    "
                  />
                  <video
                    width="320"
                    height="240"
                    controls=""
                    class="preview-media"
                    alt=""
                    v-else
                  >
                    <source :src="listImageThumbnail?.[index]?.[0]?.data" />
                  </video>
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
                    v-if="isImageFileType(listImages?.[index]?.[0]?.type)"
                  />
                  <video class="preview-media" alt="" v-else>
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
                    :data-bs-target="'#modalDeleteProduct' + index"
                  >
                    Delete
                  </button>
                  <div class="modal fade" :id="'modalDeleteProduct' + index">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Xác nhận san pham</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <table style="border: none">
                            <tr>
                              <td><b>ID</b></td>
                              <td>: {{ product.id }}</td>
                            </tr>
                            <tr>
                              <td><b>Tên</b></td>
                              <td>: {{ product.name }}</td>
                            </tr>
                          </table>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-default"
                            data-bs-dismiss="modal"
                          >
                            Hủy
                          </button>
                          <button
                            type="button"
                            data-bs-dismiss="modal"
                            class="btn btn-primary"
                            @click="(event) => deleteProduct(product.id)"
                          >
                            Xác nhận
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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

  <toast-message
    :success_message="success_message"
    :error_message="error_message"
  ></toast-message>
</template>
<script>
import { ProductService } from "../services/product.service";
import { CategoryService } from "../services/category.service";
import EditPropertyProduct from "./EditPropertyProduct.vue";
import EditFiltersProduct from "./EditFiltersProduct.vue";
import CategoryWidget from "../components/category/widget.vue";
import { ImageService } from "../services/image.service";
import InputMultipleFile from "../components/form/InputMultipleFile.vue";
import * as lodash from "lodash";
import ToastMessage from "../components/toast/ToastMessage.vue";
import {
  checkRowEdit,
  getClassEditted,
  toastSuccess,
  toastError,
} from "../mixin/mixin";
export default {
  mixins: [
    {
      methods: {
        checkRowEdit,
        getClassEditted,
        toastSuccess,
        toastError,
      },
    },
  ],
  components: {
    EditPropertyProduct,
    EditFiltersProduct,
    CategoryWidget,
    InputMultipleFile,
    ToastMessage,
  },
  data() {
    return {
      listEditted: [],
      listProducts: [],
      categories: [],
      listImageCategory: [],
      listImages: [],
      success_message: "",
      error_message: "",
    };
  },
  methods: {
    viewProductDetail: function (id) {
      this.$router.push(`/product/${id}`);
    },
    setParentProps(event, index) {
      this.listProducts[index].properties = event;
    },
    saveParentFilter(event, index) {
      this.listProducts[index].filters = event;
    },
    extractFilters(filters) {
      const refFilters = lodash.cloneDeep(filters);
      return refFilters.map((filter) => {
        filter.value = filter.value.filter((e) => e);
        if (filter.value.length == 1) {
          filter.value = filter.value[0];
        }
        return filter;
      });
    },
    async getNewImagesBeforeUpload(uploadKey, previewKey, index) {
      const currentUploadThumb = this.$store.state[uploadKey][index];
      const presignThumb = await this.getPresignFileURL(currentUploadThumb);
      return [
        presignThumb.filter((e) => e),
        presignThumb.map((presign, i) => {
          if (presign)
            return {
              url: presign.key,
              type: new RegExp(/image/).test(this[previewKey][index][i].type)
                ? "image"
                : "video",
            };
          else
            return {
              url: currentUploadThumb[index],
              type: new RegExp(/image/).test(this[previewKey][index][i].type)
                ? "image"
                : "video",
            };
        }),
      ];
    },
    async updateProduct(index) {
      try {
        const [presignThumb, newThumb] = await this.getNewImagesBeforeUpload(
          "uploadThumbnail",
          "listImageThumbnail",
          index
        );
        console.log(newThumb);

        const [presignImage, newImage] = await this.getNewImagesBeforeUpload(
          "uploadFiles",
          "listImages",
          index
        );
        const updateProduct = lodash.cloneDeep(this.listProducts[index]);

        //update image to presign
        updateProduct.thumb_image = newThumb;
        updateProduct.images = newImage;
        updateProduct.filters = this.extractFilters(updateProduct.filters);
        console.log(this.removeNullValue(updateProduct.properties));
        updateProduct.properties = this.removeNullValue(
          updateProduct.properties
        );
        updateProduct.category = updateProduct.category?.id;

        delete updateProduct.best_seller;
        delete updateProduct.featured;
        delete updateProduct.new;
        delete updateProduct.slug;
        delete updateProduct.stop_sell;

        await ProductService().updateOne(updateProduct);

        //upload image when update successful
        const uploadThumbnailFile = this.$store.state.uploadThumbnail[
          index
        ].filter((e) => e instanceof File);
        const uploadImagesFile = this.$store.state.uploadFiles[index].filter(
          (e) => e instanceof File
        );
        ImageService.uploadMultiplePresign(uploadThumbnailFile, presignThumb);
        ImageService.uploadMultiplePresign(uploadImagesFile, presignImage);

        this.toastSuccess("Updated product successfully");
      } catch (e) {
        console.log(e);
      }
    },
    async getPresignFileURL(listFile = []) {
      return await Promise.all(
        listFile.map(async (file) => {
          if (file instanceof File) {
            const response = await ImageService.getPresignUrlImageProduct(
              file.name
            );
            return JSON.parse(response.data.data).formData;
          }
        })
      );
    },
    isImageFileType(fileType) {
      return new RegExp(/image/).test(fileType);
    },
    async deleteProduct(id) {
      try {
        const response = await ProductService().deleteOne(id);
        this.toastSuccess("Delete successfully");
      } catch (e) {
        this.toastError("Error deleting product");
      }
    },
    removeNullValue(properties) {
      console.log(properties);
      return properties.map((property) => {
        property.value = property.value.filter((e) => e);
        return property;
      });
    },
  },

  computed: {
    listImageThumbnail: {
      get() {
        return this.$store.state.previewThumbnail;
      },
    },
  },
  async mounted() {
    this.listEditted = Array(this.listProducts.length).fill(false);

    const res = await ProductService().getProductPage();
    this.listProducts = res.data;
    // this.$store.commit("setListproduct", this.listProducts);

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

        listUploadThumbnails[index] =
          product.thumb_image?.map((img) => img.url) ?? [];
        this.listImageThumbnail[index] =
          (await Promise.all(
            product.thumb_image.map(async (img) => {
              console.log(img);
              return {
                data: await ImageService.getBlobSrc(img.url),
                type: img.type,
              };
            })
          )) ?? [];

        //images detail
        const countImages = product.images.length;
        listUploadFiles[index] = product.images?.map((img) => img.url) ?? [];
        this.listImages[index] =
          (await Promise.all(
            product.images.map(async (img) => {
              return {
                data: await ImageService.getBlobSrc(img.url),
                type: img.type,
              };
            })
          )) ?? [];
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
  width: 50px;
  height: 50px;
  object-fit: fill;
  display: block;
}

table {
  cursor: grab;
}
</style>