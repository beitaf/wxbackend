import Model from '@/http'
class SiteModel extends Model {

  getList(options = {}) {
    const params = {
      url: this.api.site.list,
      params: options
    }
    return this.get(params)
  }

  getAll(options = {}) {
    const params = {
      url: this.api.site.page,
      params: options
    }
    return this.get(params)
  }

  addSite(options = {}) {
    const params = {
      url: this.api.site.add,
      data: options
    }
    return this.post(params)
  }
  
}

export default new SiteModel()