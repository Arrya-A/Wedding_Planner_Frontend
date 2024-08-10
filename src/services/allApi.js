import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const allVenueApi= async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/vendorData`,reqBody)
}

export const getAllVenueApi= async()=>{
    return await commonAPI('GET',`${serverUrl}/vendorData`,"")
}

export const allCatererApi= async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/vendorDataC`,reqBody)
}

export const getAllCatererApi= async()=>{
    return await commonAPI('GET',`${serverUrl}/vendorDataC`,"")
}

