const Koa = require('koa')
const views = require('koa-views')
const router = require('koa-router')()
const path = require('path')
const { getDate, getDay } = require('./utils')
const { meet } = require('./config')
const task = require('./task')

const app = new Koa()
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}))

// http://localhost:3000/temp
router.get('/temp', async (ctx, next) => {
  const formatedDate = getDate()
  const days = getDay(meet)
  const date = `${formatedDate} | 相遇的第${days}天`
  await ctx.render('template', {
    ...global.tempData,
    date
  })
})

app.use(router.routes())

app.listen(3000, async () => {
  console.log('Example app listening on port 3000!')
  task()
})
