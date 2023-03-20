import { listBuckets } from "./s3-proxy.mjs"

const main = async () => {
   const data = await uploadObject()
   console.log(data)
}

main()
