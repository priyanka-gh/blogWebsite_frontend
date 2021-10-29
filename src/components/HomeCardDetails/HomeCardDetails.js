import React,{useEffect,useState} from 'react'
import './HomeCardDetails.css'
import {getThisBlog, likePost, totalLikes, getLike, deleteLike} from '../apicalls'
import {isAuthenticated} from '../index'
import { useLocation, useHistory } from "react-router-dom";
import { BsFillHeartFill} from "react-icons/bs";
import ImageHelperCard from '../helper/ImageHelperCard'
const HomeCardDetails = props => {
    const [blogs, setBlogs] = useState([]);
    const [userlikes, setuserLikes] = useState([]);
    const [likes, setLikes] = useState([0])
    const [color, setColor] = useState(0)
    const [loggedIn,setLoggedIn]=useState(false);
    const { user, token } = isAuthenticated();
    const [myLike, setmyLike] = useState('');

    useEffect(() => {
        isAuthenticated()?setLoggedIn(true):setLoggedIn(false)
    },[])

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
      getLikes(blogId)
    })

    useEffect(() => {
      getThisLike(user._id,blogId)

    },[likes])

    var getLikes = (blogId) =>{
      totalLikes(blogId).then(data => {
        if(data.error) {
          console.log(data.error)
        }
        else{
          setLikes(data)
        }
      })
    }

    let history=useHistory();


    var openUser=(prop)=>{
      history.push({
          pathname:'/thisUserBlog',
          state : {detail : prop}
      })
  }

  var deleteThisLike = (likeId) => {
    deleteLike(likeId).then(data => {
      if(data.error) {
        console.log(data.error)
      }
      else{
        return data
      }
    })
  }

  var delLike = (userId, blogId) => {
    getLike(userId, blogId).then(data => {
      if(data.error) {
        console.log(data.error)
      }
      else{
        deleteThisLike(data[0]._id)
      }
    })
  }

  var getThisLike = (userId, blogId) => {
    getLike(userId, blogId).then(data => {
      if(data.error) {
        console.log(data.error)
      console.log('blg ',blogId)

      }
      else{
        setmyLike(data.length)
        // console.log('setuserlike ',data.length)
      }
    })
  }
  
  var likeThisPost = (userId, blogId) =>{
    likePost(userId, blogId, token).then(data => {
      if(!loggedIn){
        setTimeout(function(){
          window.location.href = '/login';
       });
      }
      if(data.error) {
        delLike(userId, blogId)
        setColor(0)
        console.log(data.error)
      }
      else{
        console.log('else')
        setuserLikes(data)
        setColor(1)
      }
    })
  }
console.log('cllr ',color)
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
            <a onClick={function(){openUser(blogs.author._id)}} className="headingAu">{author}</a>
          </div>
        </div>
      </div>
      {console.log('len ',myLike)}

      {color==1 || myLike > 0?
      <div className="middle blogcontent">
            <h3 className="headingCat">{blogs.category?blogs.category.name:" "}</h3>
            <h3 className="heading">{time}<span> </span></h3>
            <h4><BsFillHeartFill 
              className="likeIcon" 
              color = "red"
              onClick={function(){
                likeThisPost(user?user._id:" ", blogs._id);
              }}/>
              <span>{likes} likes</span>
            </h4>
            <h4>{blogs.content}</h4> 
      </div>:
      <div className="middle blogcontent">
        <h3 className="headingCat">{blogs.category?blogs.category.name:" "}</h3>
            <h3 className="heading">{time}<span> </span></h3>
            <h4><BsFillHeartFill 
              className="likeIcon" 
              stroke= "black"
              strokeWidth= "0.2"
              color = "white"
              onClick={function(){
                likeThisPost(user?user._id:" ", blogs._id);
              }}/>
              <span>{likes} likes</span>
            </h4>
            <h4>{blogs.content}</h4>
      </div>
      }
    </div>
  )
}

export default HomeCardDetails
