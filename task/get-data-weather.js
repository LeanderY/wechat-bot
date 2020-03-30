/**
 * 获取墨迹天气数据
 * @param {Object} page 无头浏览器上下文
 * @returns {Object} object
 */
async function getWeatherData(page) {
  const weaTips = await page.$eval('.wea_tips em', em => em.innerText) // 获取天气提示
  const domToday = await page.$('.days')
  const weatherDetail = await domToday.$$eval('li', li => {
    const weaImg = li[1].querySelector('img').src
    const weaStatus = li[1].innerText.replace(/\n/g, ' ')
    const weaTemp = li[2].innerText

    return {
      weaImg,
      weaStatus,
      weaTemp
    }
  })

  return {
    weaTips,
    ...weatherDetail
  }
}

module.exports = getWeatherData
