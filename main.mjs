import { listBuckets, uploadObject } from "./s3-proxy.mjs"

const main = async () => {
   const data = await uploadObject()
   console.log(data)
}

main()
