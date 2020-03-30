/**
 * 模板 的数据
 * @param {Object} page 无头浏览器上下文
 * @returns {Object} object
 */
const path = require('path')
const puppeteer = require('puppeteer')
const { getTemplateName } = require('../utils')

async function getTemplate() {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 375,
      height: 667
    }, 
    headless: true,
    args: [ '--no-sandbox' ]
  })
  const template = 'http://localhost:3000/temp' // 生成消息图片用的HTML模板页面
  const page = await browser.newPage()
  await page.goto(template)
  await page.screenshot({ path: path.join(getTemplateName()) }) // 截图
  await browser.close()
}

module.exports = getTemplate
