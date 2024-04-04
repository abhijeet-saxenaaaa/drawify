import React from 'react'
const yr = new Date().getFullYear();
function Footer ()
{
    return (
        <p id='footer'>© {yr} Drawify</p>
    );

}

export default Footer;