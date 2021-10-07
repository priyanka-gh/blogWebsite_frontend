import React,{useState,useEffect} from 'react'
import './MyAllBlogs.scss'
import { FaEdit} from "react-icons/fa";
import { RiDeleteBin6Line} from "react-icons/ri";
import {useHistory} from 'react-router-dom'
import {getMyBlogs,updatedEntry,deleteBlog} from '../apicalls'
import {isAuthenticated} from '../index'

const MyAllBlogs = () => {
    let history=useHistory();

    function selectBlog(){
        history.push('/post')
    }
    
    const [blogs, setBlogs] = useState([]);
    
    const { user, token } = isAuthenticated();
    
    const preload = () => {    
    getMyBlogs(user._id,token).then(data => {
        if (data.error) {
            // console.log(data.error);
            console.log("success")
        } else {
             setBlogs(data);
             console.log('fail')
        }
    });
    };

    useEffect(() => {
    preload();
    });
    
    function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    
    let updatedEntry=blogs?.map(entry=>{
    var created_date=new Date(entry.createdAt);
    var updated_date=new Date(entry.updatedAt);
    var months=['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec'];        
    var year=created_date.getFullYear();
    var month=months[created_date.getMonth()];
    var date=created_date.getDate();
    var hour=created_date.getHours();
    var min=created_date.getMinutes();
    var sec=created_date.getSeconds();
    var year2=updated_date.getFullYear();
    var month2=months[updated_date.getMonth()];
    var date2=updated_date.getDate();
    var hour2=updated_date.getHours();
    var min2=updated_date.getMinutes();
    var sec2=updated_date.getSeconds();
    var time=date+','+month+' '+year+' '+hour+':'+min+':'+sec;
    var time2=date2+','+month2+' '+year2+' '+hour2+':'+min2+':'+sec2;
    
    return{
        createdAt: time,
        updatedAt: time2,
    }
    
    })
    
    var openBlog=(prop)=>{
        history.push({
            pathname:'/thisblog',
            state : {detail : prop, time : updatedEntry[0].createdAt }
            // state: { detail : blog._id}
        })
    }
      
    const deleteThisBlog = (blogId) => {
        deleteBlog(user._id,blogId,token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            window.location.reload();
            setBlogs(data);
        }       
        });
        };
    return (
        <div className="myAllBlogs"> 
        <div className="innerClass"> 
            <button className="createNew" onClick={selectBlog} href="/post">Create New</button>
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
                            <div className="blogIcon">
                                <FaEdit className="editIcon"/>
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
    )
}

export default MyAllBlogs
