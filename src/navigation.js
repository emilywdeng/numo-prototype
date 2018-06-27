import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class NavBar extends React.Component {
  
  
  
  render () {

    return (
    
      <div className="NavBar">Hello world!
        <div className="container center">
        <nav className="">
                <ul className="">
                    <li ><a href="#">Profile</a></li>
                    <li ><a href="#">Questions</a></li>
                    <li ><a href="#">Feed</a></li>
                    <li ><a href="#">Explore</a></li>
                </ul>
        </nav>
        </div>
      
      
      
      
      
      </div>
    
    );
    
  }
}

export default NavBar;