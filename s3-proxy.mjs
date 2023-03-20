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

export const downloadObject = async () => {
        const input = {
        "Bucket": "sia-test-bucket",
        "Key": "upload.txt",
      };
      const command = new GetObjectCommand(input)
      const response = await client.send(command)
      console.log(response)
}

