const Model = require('./model')
class Database {
  static async registerSchema(accountMobile, password) {
    // https://mongoosedoc.top/docs/api.html#create_create
    console.log('registerSchema================')
    const registerSchema = await Model.registerModel.create(
      [
        {
          accountMobile: accountMobile,
          password: password
        }
      ]
    )
    return registerSchema
  }
  // 检查账号是否已存在
  static async FindUserByAccountMobile(accountMobile) {
    console.log('FindUserByAccountMobile')
    const FindUserByAccountMobile = await Model.registerModel.findOne({ accountMobile: accountMobile }, { accountMobile: 1, nickname: 1 })
    return FindUserByAccountMobile
    // Model.registerModel.findOne({ accountMobile: accountMobile }, { accountMobile: 1, nickname: 1 }, function (err, adventure) {
    //   console.log(err)
    //   console.log(adventure)
    // })
  }
}
module.exports = Database
