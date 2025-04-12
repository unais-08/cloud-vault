import mongoose from "mongoose";
const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    fileKey: {
      type: String,
      required: true,
      unique: true,
    },
    fileUrl: {
      type: String,
    },
    fileSize: {
      type: Number,
      default: 0,
    },
    fileType: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    parentFolder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
    isFolder: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const File = mongoose.model("File", fileSchema);
