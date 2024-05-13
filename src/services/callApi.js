import { commonApi } from "./commonApi"
import { serverURL } from "./urlServer"


//api for book an appointment
export const bookingApi = async(reqbody)=>{
   return await commonApi('POST',`${serverURL}/details`,reqbody)
}





//api to add details into viewbooking
export const AddToBooking = async(reqbody)=>{
   return await commonApi('POST',`${serverURL}/viewbooking`,"")
}

//api to get details from booking
export const getAllBooking = async(reqbody)=>{
   return await commonApi('GET',`${serverURL}/viewbooking`,reqbody)
}
