const path = require('path');

// console.log(path.resolve());     //webpack-study 根目录      path.resolve()===path.resolve(__dirname);
// console.log(path.resolve('tset','/00-path-test','/test2','index.js'));     //根目录(D:) + 最后一个/开头的参数 + 之后所有的参数
// console.log(path.resolve('./test.js'));     //直接文件夹开头 则为项目根目录
console.log(path.resolve(__dirname,'test'));

//总结：path.resolve参数分为两种  带/ ? 根目录+最后一个带/开头+后面所有参数