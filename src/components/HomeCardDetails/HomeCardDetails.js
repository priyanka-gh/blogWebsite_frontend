import React,{useEffect,useState} from 'react'
import './HomeCardDetails.css'
import thisblog from '../Home/background.jpg'
import {getThisBlog} from '../apicalls'
import {isAuthenticated} from '../index'
import { useLocation, useHistory } from "react-router-dom";
import ImageHelper from '../helper/imageHelper'
import ImageHelperCard from '../helper/ImageHelperCard'
const HomeCardDetails = props => {
    const [blogs, setBlogs] = useState([]);

    const { user, token } = isAuthenticated();

    const location=useLocation()
      const blogId=location.state.detail;
      const author = location.state.auth
      const time=location.state.time

      const preload=()=>{
        getThisBlog(blogId,token).then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            setBlogs(data);
          }      
        });
      }
     

    useEffect(() => {
      preload()
    })
    let history=useHistory();


    var openUser=(prop)=>{
      history.push({
          pathname:'/thisUserBlog',
          state : {detail : prop}
      })
      console.log('hererrerre ',prop)
  }


    return (
      <div className="homecard">
        <ul className="lis">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        <div className="header">  
          <div className="upper">
              <div className="blogimg">
                <ImageHelperCard card = {blogs} ></ImageHelperCard>
              </div>
              <div className = "blogHeader">
              <h1 className="headingTitle">{blogs?blogs.title:" "}</h1>
              <h3 className="headingCat">{blogs.category?blogs.category.name:" "}</h3>
              <a onClick={function(){openUser(blogs.author._id)}} className="headingAu">{author}</a>
              <h3 className="heading">{time}<span> </span></h3>
            </div>
          </div>
        </div>
        <div className="middle">
              <h4 className="blogcontent">{blogs.content}</h4>
        </div>
      </div>
    )
}

export default HomeCardDetails
