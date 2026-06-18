
import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import morgan from 'morgan'
import globalErrorHandler from "./controllers/error.controller.js";
import newsLetterRouter from "./routes/newsletter.route.js"
import contactRouter from "./routes/contact.route.js"

// const swaggerDocument = YAML.parse(file);

import ApiError from "./utils/ApiError.js";

const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// ✅ CORS configuration
// ✅ CORS configuration for dev and production
const allowedOrigins = [
  'http://localhost:5173',
  'https://www.kutumbharat.com'
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'Content-Type'],
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);


app.use("/api/v1/newsletter", newsLetterRouter);
app.use("/api/v1/contact", contactRouter);


// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerDocument, {
//     customSiteTitle: "eKalakaar API docs",
//   })
// );

app.use((req, res, next) => {
  console.log("Incoming request:", req.originalUrl);
  next();
});


app.use((req, res, next) => {
  next(
    new ApiError(
      `Can't find ${req.originalUrl} on this server! Please visit /api-docs for comprehensive documentation on all available API routes.`,
      404
    )
  );
});

app.use(globalErrorHandler);

export { app };
