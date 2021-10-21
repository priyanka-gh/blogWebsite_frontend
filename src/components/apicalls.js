import {API} from "../backend"


export const createBlog=(userId,token,blog)=>{
    console.log("blg ",blog)

    return fetch(`${API}/blogs/create/${userId}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    body: blog
    })
    .then(response => {
        console.log("success")
        return response.json();
    })
    .catch(err=>console.log("err"))
}

//done
export const showAllBlogs=()=>{
    return fetch(`${API}/blogs`,{
        method:"GET"
    }).then(res=>{
        return res.json();
    }).catch(err=>console.log(err))
}

//done
export const getThisBlog=(blogId,token)=>{
    return fetch(`${API}/blogs/${blogId}`,{
        method:"GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then(res=>{
        return res.json();
    }).catch(err=>console.log(err))
}

//done
export const getMyBlogs=(userId,token)=>{
    return fetch(`${API}/blogs/all/${userId}`,{
        method:"GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then(res=>{
        return res.json()
    }).catch(err=>{console.log(err)})
}

export const deleteBlog=(userId,blogId,token)=>{
    return fetch(`${API}/blogs/remove/${userId}/${blogId}`,{
        method:"DELETE",
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then(res=>{
        return res.json();
    }).catch(err=>console.log(err))
}

export const getAllBlogsByUser = (userId) => {

    return fetch(`${API}/blogs/all/${userId}`, {
        method : "GET",
    }).then(res => {
        return res.json()
    }).catch(err => console.log(err))
}
//delete by admin
export const deleteBlogbyAdmin=(userId,blogId,token)=>{
    return fetch(`${API}/blogs/removeByAdmin/${userId}/${blogId}`,{
        method:"DELETE",
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then(res=>{
        return res.json();
    }).catch(err=>console.log(err))
}

