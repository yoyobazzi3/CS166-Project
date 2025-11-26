import mongoose from "mongoose";

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
}

const userSchema = new mongoose.Schema({
  sjsuId: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default async function handler(req, res) {
  await connectDB();

  const users = await User.find();
  res.status(200).json({ success: true, count: users.length, data: users });
}
