import fs from 'fs'
import { ListBucketsCommand, PutObjectCommand, S3Client, GetObjectCommand } from "@aws-sdk/client-s3"

const client = new S3Client({})
const command = new ListBucketsCommand({})

export const listBuckets = async () => {
    try {
        const { Buckets } = await client.send(command)
        return Buckets
    }
    catch(err) {
        console.error(err)
    }
}

export const uploadObject = async () => {
    const command = new PutObjectCommand({
        Bucket: "sia-test-bucket",
        Key: "hello-world",
        Body: "Hello S3!",
    })
    
    try {
        return await client.send(command);
    } catch (err) {
        console.error(err)
    }
}

export const uploadFile = async (filename) => {
    const blob = fs.readFileSync(filename)
    const command = new PutObjectCommand({
        Bucket: "sia-test-bucket",
        Key: filename,
        Body: blob,
    })
    
    try {
        return await client.send(command);
    } catch (err) {
        console.error(err);
    }
}

export const downloadObject = async (filename, downloadName) => {
        const input = {
        "Bucket": "sia-test-bucket",
        "Key": filename,
      };
      const command = new GetObjectCommand(input)
      const { Body } = await client.send(command)

      await new Promise((resolve, reject) => {
        Body.pipe(fs.createWriteStream(downloadName))
          .on('error', err => reject(err))
          .on('close', () => resolve())
      })
}
