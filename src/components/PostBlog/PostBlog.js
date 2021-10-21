import React,{useState, useEffect} from 'react'
import './PostBlog.scss'
import CheckIcon from '@material-ui/icons/CheckCircle';
import Pick from '../ImagePick/ImagePick'
import {createBlog, showAllBlogs} from '../apicalls'
import {isAuthenticated} from '../index'
import {Link,useHistory} from 'react-router-dom'
import { API } from '../../backend';
var FormData = require('form-data');

const Post = () => {

    const history=useHistory()
    var openBlog=(prop)=>{
        history.push({
            pathname:'/thisblog',
        })
    }
    const {user,token}=isAuthenticated();

    const [values, setValues] = useState({
        title : " ",
        content : " ",
        category : " ",
        author : user._id,
        formData : " "
    })

    const{title, content, category, author, formData}=values;

    const preload=()=>{
        showAllBlogs().then(data=>{
            if(data.error){
                setValues({...values,error:data.error});
                console.log('error hai ')
            }else{
                setValues({...values,formData: new FormData()});
            }
        });
        console.log('fd1 ',formData)
    };

    useEffect(() => {
        preload()
    }, [])

    
        
    const handleChange=name=>event=>{
        const value=name==="photo"?event.target.files[0]:event.target.value;
        formData.append(name,value);
        setValues({...values, [name]:value});
    }

    const onSubmit=event=>{
        console.log('trigger', formData)
        event.preventDefault();
        setValues({...values,error:"",loading:true})
        createBlog(user._id,token,formData).then(data=>{
          if(data.error){
            setValues({...values,error:data.error})
          }else{
            setValues({
              ...values,
              title : " ",
              content : " ",
              category : " ",
              author : " "
            })
          }
        console.log("data",data);
        })
    }

    return (
        <div className="postPick">
            <div className="textPost">
                <div className="upperInfo">
                    <input className="title link" type="text" placeholder="Title" onChange={handleChange("title")}></input>
                    <input className="category link"  type="text" placeholder="Category" onChange={handleChange("category")}></input>
                </div>
                <textarea className="content" type="text" onChange={handleChange("content")}></textarea>
                <button className="submitPost" type="submit"  onClick={onSubmit} ><CheckIcon/></button>
            </div>
            <div className="pick">
                <Pick onChange={handleChange("photo")}/>
            </div>
        </div>
    )
}

export default Post
