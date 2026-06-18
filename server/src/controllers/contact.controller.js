import catchAsync from "../utils/catchAsync.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { sendContactMail } from "../utils/mail.js";

const postContact = catchAsync(async(req, res)=>{
    const payload = req.body;

    await sendContactMail(payload);

    res.status(200).json(new ApiResponse(200, {message: "Mail sent successfully."}));
})

export default {postContact};