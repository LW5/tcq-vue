export default {
  namespaced:true,
    state:{
      count:0,
      currentPage:1,
      eachpage:10,
      maxPage:0,
      tableData: [{
      //   count:"",
      //   currentPage:1,
      //   eachpage:10,
      //   maxPage:"",
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
       state.count=data.count
       state.currentPage=data.currentPage
       state.eachpage=data.eachpage
       state.maxPage=data.maxPage
       state.tableData = data.rows
      //  console.log(state)
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
        const data = await fetch("/shop/getshop", {
          method: "post",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
        context.commit('assign',data)  
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
     async getShopByPage(context,data3) {
      //  console.log(data3)
      const data = await fetch("/shop/getShopByPage", {
        method: "post",
        body: JSON.stringify(data3),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
      // console.log(data)
      context.commit('assign',data)  
    },
   
    }
  }