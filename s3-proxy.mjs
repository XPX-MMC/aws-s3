import fs from 'fs'
import { S3Client, ListBucketsCommand, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"

const client = new S3Client({})
const command = new ListBucketsCommand({})

const BUCKET = "sia-test-bucket"

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
        Bucket: BUCKET,
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
    console.log("*** Uploading file to S3 ***")
    const blob = fs.readFileSync(filename)
    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key: filename,
        Body: blob,
    })
    try {
        return await client.send(command);
    } catch (err) {
        console.error(err);
    }
}

export const downloadFile = async (filename, downloadName) => {
    console.log("*** Downloading file to S3 ***")
    const input = {
        "Bucket": BUCKET,
        "Key": filename,
    }
    const command = new GetObjectCommand(input)
    const { Body } = await client.send(command)

    await new Promise((resolve, reject) => {
        Body.pipe(fs.createWriteStream(downloadName))
            .on('error', err => reject(err))
            .on('close', () => resolve())
    })
}

export const deleteFile = async () => {
    console.log("*** Deleting file from S3 ***")
    const command = new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: "upload.txt",
    })
    try {
        return await client.send(command);
    } catch (err) {
        console.error(err)
    }
}
