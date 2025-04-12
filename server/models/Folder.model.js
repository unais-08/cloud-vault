import mongoose, { Schema } from "mongoose";
const FolderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    parentFolder: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" }, // Nested folders
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Folder = mongoose.model("Folder", FolderSchema);
