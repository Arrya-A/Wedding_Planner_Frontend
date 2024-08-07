import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const allVenueApi= async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/vendorData`,reqBody)
}