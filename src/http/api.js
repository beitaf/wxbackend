const BASEAPI = '/api'

const api = {
  // 登录接口
  login: BASEAPI + '/administrator/login',
  department: `/coral/dept/listHierarchyDept`, // 部门
  staffList: {
    list: `/coral/staff/pageInfo`, // 员工信息分页
    sync: `/coral/staff/sync` // 员工同步接口
  }


}

export default api