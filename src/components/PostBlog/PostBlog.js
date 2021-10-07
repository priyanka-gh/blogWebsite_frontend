import React,{useState, useEffect} from 'react'
import './PostBlog.scss'
import CheckIcon from '@material-ui/icons/CheckCircle';
import Pick from '../ImagePick/ImagePick'
import {showAllBlogs,createBlog} from '../apicalls'
import {isAuthenticated} from '../index'
import {Link,useHistory} from 'react-router-dom'

const Post = () => { 

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }

    // let updatedEntry=blogs?.map(entry=>{
    //     var created_date=new Date(entry.createdAt);
    //     var updated_date=new Date(entry.updatedAt);
    //     var months=['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec'];        
    //     var year=created_date.getFullYear();
    //     var month=months[created_date.getMonth()];
    //     var date=created_date.getDate();
    //     var hour=created_date.getHours();
    //     var min=created_date.getMinutes();
    //     var sec=created_date.getSeconds();
    //     var year2=updated_date.getFullYear();
    //     var month2=months[updated_date.getMonth()];
    //     var date2=updated_date.getDate();
    //     var hour2=updated_date.getHours();
    //     var min2=updated_date.getMinutes();
    //     var sec2=updated_date.getSeconds();
    //     var time=date+','+month+' '+year+' '+hour+':'+min+':'+sec;
    //     var time2=date2+','+month2+' '+year2+' '+hour2+':'+min2+':'+sec2;
    
    //     return{
    //         createdAt: time,
    //         updatedAt: time2,
    //     }
    
    // })

    const history=useHistory()
    var openBlog=(prop)=>{
        history.push({
            pathname:'/thisblog',
        })
    }

    
    return (
        <div className="postPick">
            <div className="textPost">
                <div className="upperInfo">
                    <input className="title link" type="text" placeholder="Title"></input>
                    <input className="category link"  type="text" placeholder="Category"></input>
                </div>
                <textarea className="content" type="text" ></textarea>
                <button className="submitPost" type="submit" ><CheckIcon/></button>
            </div>
            <div className="pick">
                <Pick/>
            </div>
        </div>
    )
}

export default Post
