/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa8e3f3f0f8fa122f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4e09847354a39dd4dcb6a5ba43ddcea0',

  PROVINCE: '甘肃',
  CITY: '兰州',
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'e6b36fb57921c6d597897a8e40d72be0',
    weather: 1,
   },

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCP5y6Jg7Q5p11rBunHSR6PAA1Vs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OxoExlcbrjN9WciPeFVO1Tm8oKRgUsKf_TRj105HUtc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小童同学生日', year: '2003', date: '06-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小童同学生日', year: '2003', date: '06-05',
        },
        {
          type: '节日', name: '小童同学生日', year: '2003', date: '06-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-15' },
        // 结婚纪念日
        { keyword: 'wx_birthday_0', date: '2022-09-09' },
        ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'OxoExlcbrjN9WciPeFVO1Tm8oKRgUsKf_TRj105HUtc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCP5y6MR1MJR83NdZs3fOr847rMo',
    }
  ],

}

module.exports = USER_CONFIG

