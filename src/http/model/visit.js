import Model from '@/http'
class VisitModel extends Model {

  getList(options = {}) {
    const params = {
      url: this.api.visit.page,
      data: options
    }
    return this.post(params)
  }

  getVisit(options = {}) {
    const params = {
      url: this.api.visit.detail,
      params: options
    }
    return this.get(params)
  }
  //导出走访记录
  excelInterview(options = {}) {
    const params = {
      url: this.api.excel.interview,
      data: options,
      responseType: 'arraybuffer'
    }
    return this.post(params)
  }
  editVisit(options = {}) {
    const params = {
      url: this.api.visit.add,
      data: options
    }
    return this.post(params)
  }
  
}

export default new VisitModel()