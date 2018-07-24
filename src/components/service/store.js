export default {
  namespaced:true,
    state:{
      tableData: [{
        shopName: '',
        shopLicenceImg: '',
        shopUserImg: '',
        shopAdd: '',
        shopLocation: '  ',
        shopCorporate: "",
        shopTel:"",
        shopImg:"",
        shopFeature:"",
      }],
    },
    mutations: {
      assign(state, data) {
        state.tableData = data
      },
    },
    actions: {
      async addShop(context,data1) {
        // console.log(data1)
         await fetch("/shop/addshop", {
          method: "post",
          body: JSON.stringify(data1),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
        // console.log('in')
        // context.commit('assign',data)
        // console.log(data)
      },
      async getShop(context) {
        // console.log(page)
        const data = await fetch("/shop/getshop", {
          method: "post",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
        // this.assign(data)
        // console.log('in')
        context.commit('assign',data)
        // console.log(data)
      },
      async delshop(context,id) {
         await fetch("/shop/delshop", {
          method: "post",
          body: JSON.stringify({id}),
          headers: {
            "Content-Type": "application/json"
          }
        }).then()
       
      },
      async changeshop(context,data) {
        // console.log(data)
        await fetch("/shop/changeshop", {
         method: "post",
         body: JSON.stringify(data),
         headers: {
           "Content-Type": "application/json"
         }
       }).then()
      
     },
   
    }
  }