<template>
  <div>
    <h1>Demo</h1>
    <p>Below you can see Vue2-Dropzone in action.</p>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      @vdropzone-file-added="vfileAdded"
      @vdropzone-success="vsuccess"
      @vdropzone-error="verror"
      @vdropzone-removed-file="vremoved"
      @vdropzone-sending="vsending"
      @vdropzone-success-multiple="vsuccessMuliple"
      @vdropzone-sending-multiple="vsendingMuliple"
      @vdropzone-queue-complete="vqueueComplete"
      @vdropzone-total-upload-progress="vprogress"
      @vdropzone-mounted="vmounted"
      @vdropzone-drop="vddrop"
      @vdropzone-drag-start="vdstart"
      @vdropzone-drag-end="vdend"
      @vdropzone-drag-enter="vdenter"
      @vdropzone-drag-over="vdover"
      @vdropzone-drag-leave="vdleave"
      @vdropzone-duplicate-file="vdduplicate"
      :options="dropzoneOptions"
      :duplicateCheck="true"
    ></vue-dropzone>
    <div id="dropzone-thumbnail-container"></div>
  </div>
</template>

<script>
import vueDropzone from "vue2-dropzone";
export default {
  data() {
    return {
      ok: true,
      dropzoneOptions: {
        addRemoveLinks: true,
        headers: { "My-Awesome-Header": "header value" },
        autoQueue: false,
        createImageThumbnails: false,
        maxFiles: 1,
        method: "put",
        paramName: "File",
        previewsContainer: document.querySelector(
          "#dropzone-thumbnail-container"
        ),
        thumbnailHeight: 150,
        thumbnailWidth: 150,
        url: "https://appapi.commonareas.io/api/kit/kititem/file/attach"
      },
      fileAdded: false,
      filesAdded: false,
      success: false,
      error: false,
      removedFile: false,
      sending: false,
      successMultiple: false,
      sendingMultiple: false,
      queueComplete: false,
      uploadProgress: false,
      progress: false,
      myProgress: 0,
      isMounted: false,
      dDrop: false,
      dStarted: false,
      dEnded: false,
      dEntered: false,
      dOver: false,
      dLeave: false,
      dDuplicate: false
    };
  },
  components: {
    vueDropzone
  },
  methods: {
    vfileAdded(file) {
      this.fileAdded = true;
      // window.toastr.info('', 'Event : vdropzone-file-added')
    },
    vfilesAdded(file) {
      this.filesAdded = true;
      // window.toastr.info('', 'Event : vdropzone-files-added')
    },
    vsuccess(file, response) {
      this.success = true;
      // window.toastr.success('', 'Event : vdropzone-success')
    },
    verror(file) {
      this.error = true;
      // window.toastr.error(file.upload.filename, 'Event : vdropzone-error - ' + file.status)
    },
    vremoved(file, xhr, error) {
      this.removedFile = true;
      // window.toastr.warning('', 'Event : vdropzone-removedFile')
    },
    vsending(file, xhr, formData) {
      this.sending = true;
      // window.toastr.warning('', 'Event : vdropzone-sending')
    },
    vsuccessMuliple(files, response) {
      this.successMultiple = true;
      // window.toastr.success('', 'Event : vdropzone-success-multiple')
    },
    vsendingMuliple(file, xhr, formData) {
      this.sendingMultiple = true;
      // window.toastr.warning('', 'Event : vdropzone-sending-multiple')
    },
    vqueueComplete(file, xhr, formData) {
      this.queueComplete = true;
      // window.toastr.success('', 'Event : vdropzone-queue-complete')
    },
    vprogress(totalProgress, totalBytes, totalBytesSent) {
      this.progress = true;
      this.myProgress = Math.floor(totalProgress);
      // window.toastr.success('', 'Event : vdropzone-sending')
    },
    vmounted() {
      this.isMounted = true;
    },
    vddrop() {
      this.dDrop = true;
    },
    vdstart() {
      this.dStarted = true;
    },
    vdend() {
      this.dEnded = true;
    },
    vdenter() {
      this.dEntered = true;
    },
    vdover() {
      this.dOver = true;
    },
    vdleave() {
      this.dLeave = true;
    },
    vdduplicate() {
      this.dDuplicate = true;
    }
  },
  watch: {
    fileAdded() {
      let that = this;
      setTimeout(function() {
        that.fileAdded = false;
      }, 2000);
    },
    filesAdded() {
      let that = this;
      setTimeout(function() {
        that.filesAdded = false;
      }, 2000);
    },
    success() {
      let that = this;
      setTimeout(function() {
        that.success = false;
      }, 2000);
    },
    error() {
      let that = this;
      setTimeout(function() {
        that.error = false;
      }, 2000);
    },
    removedFile() {
      let that = this;
      setTimeout(function() {
        that.removedFile = false;
      }, 2000);
    },
    sending() {
      let that = this;
      setTimeout(function() {
        that.sending = false;
      }, 2000);
    },
    successMultiple() {
      let that = this;
      setTimeout(function() {
        that.successMultiple = false;
      }, 2000);
    },
    sendingMultiple() {
      let that = this;
      setTimeout(function() {
        that.sendingMultiple = false;
      }, 2000);
    },
    queueComplete() {
      let that = this;
      setTimeout(function() {
        that.queueComplete = false;
      }, 2000);
    },
    progress() {
      let that = this;
      setTimeout(function() {
        that.progress = false;
      }, 2000);
    },
    isMounted() {
      let that = this;
      setTimeout(function() {
        that.isMounted = false;
      }, 2000);
    },
    dDrop() {
      let that = this;
      setTimeout(function() {
        that.dDrop = false;
      }, 2000);
    },
    dStarted() {
      let that = this;
      setTimeout(function() {
        that.dStarted = false;
      }, 2000);
    },
    dEnded() {
      let that = this;
      setTimeout(function() {
        that.dEnded = false;
      }, 2000);
    },
    dEntered() {
      let that = this;
      setTimeout(function() {
        that.dEntered = false;
      }, 2000);
    },
    dOver() {
      let that = this;
      setTimeout(function() {
        that.dOver = false;
      }, 2000);
    },
    dLeave() {
      let that = this;
      setTimeout(function() {
        that.dLeave = false;
      }, 2000);
    },
    dDuplicate() {
      let that = this;
      setTimeout(function() {
        that.dDuplicate = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.active {
  color: #78CB5B;
}
.inactive {
  color: #fff000;
}
.fa.fa-circle:before {
  content: "\25C9";
  /*color: #000;*/
}
th {
  text-align: center;
}
td:nth-child(1) {
  text-align: center;
}
td:nth-child(3) {
  text-align: center;
}
td:nth-child(2) {
  padding-left: 40px;
}
.event-active {
  font-weight: bold;
  color: #78CB5B;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}

.dropzone {
  min-height: 150px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: white;
  padding: 20px 20px;
}
</style>