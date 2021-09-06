const baseInfo = {
  state: {
    cateList: [],
    siteList: [],
    exportBusiness: [ { value: '分销商', label: '分销商' }, { value: '商超', label: '商超' }, { value: '电商', label: '电商' }, { value: '生产企业', label: '生产企业' }, { value: '其他', label: '其他' } ],
    importBusiness: [ { value: '生产企业', label: '生产企业' }, { value: '贸易企业', label: '贸易企业' } ]
  },
  getters: {
    cateList: (state) => state.cateList,
    siteList: (state) => state.siteList,
    exportBusiness: (state) => state.exportBusiness,
    importBusiness: (state) => state.importBusiness
  },
  mutations: {
    SET_CATE_LIST(state, data) {
      state.cateList = data
    },
    SET_SITE_LIST(state, data) {
      state.siteList = data
    },
  },
  actions: {
    set_cate_list({ commit }, data) {
      commit('SET_CATE_LIST', data)
    },
    set_site_list({ commit }, data) {
      commit('SET_SITE_LIST', data)
    }
  }
}

export default baseInfo