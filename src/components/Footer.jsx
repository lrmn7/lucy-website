import React from 'react';
import Logo from "../assets/images/lucy.png";
import KoFi from "../assets/images/ko-fi.png";
import Buymeacoffee from "../assets/images/buy-me-a-coffee.png";

import '../assets/styles/components/footer.scss';

export default React.memo(() => (
	<footer>
    	<div id="footer-content">
      		<div id="footer-left">
			    <img id="footer-logo" src={Logo} alt="Booster Bot logo" />
				<div id="footer-left-text">
					<h2 id="footer-title">Lucy bot</h2>
					<span id="footer-copyright">Copyright © {new Date().getFullYear()} Lucy</span>
					<span data-ccpa-link="1"></span>
				</div>
			</div>
			<div id="footer-links">
				<div className="footer-links-col">
					<a className="footer-link" href="https://www.buymeacoffee.com/LRMN"> 
					<img height="15rem!important;" src={Buymeacoffee} alt="Patreon Logo" /> Buy me a coffee
					</a>
					<a className="footer-link" href="https://ko-fi.com/lrmn7">
						<img height="15rem!important;" src={KoFi} alt="Ko-Fi Logo" /> Ko-Fi
					</a>
				</div>
				<div className="footer-links-col">
					<p className="footer-link">WORK IN PROGRESS!</p>
					<p className="footer-link">Other Things are under maintainance.</p>
				</div>
			</div>
    	</div>
  	</footer>
));