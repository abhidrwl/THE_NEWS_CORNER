import React from 'react'
import { useGlobalContext } from './Context'
import "./favicon-16x16.png"
import logo from "./favicon-32x32.png"

const Navbar = () => {
    const {query, searchPost}= useGlobalContext();
  return (
      <div id='nadbar' className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
              <div className="p-4">
                  <h4 className="text">About Us</h4>
                  <span className="text6">Let’s agree that the information age can be overwhelming. 
                  Not only is there a lot of information in total, but it is also scattered all over the web. In order to save time, 
                  we can bring all of the news, updates, insights, tips, guides, articles into one location ,the news corner!
                  Browsimg is quite simple, all you have to do is search what you are looking in the search bar and if you have trouble in that, we have provided some of the 
                  news for you.
                  Happy Browsing!
                   </span>
              </div>
          </div>
          <nav className="navbar sticky-top navbar-light bg-info">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className='logotext'>
                  <img className='logo' src={logo} />
                  <a href='/' className="navbar-brand"> THE NEWS CORNER</a>
              </div>

              <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search here" aria-label="Search"
                      value={query}
                      onChange={(e) => searchPost(e.target.value)}
                  />
                  <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Reset</button>
              </form>
          </nav>


      </div>
  )
}

export default Navbar

