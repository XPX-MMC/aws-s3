import { listBuckets, uploadObject, uploadFile, downloadFile, deleteFile } from "./s3-proxy.mjs"

const main = async () => {
    const data = await uploadFile('upload.txt')
    await downloadFile('upload.txt', 'download.txt')
    //const data = await deleteFile()
    //console.log(data)
}

main()
