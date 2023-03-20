import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";

export const listBuckets = async () => {
    const client = new S3Client({});
    const command = new ListBucketsCommand({});
    const { Buckets } = await client.send(command);
    return Buckets
}
