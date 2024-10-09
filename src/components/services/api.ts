import axios, { Axios } from "axios";

export const client = axios.create({
    baseURL:'https://api.iransweb.com' 
})


//--------------------------- Product ---------------------------// 
export async function getAllProducts (){
    const {data} = await client.get('/products/coffee/') ; 
    return data 
}


export async function getProductById (id:string) {
    const {data} = await client.get(`/products/coffee/${id}`)
    return data
}


//--------------------------- User ---------------------------//

export async function getUsers () {
    
}