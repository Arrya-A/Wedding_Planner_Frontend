import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"

//add venue details
export const allVenueApi= async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/vendorData`,reqBody)
}

//get venue details
export const getAllVenueApi= async()=>{
    return await commonAPI('GET',`${serverUrl}/vendorData`,"")
}

//add caterer details
export const allCatererApi= async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/vendorDataC`,reqBody)
}

//get venue details
export const getAllCatererApi= async()=>{
    return await commonAPI('GET',`${serverUrl}/vendorDataC`,"")
}

//register api

export const registerApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/Users`,reqBody,"")
}
//api to get register
export const getUserApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/Users?email=${reqBody.email}&password=${reqBody.password}`);
}