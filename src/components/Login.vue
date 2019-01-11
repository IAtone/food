<template>
  <div class="row mt-3">
    <div class="col-md-4 col-lg-4"></div>
    <div class="col-md-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block userImg" src="../assets/1.png" alt>
          <form action @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-lg-4"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  //组件内的守卫
  beforeRouteEnter: (to, from, next) => {
    next(vm => vm.$store.dispatch("setUser", null))
  },
  methods: {
    onSubmit() {
      axios.get('/users.json')
      .then(res => {
        // console.log(res.data)
        const data = res.data
        const users = []
        for(let key in data) {
          const user = data[key]
          // console.log(user)
          users.push(user)
        }
        // console.log(users)
        //实现过滤
        let result = users.filter((user) => {
          return user.email === this.email && user.password === this.password
        })
        // console.log(result)
        if (result != null && result.length > 0) {
          this.$store.dispatch("setUser", result[0].email)
          console.log(result[0].email)
          this.$router.push({name: "homeLink"})
        } else {
          alert('账号或密码错误！')
          this.$store.dispatch("setUser", null)
        }
      })
    }
  }
};
</script>

<style>
.userImg {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 5px solid #abcdef;
}
</style>
