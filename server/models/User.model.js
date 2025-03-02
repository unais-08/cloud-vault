import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    storageUsed: { type: Number, default: 0 }, // Track storage usage in bytes
    storageLimit: { type: Number, default: 10 * 1024 * 1024 * 1024 }, //10GB default
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
