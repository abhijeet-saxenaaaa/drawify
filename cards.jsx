import React from 'react';

function Cards()
{
    return(

        < div className = "card">
            <h1 className='cardHeading'>Why Choose Drawify ?<br /><br /></h1>
            < div className= 'cardcontainer1'>

               <div className='item card1'><h2 className='cardHeading'>Verstality</h2><p>
                We can draw anything according to our convenience and show our creativity on this platform. It also enhances our skills.</p></div>

               <div className='item card2'><h2 className='cardHeading'>User Friendly</h2><p>Our intuitive interface ensures a smooth experience, even for first time users.</p></div>

               <div className='item card3'><h2 className='cardHeading'>Secure and Reliable</h2><p> Your data is handled with the utmost care. We prioritize security to protect your content and privacy.</p></div>

            </div>
            <h1 className='cardHeading'><br />Who Can Benefit ?<br /><br /></h1>
            <div className= "cardcontainer2" > 

               <div className='item card4'><h2 className='cardHeading'>Educators</h2><p>Teachers can deliver their lectures and teach number of efficiently in a more efficient manner.</p></div>

               <div className='item card5'><h2 className='cardHeading'>Creators</h2><p>
                Artist can showcase their talent by making various kind of arts. This also helps them to improve their skillset.</p></div>

               <div className='item card6'><h2 className='cardHeading'>Business Professionals</h2> <p>Streamline training sessions by writing down data business model and much more through this platform.</p></div>
            </div>
        </div>
    );
}
export default Cards; 