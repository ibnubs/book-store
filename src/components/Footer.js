import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-logo">Books-IT</div>
                <div className="footer-list">
                    <ul>
                    <li>Tentang</li>
                    <li>Karier</li>
                    <li>Hubungi Kami</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;