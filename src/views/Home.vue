<template>
  <div class="home" :style="getStyle()">
    <h2>Choose a document</h2>

    <div class="documents-section">
      <router-link to="/document" target="_blank" v-for="item in docs" :key="item.id" class="document-round-button">
        <strong>
          {{ item.name }}
        </strong>
      </router-link>
    </div>
    
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
  },
  data: function() {
    return {
      docs: [
        {
          id: 1,
          name: "NDA",
        },
        {
          id: 2,
          name: "Memorandum Of Understanding",
        },
        {
          id: 3,
          name: "CoPartnership Agreementntract",
        },
        {
          id: 4,
          name: "Letter of intent",
        },
      ],
    };
  },
  methods:{
    getStyle(){
      return `height:${window.innerHeight}px;`;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 12% ;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    font-size: 34px;
  }

  .documents-section {
    margin-top:50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    // justify-content: center;
    // align-items: center;
    .document-round-button {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background: white;
      color: black;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      text-decoration: none;

      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
