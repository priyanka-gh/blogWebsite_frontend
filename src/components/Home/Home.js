import React,{useState,useEffect} from 'react'
import './Home.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import bgPhoto from './background.jpg'
import {isAuthenticated} from '../index'

const Home = () => {

    Aos.init({
        offset: 150, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
    });

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }

    const { user } = isAuthenticated();

    return (  
        <div class="home">
            <h1 className="welcomeMsg">Welcome {isAuthenticated() && user.name} !</h1>
            <div className="upperHome">
            <a href="/details" >
                <div className="textHome">
                    <h3>Title - Lorem, ipsum dolor.</h3>
                    <p>Content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus culpa rem odit adipisci omnis!... </p>
                </div>
            </a>
                <div className="imageHome">
                    <img class="bgphoto" src={bgPhoto}/>
                </div>
            </div>
            <div className="lowerHome">
            <h1 className="stories">This Week's Stories</h1>

            <ul class="cards">
            <div data-aos="zoom-in">
                <li>
                    <a href="/details" class="card">
                    <img src={bgPhoto} class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <div class="card__header-text">
                            <h3 class="card__title">Gossip Girl</h3>            
                            <span class="card__category">Teen Drama</span>
                        </div>
                        </div>
                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>      
                </li>
                </div>
                <div data-aos="zoom-in">
                <li>
                    <a href="/details" class="card">
                    <img src={bgPhoto} class="card__image" alt="" />
                    <div class="card__overlay">        
                        <div class="card__header">
                        <div class="card__header-text">
                            <h3 class="card__title">Gossip Girl</h3>
                            <span class="card__category">Teen Drama</span>
                        </div>
                        </div>
                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li>
                </div>
                <div data-aos="zoom-in">
                <li>
                    <a href="/details" class="card">
                    <img src={bgPhoto} class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <div class="card__header-text">
                            <h3 class="card__title">Gossip Girl</h3>
                            <span class="card__category">Teen Drama</span>
                        </div>
                        </div>
                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li>
                </div>
                <div data-aos="zoom-in">
                <li>
                    <a href="/details" class="card">
                    <img src={bgPhoto} class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <div class="card__header-text">
                            <h3 class="card__title">Gossip Girl</h3>
                            <span class="card__category">Teen Drama</span>
                        </div>          
                        </div>
                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li>  
                </div>  
                </ul>
            </div>
        </div>
        
    )
}

export default Home
