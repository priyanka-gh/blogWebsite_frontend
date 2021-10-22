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
import DeleteByAdmin from './components/Admin/DeleteBlogs'
import AllBlogsByUser from './components/AllBlogsByUser/AllBlogsByUser';
import UpdateBlog from './components/UpdateBlog/UpdateBlog';
import Updated from './components/Success/Updated';
import Posted from './components/Success/Posted';
import FailPost from './components/Failure/FailPost'

const Home = lazy(() => import('./components/Home/Home'))

function App() {
  return (
    <div className="App">
    <Router>
    <Suspense fallback = {<div className='susdiv'>Please wait ...</div>}>
        <Navbar/>
        <Switch>
        <Route path="/signup" exact render={() => <Signup/>}></Route>
        <Route path="/login" exact render={() => <Login/>}></Route>
        <Route path="/" exact render={() => <Home/>}></Route>        
        <Route path="/details" exact render={() => <HomeCardDetails/>}></Route>
        <Route path="/post" exact render={() => <PostBlog/>}></Route>
        <Route path="/myAllBlogs" exact render={() => <MyAllBlogs/>}></Route>
        <Route path="/AdminPage" exact render={() => <DeleteByAdmin/>}></Route>
        <Route path="/thisUserBlog" exact render={() => <AllBlogsByUser/>}></Route>
        <Route path="/updateBlog" exact render={() => <UpdateBlog/>}></Route>
        <Route path="/successPost" exact render={() => <Posted/>}></Route>
        <Route path="/successUpdate" exact render={() => <Updated/>}></Route>
        <Route path="/failPost" exact render={() => <FailPost/>}></Route>
      </Switch>
    </Suspense>
    </Router>
    </div>
  );
}

export default App;
