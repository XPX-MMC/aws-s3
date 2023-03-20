import { listBuckets, uploadObject, uploadFile, downloadFile } from "./s3-proxy.mjs"

const main = async () => {
    const data = await uploadFile('upload.txt')
    await downloadFile('upload.txt', 'download.txt')
    //console.log(data)
}

main()
