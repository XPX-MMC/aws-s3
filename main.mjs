import { listBuckets, uploadObject, uploadFile, downloadObject } from "./s3-proxy.mjs"

const main = async () => {
//    const data = await uploadFile('upload.txt')
    await downloadObject()
   //console.log(data)
}

main()
