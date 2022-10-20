let OSS = require('ali-oss');
const path = require('path');
const fs = require('fast-glob');
let client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI5tSBqq1fZoBi2NCJ7R39',
  accessKeySecret: 'wNpOw6n0uwt5rw0lU34JOsKyO59AUu',
  bucket: 'jeffrey-mu'
});
async function uploadFile() {
  const docs = fs.sync('../dist/**')
  let fileTotal = docs.length;
  console.log();
  docs.forEach(async (file, index) => {
    await client.put(file.split('dist')[1].slice(1), path.normalize(file));
    console.log(`文件上传中:${fileTotal} /${index + 1}`);
  })
}
uploadFile()
