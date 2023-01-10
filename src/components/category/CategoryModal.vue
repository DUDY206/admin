<template>
  <div @click="closeSearchResult()">
    <div class="modal modal-cover fade" :id="'modalCategory' + index">
      <div class="modal-dialog">
        <div class="modal-content">
          <search-category></search-category>
          <button type="button" data-bs-dismiss="modal" class="btn btn-primary pr-2"
    @click="(event) => saveCategory(event)">Save</button>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchCategory from '../form/SearchCategory.vue';
import * as lodash from "lodash";
import { closeSearchResult } from '../../mixin/mixin';


export default {
  mixins: [
    {
      methods: {
        closeSearchResult
      },
    },
  ],
  components: {
    SearchCategory
  },
  props: {
    index: Number
  },
  mounted(){
      this.$store.commit("setCategory", {});

},
  methods: {
    saveCategory(event){
      console.log("lodash.cloneDeep(this.$store.state.category)",lodash.cloneDeep(this.$store.state.category))
      this.$emit('setProductCategory', lodash.cloneDeep(this.$store.state.category))
    }
  }
}
</script>