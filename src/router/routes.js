
export default [
  {
    path: '/',
    name: 'Base',
    redirect: '/staff/index',
    component: () => import('@/components/layout'),
    children: [
      {
        path: '/staff',
        name: 'department',
        component: () => import('@/components/layout/content'),
        meta: { title: '员工管理' },
        children: [
          {
            path: '/staff/index',
            name: 'staffIndex',
            component: () => import('@/pages/staff/index'),
            meta: { title: '组织架构管理', nav: true },
          }
        ]
      }
    //   {
    //     path: '/customer',
    //     name: 'Customer',
    //     meta: { title: '客户管理', icon: 'icon-kehuguanli' },
    //     component: () => import('@/components/layout/content'),
    //     children: [
    //       {
    //         path: '/customer/export',
    //         name: 'Export',
    //         component: () => import('@/pages/customer/export'),
    //         meta: { title: '出口公司', nav: true }
    //       },
    //       {
    //         path: '/customer/export/edit',
    //         name: 'ExportEdit',
    //         component: () => import('@/pages/customer/export/edit'),
    //         meta: { title: '新增出口公司' }
    //       },
    //       {
    //         path: '/customer/import',
    //         name: 'Import',
    //         component: () => import('@/pages/customer/import'),
    //         meta: { title: '进口公司', nav: true }
    //       },
    //       {
    //         path: '/customer/import/edit',
    //         name: 'ImportEdit',
    //         component: () => import('@/pages/customer/import/edit'),
    //         meta: { title: '新增进口公司' }
    //       }
    //     ]
    //   },
    //   {
    //     path: '/visit',
    //     name: 'Visit',
    //     component: () => import('@/components/layout/content'),
    //     meta: { title: '走访记录', icon: 'icon-zoufangjilu', nav: true, level: 2 },
    //     children: [
    //       {
    //         path: '',
    //         name: 'VisitList',
    //         component: () => import('@/pages/visit'),
    //         meta: { title: '走访记录' }
    //       },
    //       {
    //         path: 'edit',
    //         name: 'VisitEdit',
    //         component: () => import('@/pages/visit/edit'),
    //         meta: { title: '编辑走访记录' }
    //       }
    //     ]
    //   },
    //   {
    //     path: '/admin',
    //     name: 'Admin',
    //     meta: { title: '系统管理', icon: 'icon-xitongguanli', root: true },
    //     component: () => import('@/components/layout/content'),
    //     children: [
    //       {
    //         path: '/admin/user',
    //         name: 'AdminUser',
    //         component: () => import('@/pages/admin'),
    //         meta: { title: '管理员列表', nav: true, root: true }
    //       },
    //       {
    //         path: '/admin/user/edit',
    //         name: 'AdminUserEdit',
    //         component: () => import('@/pages/admin/edit'),
    //         meta: { title: '编辑管理员', root: true }
    //       },
    //       {
    //         path: '/admin/site',
    //         name: 'Site',
    //         component: () => import('@/pages/site'),
    //         meta: { title: '站点列表', nav: true, root: true }
    //       },
    //       {
    //         path: '/admin/changePass',
    //         name: 'ChangePass',
    //         component: () => import('@/pages/changePass'),
    //         meta: { title: '修改密码' }
    //       }
    //     ]
    //   }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login'),
    meta: { title: '登录' }
  }
]