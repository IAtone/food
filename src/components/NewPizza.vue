<template>
  <form action>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label for class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label for class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea v-model="newPizza.discription" rows="5" class="form-control"></textarea>
      </div>
    </div>
      <p>
        <strong>选项1</strong>
      </p>
      <div class="form-group row">
        <label for class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.size1">
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-1">价格</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.price1">
        </div>
      </div>
      <p>
        <strong>选项2</strong>
      </p>
      <div class="form-group row">
        <label for class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.size2">
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-1">价格</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.price2">
        </div>
      </div>
    <div class="form-group row">
        <button class="btn btn-success" @click="addMenuItem" type="button">添加</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newPizza: {}
    };
  },
  methods: {
    addMenuItem() {
      let data = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [
          {
            size: this.newPizza.size1,
            price: this.newPizza.price1
          },
          {
            size: this.newPizza.size2,
            price: this.newPizza.price2
          }
        ]
      }
      // console.log(this.newPizza)

      // fetch('https://wd0613301809pbsjzx.wilddogio.com/menu.json', {
      //   method: 'POST',
      //   headers: {
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify(data)
      // }).then(res => res.json())
      // // .then(data => console.log(data))
      // .then(data => this.$router.push({name: 'menuLink'}))
      // .catch(err => console.log(err));

      // this.http.post("menu.json", data)
      // .then(res => {
      //   this.$router.push({name: "menuLink"})
      // })

      this.http.post("menu.json", data)
      .then(res => this.$store.commit("pushToMenuItems", data))
    }
  }
};
</script>

<style scoped>
.btn-success {
    margin: 0 auto;
}
</style>

