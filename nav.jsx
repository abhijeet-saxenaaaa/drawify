import React from 'react';

function Nav()
{
    return (
     < div className = "navbar">
      
        <p className="logo"> </p>
        <div className = "item intro"><a href="#intro">Introduction</a>  </div>
        <div className="item join"> <a href="#join">Join Us</a>  </div>
        <div className="item contact"> <a href="#contact">Contact Us</a>  </div>
     </div>
    );
    
}
export default Nav;