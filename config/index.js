const province = "anhui"
const city = "chuzhou"

module.exports = {
  one: 'http://wufazhuce.com/', // ONE的web版网站
  moji: `https://tianqi.moji.com/weather/china/${province}/${city}`, // 中国墨迹天气url
  meet: '', // 和她认识的那一天
  alias: '', // 备注姓名
  getup: '08 * * * *', // 每天发送第一条消息的时间
  drink: [
    { time: '30 13 7 * * *', words: '起床喝水，排毒养颜' },
    { time: '30 10 12 * * *', words: '听说午餐后喝水，能减负减肥' }
  ]
}
