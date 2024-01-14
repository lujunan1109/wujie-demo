function timeout(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('返回数据');
    }, val);
  });
}
class SuperTask {
  constructor() {
    this.maxCount = 2; // 异步并发任务
    this.progressTaskNum = 0;
    this.taskList = [];
    this.response = [];
  }
  init(reqList = []) {
    for (let index = 0; index < reqList.length; index++) {
      const request = reqList[index];
      this.add(()=>request)
    }
  }
  add(fn) {
    return new Promise((resolve, reject) => {
      const storeFn = {
        fn,
        resolve,
        reject,
      };
      this.taskList.push(storeFn);
      this.run();
    });
  }
  run() {
    if (this.taskList.length > 0 && this.progressTaskNum < this.maxCount) {
      const { resolve, reject, fn } = this.taskList.shift();
      this.progressTaskNum++;
      return fn()
        .then(res=>{
          resolve(res)
          this.response.push(res)
        })
        .catch(err=>{
          reject(err)
        })
        .finally(() => {
          this.progressTaskNum--; // 递归调用下一个队列任务
          this.run();
        });
    }
  }
}
const superTask = new SuperTask();
superTask.init([timeout(1000), timeout(2000), timeout(3000)])


