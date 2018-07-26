<template>
<div>
    <div slot="footer" class="dialog-footer" style="margin:10px">
    <el-button @click="dialogFormVisible = true">增加门店</el-button>
   
  </div>
    <el-table
    :data="this.tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
    
      prop="shopName"
      label="名称"
      width="150">
    </el-table-column>
   <el-table-column
        prop="shopLicenceImg"
        label="营业执照"
       
        width="150">

    <template slot-scope="scope">
        <!-- <div>{{scope.row.shopLicenceImg}}</div> -->
      <img  :src="scope.row.shopLicenceImg" alt="" style="width: 50px;height: 50px">
    </template>

  </el-table-column>
   <el-table-column
        prop="shopUserImg"
        label="身份证"
     
        width="180">

    <template slot-scope="scope">
      <img  :src="scope.row.shopUserImg" alt="" style="width: 50px;height: 50px">
    </template>

  </el-table-column>
    <el-table-column
      prop="shopAdd"
      label="地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shopLocation"
      label="定位"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shopCorporate"
      label="法人"
      width="120">
    </el-table-column>
     <el-table-column
      prop="shopTel"
      label="联系电话"
      width="120">
    </el-table-column>
     <el-table-column
        prop="shopImg"
        label="头图"
  
        width="150">

    <template slot-scope="scope">
      <img :src="scope.row.shopImg" alt="" style="width: 50px;height: 50px">
    </template>

  </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
         <!-- @click="dialogFormVisible = true"  -->
        <el-button  type="text" size="small"  @click.native.prevent="editRow(scope.$index, scope.row)">修改</el-button>
        <el-button type="text" size="small"  @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="新增门店" :visible.sync="dialogFormVisible">
  <el-form >
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopName" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="营业执照图片" :label-width="formLabelWidth">
        <el-upload
         ref="upload1"
        class="upload-demo"
        :on-success="handleAvatarSuccess1"
        drag
        action="files/upload"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </el-form-item>
    <el-form-item label="身份证图片" :label-width="formLabelWidth">
        <el-upload
        ref="upload2"
        class="upload-demo"
        :on-success="handleAvatarSuccess2"
        drag
        action="files/upload"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </el-form-item>
    <el-form-item label="营业执照地址" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopAdd" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="定位" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopLocation" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="法人" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopCorporate"  auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item  label="联系电话" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopTel"  auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="简介" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopFeature" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="头图" :label-width="formLabelWidth">
        <el-upload
         ref="upload"
        class="upload-demo"
        drag
        :on-success="handleAvatarSuccess"
        action="files/upload"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button> 
    <el-button type="primary"  @click="add">确 定</el-button>
  </div>

</el-dialog>
 

<el-dialog title="修改门店" :visible.sync="modify">
  <el-form >
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopName" auto-complete="off"></el-input>
    </el-form-item>
    
    <el-form-item label="营业执照图片" :label-width="formLabelWidth">
       <img :src="tableData.shopImg" style="width:150px" alt="">
        <el-upload
         ref="upload1"
        class="upload-demo"
        :on-success="handleAvatarSuccess1"
        drag
        action="files/upload"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </el-form-item>
    <el-form-item label="身份证图片" :label-width="formLabelWidth">
       <img :src="tableData.shopLicenceImg" style="width:150px" alt="">
        <el-upload
        ref="upload2"
        class="upload-demo"
        :on-success="handleAvatarSuccess2"
        drag
        action="files/upload"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </el-form-item>
    <el-form-item label="营业执照地址" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopAdd" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="定位" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopLocation" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="法人" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopCorporate"  auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item  label="联系电话" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopTel"  auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="简介" :label-width="formLabelWidth">
      <el-input v-model="tableData.shopFeature" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="头图" :label-width="formLabelWidth">
        <img :src="tableData.shopUserImg" style="width:150px" alt="">
        <el-upload
         ref="upload"
        class="upload-demo"
        drag
        :on-success="handleAvatarSuccess"
        action="files/upload"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button> 
    <el-button type="primary"  @click="modifyshop">确 定</el-button>
  </div>

</el-dialog>


 

  
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
  
</div>

