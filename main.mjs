import { listBuckets } from "./s3-proxy.mjs"

const main = async () => {
   const data = await listBuckets()
   console.log(data)
}

main()
