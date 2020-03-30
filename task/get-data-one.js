/**
 * one·一个 的数据
 * @param {Object} page 无头浏览器上下文
 * @returns {Object} object
 */
async function getOneData(page) {
  const activeItem = await page.$('.carousel-inner .active')
  const oneImg = await activeItem.$eval('.fp-one-imagen', img => img.src)
  const oneWords = await activeItem.$eval('.fp-one-cita', div => div.innerText)
  return { oneImg, oneWords }
}

module.exports = getOneData
