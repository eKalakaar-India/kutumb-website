
import dotenv from "dotenv";
import { app } from "./app.js";

// ✅ Load .env from root directory
dotenv.config();

console.log("🚀 Starting application...");
console.log("   Environment:", process.env.NODE_ENV);
console.log("   Port:", process.env.PORT);

// const majorNodeVersion = +process.env.NODE_VERSION?.split(".")[0] || 0;

const startServer = () => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("⚙️  Server is running on port: " + (process.env.PORT || 4000));
  });
};

if (process.env.NODE_ENV !== "production") {
  startServer();
}

// 👑 CRITICAL FOR VERCEL: Export the app instance as the default export
export default app;