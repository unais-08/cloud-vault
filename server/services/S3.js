import AWS from "aws-sdk";
import fs from "fs";
import { v4 as uuidv4, v4 } from "uuid";
import path from "path";
const uploadS3 = async (filePath) => {
  //S3 Configuration
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const fileContent = fs.readFileSync(filePath);
  const fileExtension = path.extname(filePath);

  const uniqueFileName = `${uuidv4()}${fileExtension}`;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${uniqueFileName}`,
    Body: fileContent,
    ContentType: filePath.mimetype,
    ContentDisposition: "inline", // Ensures browser displays instead of downloading
  };

  const data = await s3.upload(params).promise();
  // console.log(data);

  return data.Location;
};
export default uploadS3;
