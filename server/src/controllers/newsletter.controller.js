import catchAsync from "../utils/catchAsync.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { sendNewsLetter } from "../utils/mail.js";

const postMail = catchAsync(async(req, res)=>{
    const payload = req.body;

    sendNewsLetter(payload);

    res.status(200).json(new ApiResponse(200, {message: "Mail sent successfully."}));
})

export default {postMail};