<template>
  <div class="document-details" :style="getStyle(1)">
    <modal
      name="edit-doc"
      :height="getModalSize(1, 0.7)"
      :width="getModalSize(2, 0.8)"
    >
      <div class="edit-modal-content">
        <h3>Edit Document</h3>

        <label for="">Enter name</label><br />
        <input type="text" v-model="name" placeholder="name" />

        <br /><br />
        <Button
          v-if="!buttonEditClicked"
          @onButtonClick="makeEditToDoc"
          label="Done"
        />
        <p style="margin-top:20px" v-else>Editing your doc...</p>
      </div>
    </modal>

    <modal
      name="sign-doc"
      :height="getModalSize(1, 0.7)"
      :width="getModalSize(2, 0.8)"
    >
      <Sign @onSignDone="embedImages" />
    </modal>
    <!-- <iframe
      title="lawyerup-nda"
      :src="pdfUrl"
      width="100%"
      :style="getStyle(0.85)"
    >
    </iframe> -->

    <object
      width="100%"
      :style="getStyle(0.75)"
      :data="pdfUrl"
      type="application/pdf"
    >
      <embed :src="pdfUrl" type="application/pdf" />
    </object>

    <div class="btn-div">
      <Button @onButtonClick="handleButtonClick" label="Edit Document" />
      <Button @onButtonClick="handleDocSign" label="Sign Document" />
    </div>

    <div class="btn-div">
      <Button @onButtonClick="handlePageNavigation(0)" label="Prev Page" />
      <Button @onButtonClick="handlePageNavigation(1)" label="Next Page" />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import Sign from "../components/Sign";

export default {
  name: "document-details",
  components: {
    Button,
    Sign,
  },
  data: function() {
    return {
        pdfPageLength: -1,
      currentPage: 0,
      signDocButtonClick: false,
      buttonEditClicked: false,
      name: "",
      docUrl:
        "https://firebasestorage.googleapis.com/v0/b/alushare.appspot.com/o/nda.pdf?alt=media&token=7a82f789-0229-40de-a6d9-af7f9b6ee9c5",
      pdfUrl: "",
    };
  },
  methods: {
    async handlePageNavigation(intent) {
      if (intent == 1) {
        if(this.currentPage < this.pdfPageLength-1){
            this.currentPage += 1;
        }
      } else {
        if(this.currentPage > 0){
            this.currentPage -= 1;
        }
      }
      this.pdfUrl = await this.handleThePageOfPDFtoDisplay();
    },
    async handleThePageOfPDFtoDisplay() {
      const firstDonorPdfDoc = await this.loadPdf();

      const pdfDoc = await PDFDocument.create();

      const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [
        this.currentPage,
      ]);

      pdfDoc.addPage(firstDonorPage);

      const pdfBytes = await pdfDoc.save();

      const newUrl = URL.createObjectURL(
        new Blob([pdfBytes], {
          type: "application/pdf",
        })
      );
      window.console.log(newUrl);

      return newUrl;
    },
    async handleDocSign() {
      this.$modal.show("sign-doc");
      //   await this.embedImages();
    },

    async loadPdf() {
      const url = this.docUrl;
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );

      // Load a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Update the length of the pdf to help with navigating
      if(this.pdfPageLength ==  -1){
          this.pdfPageLength = pdfDoc.getPages().length;
      }
      return pdfDoc;
    },

    async embedImages(imageData) {
      this.signDocButtonClick = true;

      const pdfDoc = await this.loadPdf();

      //   const jpgImage = await pdfDoc.embedJpg(imageData);
      const pngImage = await pdfDoc.embedPng(imageData);

      const pngDims = pngImage.scale(0.5);

      const page = pdfDoc.getPages()[1];

      page.drawImage(pngImage, {
        x: 230,
        y: 230,
        width: pngDims.width / 2,
        height: pngDims.height / 2,
      });

      const pdfBytes = await pdfDoc.save();
      const newUrl = URL.createObjectURL(
        new Blob([pdfBytes], {
          type: "application/pdf",
        })
      );
      window.console.log(newUrl);
      this.docUrl = newUrl;

      //Update the current page

      this.pdfUrl = await this.handleThePageOfPDFtoDisplay();

      this.$modal.hide("sign-doc");
      this.signDocButtonClick = false;
    },

    async makeEditToDoc() {
      this.buttonEditClicked = true;
      // Embed the Helvetica font

      const pdfDoc = await this.loadPdf();

      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Get the first page of the document
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      // Get the width and height of the first page
      const { width, height } = firstPage.getSize();

      // Draw a string of text diagonally across the first page
      window.console.log(height, width);
      firstPage.drawText(`${this.name}`, {
        x: 72,
        y: 632,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        // rotate: degrees(-45),
      });

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save();
      const newUrl = URL.createObjectURL(
        new Blob([pdfBytes], {
          type: "application/pdf",
        })
      );
      window.console.log(newUrl);
      this.docUrl = newUrl;

      //Update the current page

      this.pdfUrl = await this.handleThePageOfPDFtoDisplay();

      this.$modal.hide("edit-doc");
      this.buttonEditClicked = false;

      // Trigger the browser to download the PDF document
      //   download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
    },
    getModalSize(intent, ratio) {
      let screenSize = intent == 1 ? window.innerHeight : window.innerWidth;
      return `${screenSize * ratio}px`;
    },
    handleButtonClick() {
      this.$modal.show("edit-doc");
    },
    getStyle(val) {
      return `height:${window.innerHeight * val}px;`;
    },
  },
  async created() {
    window.console.log("created ---======");
    this.pdfUrl = await this.handleThePageOfPDFtoDisplay();
  },
};
</script>

<style lang="scss" scoped>
.document-details {
  width: 100%;
  position: fixed;

  .edit-modal-content {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .btn-div {
    margin-bottom: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    position: sticky;
    bottom: 0;
    // flex-wrap: wrap;
    * {
      width: 100%;
    }
  }

  input {
    padding: 1.5em;
    width: 100%;
  }
}
</style>
