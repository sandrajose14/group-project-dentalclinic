import { commonApi } from "./commonApi"
import { serverURL } from "./urlServer"



//for register new user
export const userRegisterApi = async(reqbody)=>{
    return await commonApi('POST',`${serverURL}/users`,reqbody)
}

//user validation
// api.js
export const checkUserExists = async (email) => {
    try {
      const response = await fetch(`http://localhost:4005/users?email=${email}`);
      const users = await response.json();
      return users.length > 0; // returns true if user exists, otherwise false
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

//login user vaidation
export const checkUserExists1 = async (username,email, password) => {
  try {
    const response = await fetch(`http://localhost:4005/users?username=${username}&email=${email}&password=${password}`);
    const users = await response.json();
    return users.length > 0 ? users[0] : null; // returns the user if exists, otherwise null
  } catch (error) {
    console.error("Error checking user existence:", error);
    return null;
  }
};

  