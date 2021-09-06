import Model from '@/http'
import store from '@/store'

class CompanyModel extends Model {

  // 获取类目列表
  getCateList() {
    const parasm = {
      url: this.api.cate_list
    }
    if (store.getters.cateList.length) { 
      return null
    } else {
      return this.get(parasm).then(res => {
        store.dispatch('set_cate_list', res.data)
      })
    }
  }
    // 导出出口公司
    excelExport(options = {}) {
      const params = {
        url: this.api.excel.export,
        data: options,
        responseType: 'arraybuffer'
      }
      return this.post(params)
    }
      // 导出进口公司
    excelImport(options = {}) {
      const params = {
        url: this.api.excel.import,
        data: options,
        responseType: 'arraybuffer'
      }
      return this.post(params)
    }


  // 获取站点列表
  getSiteList(update=false) {
    const parasm = {
      url: this.api.site.list
    }
    if (store.getters.siteList.length && !update) {
      return null
    } else {
       return this.get(parasm).then(res => {
        const list = res.data.map(item => {
          return { value: item, label: item }
        })
        store.dispatch('set_site_list', list)
      })
    }
  }

  // 获取出口公司
  getExportDetail(options = {}) {
    const params = {
      url: this.api.export.detail,
      params: {...options}
    }
    return this.get(params)
  }

  // 获取出口公司列表
  getExportList(options = {}) {
    const params = {
      url: this.api.export.list,
      data:options
    }
    return this.post(params)
  }

  // 获取进口公司列表
  getImportList(options = {}) {
    const params = {
      url: this.api.import.list,
      data:options
    }
    return this.post(params)
  }

  // 新增 或 修改出口公司
  editExport(options = {}) {
    const params = {
      url: this.api.export.edit,
      data: options
    }
    return this.post(params)
  }

  // 获取进口公司
  getImportDetail(options = {}) {
    const params = {
      url: this.api.import.detail,
      params: {...options}
    }
    return this.get(params)
  }

  // 新增 或 修改出口公司
  editImport(options = {}) {
    const params = {
      url: this.api.import.edit,
      data: options
    }
    return this.post(params)
  }

  // 删除公司
  deleteCompany(options = {}) {
    const params = {
      url: this.api.delete_company,
      params: options
    }
    return this.post(params)
  }
  
}

export default new CompanyModel()