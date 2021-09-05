import Model from '@/http'
class AdminModel extends Model {

  getUser(options = {}) {
    const params = {
      url: this.api.admin.detail,
      params: options
    }
    return this.get(params)
  }

  getList(options = {}) {
    const params = {
      url: this.api.admin.list,
      params: options
    }
    return this.get(params)
  }
  changePassword(options = {}) {
    const params = {
      url: this.api.admin.changePassword,
      data: options
    }
    return this.post(params)
  }

  addUser(options = {}) {
    const params = {
      url: this.api.admin.add,
      data: options
    }
    return this.post(params)
  }

  deleteUser(options = {}) {
    const params = {
      url: this.api.admin.delete,
      params: options
    }
    return this.post(params)
  }
  
  resetUser(options = {}) {
    const params = {
      url: this.api.admin.reset,
      params: options
    }
    return this.post(params)
  }

  updateUser(options = {}) {
    const params = {
      url: this.api.admin.update,
      data: options
    }
    return this.post(params)
  }

}

export default new AdminModel()