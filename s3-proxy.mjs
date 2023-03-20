import { ListBucketsCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const listBuckets = async () => {
    const client = new S3Client({})
    const command = new ListBucketsCommand({})
    try {
        const { Buckets } = await client.send(command)
        return Buckets
    }
    catch(err) {
        console.error(err);
    }
}

export const uploadObject = async () => {
    const command = new PutObjectCommand({
        Bucket: "sia-test-bucket",
        Key: "hello-world",
        Body: "Hello S3!",
    })
    
    try {
        const response = await client.send(command);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}
