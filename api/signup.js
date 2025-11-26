import mongoose from "mongoose";

let isConnected = false;

// MongoDB Connection (runs only once)
async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
  console.log("MongoDB connected (Vercel Serverless)");
}

// Schema
const userSchema = new mongoose.Schema({
  sjsuId: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { sjsuId, password } = req.body;

    if (!sjsuId || !password) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const newUser = await User.create({ sjsuId, password });

    return res.status(201).json({
      success: true,
      message: "User created",
      id: newUser._id
    });
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}
