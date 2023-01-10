<template>
  <div class="category_detail" v-if="_category.id">
    <div class="list-group mb-3">
      <div class="list-group-item d-flex align-items-center">
        <img :src="image" alt="" />
        <div class="flex-fill ps-3 pe-3">
          <div class="fw-600">{{ _category.name }}</div>
          <div class="fs-12px text-muted">
            <span v-for="(filter, findex) in _category.filters" :key="findex">
              {{ filter.name }} : {{ filter.values }} <br />
            </span>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" data-bs-toggle="dropdown" class="text-muted"
            ><i class="fa fa-ellipsis-h"></i
          ></a>
          <div class="dropdown-menu dropdown-menu-right">
            <button
              type="button"
              class="btn btn-default me-2"
              data-bs-toggle="modal"
              :data-bs-target="'#modalCategory' + index"
            >
              Update
            </button>
            <a
              @click="deleteCategory"
              class="dropdown-item"
              data-bs-toggle="modal"
              :data-bs-target="'#modalCategory' + index"
              >Update</a
            >
          </div>
          <category-modal
            :index="index"
            @setProductCategory="setProductCategory($event, selectcategory)"
          >
          </category-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryModal from "./CategoryModal.vue";

export default {
  components: { CategoryModal },
  props: {
    category: {},
    image: "",
    index: Number,
  },
  data(){
    return {
      _category: this.category
    }
  },
  methods: {
    setProductCategory(selectcategory){
      this._category = selectcategory
      this.$store.state.listProduct[this.index].category = selectcategory
    }
  },
};
</script>
<style>
.category_detail img {
  max-width: 50px;
}
</style>