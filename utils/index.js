// 从认识到今天的总天数
function getDay(date) {
  const dateNow = new Date()
  const dateMet = new Date(date)
  const days = parseInt(Math.abs(dateNow.getTime() - dateMet.getTime()) / 1000 / 60 / 60 / 24)
  return days
}

function getDate() {
  const today = new Date()
  const todayArr = today.toString().split(' ')
  return `${todayArr[2]} ${todayArr[1]}.${todayArr[3]}`
}

// 生成的消息图片名
function getTemplateName() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  return `template/${year}-${month}-${day}.png`
}

module.exports = {
  getDay,
  getDate,
  getTemplateName
}
