# WeChat-bot

偶尔会遇到图片无法发送的问题，程序既没有报错，也没有成功发送消息，具体原因不清楚，可以参考[发送图片没有任何反应](https://github.com/Chatie/wechaty/issues/1618)

### 项目简介

通过微信每日定时给指定的一位好友发送消息，去年就有一个类似的想法，不过一直没去执行，直到上周看见篇文章。

不过他的一些功能我根本不需要，而且定时提醒消息只能是文字，看上去多少没那么好看，于是就打算自己撸一个，加了点其它的小功能，然后就有了这篇文章，前后也花了两天多时间，还有一些优化留着空了来做。

### 灵感来源

[用Node+wechaty写一个爬虫脚本每天定时给女(男)朋友发微信暖心话](https://juejin.im/post/5c77c6bef265da2de6611cff)。

### 项目地址

[https://github.com/LeanderY/wechat-bot/edit/master/README.md](https://github.com/LeanderY/wechat-bot)

### 使用库

* [koa](https://github.com/koajs/koa) - node框架
* [pug](https://github.com/pugjs/pug) - html模板
* [puppeteer](https://github.com/GoogleChrome/puppeteer) - 抓取数据
* [node-schedule](https://github.com/node-schedule/node-schedule) - 定时任务
* [file-box](https://github.com/huan/file-box) - 打包图片用于wechaty发送
* [wechaty](https://github.com/chatie/wechaty) - 操作微信
* [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) - 控制台展示二维码图片

### 基本思路

1. 抓取 墨迹天气 和 [one·一个] 的数据
2. 编写展示用的模板并自定义样式
3. 处理抓取到的数据渲染模板
4. 抓取模板页并截图
5. 操作微信发送消息
6. 定时处理任务

### 需要注意的坑：

更换 npm 源
```
npm config set registry https://registry.npm.taobao.org
```

需要指定无头模式(因为服务器中并没有安装Chrome，所有无法打开浏览器)，同时还有指定沙箱的运行环境

`
const browser = await puppeteer.launch({
    headless: true,
    args: [ '--no-sandbox' ]
})
`
### pm2

执行任务

`pm2 start ecosystem.config.js --env production`

使用pm2 后，程序就已经后台运行了，不会出现在shell中。原控制台中的输出会放到日志中

查看日志

`pm2 log id`

查看所有任务

`pm2 list`
