<template>
  <header class="w-header w-flex">
    <el-popover
      placement="bottom"
      trigger="click">
      <el-button type="text" @click="logout" style="margin-left: 30px;" >退出系统</el-button>
      <div>
         <el-button type="text" @click="changepw" style="margin-left: 30px;" >修改密码</el-button>
      </div>
      <div slot="reference" class="content-box">
        <i class="el-icon-user-solid"></i>
        {{ rule }}
      </div>
    </el-popover>
  <!-- <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="新密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="确认新密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog> -->
  </header>
  
</template>


<script>
export default {
    data() {
      return{
        dialogFormVisible:false
      }
    },
  computed: {
    rule() {
      return localStorage.crm_user_type === '1' ? '超级管理员' : localStorage.crm_user_name
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('crm_token')
      localStorage.removeItem('crm_user_type')
      localStorage.removeItem('crm_user_name')
      window.location.href = "/login" // 跳转方式 会重置store数据
    },
    changepw(){
       this.$router.push(`/admin/changePass`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .w-header {
    height: 50px;
    background: #fff;
    align-items: center;
    &>span {
      margin-left: auto;
      margin-right: 30px;
    }
    .content-box {
      cursor: pointer;
      .el-icon-user-solid {
        background: #E4E7ED;
        font-size: 20px;
        text-align: center;
        line-height: 36px;
        border-radius: 100%;
        width: 36px; 
        height: 36px;
        margin-right: 10px;
      }
    }
  }
</style>
