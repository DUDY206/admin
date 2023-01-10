<template>
  <div>
    <input
      type="file"
      accept="image/*"
      multiple="multiple"
      @change="previewMultiFile"
      class="form-control-file"
      id="my-file"
    />
    <div class="border p-2 mt-3 row" style="overflow-x: auto">
      <p>Preview Here:</p>
      <template v-if="previewFiles.length">
        <div
          v-for="(item, index) in previewFiles[index]"
          :key="index"
          class="preview-image col-xl-3"
        >
          <img
            :src="item.data"
            class="img-fluid"
            v-if="isImageFile(item.type)"
          />

          <video v-else width="320" height="240" controls>
            <source :src="item" />
          </video>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    keyListFile: "",
    keyUploadFile: "",
    mutationListFile: "",
    mutationUpload: "",
  },
  computed: {
    previewFiles: {
      get() {
        return this.$store.state[this.keyListFile];
      },
    },
  },
  methods: {
    isImageFile(file) {
      return new RegExp(/image/).test(file);
    },
    previewMultiFile(event) {
      const input = event.target;
      let count = input.files.length;
      let index = 0;
      const files = [];
      const previewFiles = [];
      if (input.files) {
        console.log(input.files, index);

        while (count--) {
          const reader = new FileReader();
          reader.onload = (e) => {
            previewFiles.push({
              data: e.target.result,
              type: "",
            });
          };
          reader.onload.files.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
      files.map((file, index) => {
        console.log(file, previewFiles[index]);
        previewFiles[index].type = file.type;
      });
      const storeFiles = this.$store.state[this.keyListFile];
      storeFiles[this.index] = files;
    },
  },
};
</script>
