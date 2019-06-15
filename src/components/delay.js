export default function(inInterval) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // 模拟出错了，返回 ‘error’
      // reject('error');
      // var test = 1234;
      resolve();
    }, inInterval);
  });
}
