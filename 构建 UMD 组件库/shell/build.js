const path = require('path')

// 思路：
// 1. 通过 Shell 生命周期 before 可以获取 webpack 配置
// 2. 获取配置后，修改为导出 UMD 规范的 webpack 配置即可
exports.before = ({ config, messager, pull }) => {
  return new Promise(async (resolve, reject) => {
    // 修改需要导出的文件名，例如：'X'
    config.webpackOptions.entry = {
      X: path.resolve(config.projectPath, 'src/x.js')
    }

    // 挂载在 window 对象的对象名，例如：'X'
    config.webpackOptions.output.library = 'X'

    // 以下配置几乎通用
    config.webpackOptions.output.filename = '[name].min.js';
    config.webpackOptions.output.libraryTarget = 'umd'
    config.webpackOptions.output.libraryExport = 'default'
    config.webpackOptions.output.publicPath = './'
    config.webpackOptions.output.path = path.resolve(config.projectPath, 'dist')

    config.webpackOptions.plugins.forEach((item, index) => {
      item.constructor.name === 'HtmlWebpackPlugin' && config.webpackOptions.plugins.splice(index, 1)
    })

    resolve()
  })
}
