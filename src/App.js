import React,{Suspense, lazy} from 'react'
import './App.css';
import Signup from './components/Signup/Signup'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
import HomeCardDetails from './components/HomeCardDetails/HomeCardDetails';
import PostBlog from './components/PostBlog/PostBlog';
import MyAllBlogs from './components/MyAllBlogs/MyAllBlogs'
import AdminDashboard from './components/Admin/DeleteBlogs'
import AllBlogsByUser from './components/AllBlogsByUser/AllBlogsByUser';
import UpdateBlog from './components/UpdateBlog/UpdateBlog';
import Updated from './components/Success/Updated';
import Posted from './components/Success/Posted';
import FailPost from './components/Failure/FailPost'
import AdminRoutes from './components/Admin/helper/AdminRoutes';

const Home = lazy(() => import('./components/Home/Home'))

function App() {
  return (
    <div className="App">
    <Router>
    <Suspense fallback = {<div className='susdiv'>Please wait ...</div>}>
        <Navbar/>
        <Switch>
        <Route path="/signup" exact component ={Signup}/>
        <Route path="/login" exact component = {Login}/>
        <Route path="/" exact component = {Home}/>       
        <Route path="/details" exact component = {HomeCardDetails}/>
        <Route path="/post" exact component = {PostBlog}/>
        <Route path="/myAllBlogs" exact component = {MyAllBlogs}/>
        <AdminRoutes path="/admin/dashboard" exact component = {AdminDashboard}/>
        <Route path="/thisUserBlog" exact component = {AllBlogsByUser}/>
        <Route path="/updateBlog" exact component = {UpdateBlog}/>
        <Route path="/successPost" exact component = {Posted} />
        <Route path="/successUpdate" exact component = {Updated}/>
        <Route path="/failPost" exact component = {FailPost}/>
      </Switch>
    </Suspense>
    </Router>
    </div>
  );
}

export default App;
