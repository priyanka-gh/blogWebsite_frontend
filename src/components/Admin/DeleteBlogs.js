import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {showAllBlogs,deleteBlogbyAdmin} from '../apicalls'
import {isAuthenticated} from '../index'
import { RiDeleteBin6Line} from "react-icons/ri";
import './DeleteBlogs.css'
const DeleteBlogs = () => {

    let history=useHistory();

    function selectBlog(){
        history.push('/post')
    }
    
    const [blogs, setBlogs] = useState([]);
    
    const { user, token } = isAuthenticated();
    
    const preload = () => {    
        showAllBlogs().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
             setBlogs(data);
        }
    });
    };

    useEffect(() => {
    preload();
    });

    // var openBlog=(prop)=>{
    //     history.push({
    //         pathname:'/thisblog',
    //         state : {detail : prop, time : updatedEntry[0].createdAt }
    //         // state: { detail : blog._id}
    //     })
    // }
      
    const deleteThisBlog = (blogId) => {
        deleteBlogbyAdmin(user._id,blogId,token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            window.location.reload();
            setBlogs(data);
        }       
    });
    };

    return (
        <div>
        <div className="myAllBlogs"> 
        <div className="innerClass"> 
            {
                blogs.map((blog)=>{
                    return(
                        <div className="allBlogCard" >
                            <div className='myBlogsHeader'>created at</div>
                            <a href='/details'>
                            <div  className="myBlogsBody">
                            <div className="blogArea" >
                                <h3 className="blogTitle">
                                    {blog.title}</h3>
                                    <p className="blogContent">
                                        {blog.content}
                                    </p>
                            </div>

                            <div className="deleteIcon">
                                <RiDeleteBin6Line className="delIcon"/>
                            </div>

                            </div>
                            </a>
                        </div>
                    )
                })
            }
                </div>  
        </div>
        </div>
    )
}

export default DeleteBlogs
