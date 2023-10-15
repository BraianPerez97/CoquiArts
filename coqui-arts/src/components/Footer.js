import React from 'react';
import Facebook from '../assets/socialsIcons/facebook.png'
import Instagram from '../assets/socialsIcons/instagram.png'
import LinkedIn from '../assets/socialsIcons/linkedin.png'
import X from '../assets/socialsIcons/x.png'

const Footer = () => {
    return (
        <div class="footer ">
            <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="#"><img class="icon ion-social-instagram" src={Facebook}></img></a>
                <a href="#"><img  src={Instagram} class="icon ion-social-snapchat"></img></a>
                <a href="#"><img  src={LinkedIn} class="icon ion-social-twitter"></img></a>
                <a href="#"><img class="icon ion-social-facebook"  src={X}></img></a></div>
            <div>
            <ul class="list-inline">
                <li class="home"><a href="#">⬆ Back</a></li>
            </ul>
            </div>
          <div className="line"></div>
            <p class="copyright">CoquiArts © 2023</p>
            <div className='agreements'>
            <ul className='policies'>
                <li class="list-inline-item p-item"><a href="#">Terms & Conditions</a></li>
                <li class="list-inline-item p-item"><a href="#">Privacy Policy</a></li>
                <li class="list-inline-item p-item"><a href="#">Use Policy</a></li>

            </ul>
            </div>
        </footer>
    </div>
    
          </div>
    )
}

export default Footer;