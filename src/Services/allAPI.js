import { BASE_URL } from "./baseURL";
import { commonAPI } from "./commomAPI";

//request to register an user
export const registerAPI = async (reqBody) => {
    return await commonAPI('POST', `${BASE_URL}/user/register`, reqBody, "")
}


// request to login an user
export const loginAPI = async (reqBody) => {
    return await commonAPI('POST', `${BASE_URL}/user/login`, reqBody, "")
}


// request to login an user
export const adminAPI = async(reqBody)=>{
    return  await commonAPI ('POST',`${BASE_URL}/admin/login`,reqBody,"")
}


// request to add donor details
export const addDonorAPI = async(reqBody,reqHeaders)=>{
    return  await commonAPI ('POST',`${BASE_URL}/add-donor`,reqBody,reqHeaders)
}

// request to add reciver details
export const addReciverAPI = async(reqBody,reqHeaders)=>{
    return  await commonAPI ('POST',`${BASE_URL}/add-reciver`,reqBody,reqHeaders)
}

// request to add reciver details
export const addInventoryAPI = async(reqBody,reqHeaders)=>{
    return  await commonAPI ('POST',`${BASE_URL}/add-inventory`,reqBody,reqHeaders)
}


// request to get urgent-reciver details
export const urgentReciverAPI = async()=>{
    return  await commonAPI ('GET',`${BASE_URL}/home-reciver`,"","")
}

// request to get home-reciver details
export const userReciverAPI = async(reqHeaders)=>{
    return  await commonAPI ('GET',`${BASE_URL}/all-reciver`,"",reqHeaders)
}


// request to get home-donor details
export const userDonorAPI = async(reqHeaders)=>{
    return  await commonAPI ('GET',`${BASE_URL}/all-donor`,"",reqHeaders)
}


// request to get home-donor details
export const userInventoryAPI = async(reqHeaders)=>{
    return  await commonAPI ('GET',`${BASE_URL}/all-inventory`,"",reqHeaders)
}


// request to delete reciver details
export const deleteReciverAPI = async(id,reqHeaders)=>{
    return  await commonAPI ('DELETE',`${BASE_URL}/user-reciver/delete/${id}`,{},reqHeaders)
}

// request to delete donor details
export const deleteDonorAPI = async(id,reqHeaders)=>{
    return  await commonAPI ('DELETE',`${BASE_URL}/user-donor/delete/${id}`,{},reqHeaders)
}

// request to delete donor details
export const editDonorAPI = async(id,reqBody,reqHeaders)=>{
    return  await commonAPI ('PUT',`${BASE_URL}/user-donor/edit/${id}`,reqBody,reqHeaders)
}

// request to update donor profile details
export const updateDonorProfileAPI = async(reqBody,reqHeaders)=>{
    return  await commonAPI ('PUT',`${BASE_URL}/profile-update`,reqBody,reqHeaders)
}
