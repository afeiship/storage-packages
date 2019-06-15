export default function(inInterval) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // 模拟出错了，返回 ‘error’
      // reject('error');
      var ab = 12;
      console.log(ab);
      resolve();
    }, inInterval);
  });
}
