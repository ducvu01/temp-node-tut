const os = require('os');
//infor about current user
const user = os.userInfo();

//method returns the system uptime(second)
const uptime = os.uptime();
console.log(uptime);

const currentOs={
  name : os.type(),
  release : os.release(),
  totalmem : os.totalmem(),
  freemem : os.freemem(),
};
console.log(currentOs);