</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    
   handleSizeChange(val) {
       const data = {
         eachpage:val,
         currentPage:this.currentPage,
       }
        this.$store.dispatch("service/getShopByPage",data)
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(this.$state)
        // console.log(this.currentPage)
       const data = {
         eachpage:this.eachpage,
         currentPage:val,
       }
        
         this.$store.dispatch("service/getShopByPage",data)
        // console.log(`当前页: ${val}`);
      },






    handleAvatarSuccess(res) {
      // console.log(res._id)
      this.imgsId.push(res._id)
      this.tableData.shopImg = res.url;
    },
    handleAvatarSuccess1(res) {
      this.imgsId.push(res._id)
      //  console.log(res._id)
      this.tableData.shopLicenceImg = res.url;
    },
    handleAvatarSuccess2(res) {
      this.imgsId.push(res._id)
      //  console.log(res._id)
      this.tableData.shopUserImg = res.url;
    },

    deleteRow(index, rows) {
      //  console.log(rows[index]._id)
      // rows.splice(index, 1);
      this.$store.dispatch("service/delshop", rows[index]._id);
      const data = {
        currentPage:1,
        eachpage:10,
      }
      this.$store.dispatch("service/getShopByPage",data)
      // this.$store.dispatch("service/getShop");
    },
    editRow(index, rows) {
      this.modify = true;
      // console.log(rows);
      const {
        shopAdd,
        shopCorporate,
        shopFeature,
        shopImg,
        shopLicenceImg,
        shopLocation,
        shopName,
        shopTel,
        shopUserImg,
        _id,
      } = rows;

      this.tableData.shopAdd = shopAdd;
      this.tableData.shopCorporate = shopCorporate;
      this.tableData.shopFeature = shopFeature;
      this.tableData.shopImg = shopImg;
      this.tableData.shopLicenceImg = shopLicenceImg;
      this.tableData.shopLocation = shopLocation;
      this.tableData.shopName = shopName;
      this.tableData.shopTel = shopTel;
      this.tableData.shopUserImg = shopUserImg;
      this.tableData.id = _id;
    },
    add() {
      // console.log(this.imgsId)
      // this.$store.dispatch("service/add",this.imgsId)
      this.dialogFormVisible = false;
      const {
        shopAdd,
        shopCorporate,
        shopFeature,
        shopImg,
        shopLicenceImg,
        shopLocation,
        shopName,
        shopTel,
        shopUserImg
      } = this.tableData;
      const data1 = {
        shopFeature: shopFeature,
        shopAdd: shopAdd,
        shopCorporate: shopCorporate,
        shopImg: shopImg,
        shopLicenceImg: shopLicenceImg,
        shopLocation: shopLocation,
        shopName: shopName,
        shopTel: shopTel,
        shopUserImg: shopUserImg,
        imgsId:this.imgsId
      };
      // console.log(data1)
      // this.$store.dispatch("service/getShop");
      this.$store.dispatch("service/addShop",data1)
      const data = {
        currentPage:1,
        eachpage:10,
      }
      this.$store.dispatch("service/getShopByPage",data)
      this.$refs.upload1.clearFiles();
      this.$refs.upload2.clearFiles();
      this.$refs.upload.clearFiles();

    },
    modifyshop(){
      // console.log(this.tableData)
      this.modify = false;
       const {
        shopAdd,
        shopCorporate,
        shopFeature,
        shopImg,
        shopLicenceImg,
        shopLocation,
        shopName,
        shopTel,
        shopUserImg,
        id
      } = this.tableData;
       const data2 = {
        shopFeature: shopFeature,
        shopAdd: shopAdd,
        shopCorporate: shopCorporate,
        shopImg: shopImg,
        shopLicenceImg: shopLicenceImg,
        shopLocation: shopLocation,
        shopName: shopName,
        shopTel: shopTel,
        shopUserImg: shopUserImg,
        id:id
      };
      // console.log(data2)
      this.$store.dispatch("service/changeshop", data2)
      const data = {
        currentPage:1,
        eachpage:10,
      }
      this.$store.dispatch("service/getShopByPage",data)
      // this.$store.dispatch("service/getShop");
    
    }
  },
  created() {
    const data3 = {
      currentPage:this.currentPage,
      eachpage:this.eachpage
    }
    this.$store.dispatch("service/getShopByPage",data3)
    // this.$store.dispatch("service/getShop");
  },
  computed: {
    ...mapState("service", ["tableData","count","currentPage","eachpage"]),
    ...mapActions("service", ["addShop"])
  },

  data() {
    return {
      imgsId:[],
      modify:false,
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  }
};
</script>
<style>
</style>