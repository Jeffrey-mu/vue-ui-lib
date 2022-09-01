let OSS = require('ali-oss');
const path = require('path');
const fs = require('fast-glob');
let client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI5tSBqq1fZoBi2NCJ7R39',
  accessKeySecret: '',
  bucket: 'jeffrey-mu'
});
async function uploadFile() {
  const docs = fs.sync('../dist/**')
  console.log(docs);
  docs.forEach(async file => {
    await client.put(file.split('dist')[1].slice(1), path.normalize(file));
  })
}
uploadFile()
