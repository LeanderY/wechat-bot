module.exports = {
  apps : [{
    name: 'wechaty-bot', // 应用名
    script: 'app.js', // 应用文件位置
    args: '', // 传递给脚本的参数
    instances: 1, // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
    autorestart: true, // 启用/禁用应用程序崩溃或退出时自动重启,默认为true, 发生异常的情况下自动重启
    watch: false, // 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development' // 启动默认模式
    },
    env_production: {
      NODE_ENV: 'production' // 使用production模式 pm2 start ecosystem.config.js --env production
    }
  }]
}
