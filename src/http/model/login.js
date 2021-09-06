import Model from '@/http'
class LoginModel extends Model {

  login(options = {}) {
    const params = {
      url: this.api.login,
      data: options
    }
    return this.post(params)
  }
}

export default new LoginModel()