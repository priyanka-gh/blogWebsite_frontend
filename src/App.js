import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup/Signup'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import HomeCardDetails from './components/HomeCardDetails/HomeCardDetails';
import PostBlog from './components/PostBlog/PostBlog';
import MyAllBlogs from './components/MyAllBlogs/MyAllBlogs'
function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Switch>
        <Route path="/signup" exact render={() => <Signup/>}></Route>
        <Route path="/login" exact render={() => <Login/>}></Route>
        <Route path="/" exact render={() => <Home/>}></Route>
        <Route path="/details" exact render={() => <HomeCardDetails/>}></Route>
        <Route path="/post" exact render={() => <PostBlog/>}></Route>
        <Route path="/myAllBlogs" exact render={() => <MyAllBlogs/>}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
