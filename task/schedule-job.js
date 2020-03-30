const schedule = require('node-schedule')
const puppeteer = require('puppeteer')
const { FileBox } = require('file-box')
const { moji, one, alias, drink } = require('../config')
const { getTemplateName } = require('../utils')
const getOneData = require('./get-data-one')
const getWeatherData = require('./get-data-weather')
const getTemp = require('./get-data-temp')

/**
 * 开始定时任务
 * @param {Objcet} bot 微信机器人
 */
async function startScheduleJob(bot) {
  // 每日天气
    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: [ '--no-sandbox' ]
      }) // 启动浏览器
      const pageMoji = await browser.newPage()
      await pageMoji.goto(moji)
      const { weaTips, weaTemp, weaImg, weaStatus } = await getWeatherData(pageMoji) // 获取墨迹天气数据
      const pageOne = await browser.newPage()
      await pageOne.goto(one)
      const { oneImg, oneWords } = await getOneData(pageOne) // 获取One数据
      await browser.close() // 关闭浏览器
      global.tempData = { weaTips, weaTemp, weaImg, weaStatus, oneImg, oneWords }  // 把取到的值赋给变量global.tempData
      await getTemp() // 重新启动一个浏览器，并截图
      const fileBox = FileBox.fromFile(getTemplateName()) // 发消息
      const nickname = await bot.Contact.find({ alias })
      nickname.say(fileBox)
    } catch (err) {
      console.log('错误：\n', err)
    }

  // 喝水提醒
  const drinks = drink
  for (let drink of drinks) {
    schedule.scheduleJob(drink.time, async () => {
      try {
        const nickname = await bot.Contact.find({ alias })
        nickname.say(drink.words)
      } catch (err) {
        console.log('喝水提醒错误：\n', err)
      }
    })
  }
}

module.exports = startScheduleJob
