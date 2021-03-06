import React from 'react';
import GlobalContainer from './GlobalContainer';


const Footer = (props) => {
	return (
		<GlobalContainer>
			<footer>
				<div className="adress">
					<strong>Usługi:</strong>
					<div>
						<div>Pięlegnacja zieleni</div>
						<div>Zakładanie ogrodów</div>
						<div>Usługi ogrodnicze Wrocław i okolice</div>
					</div>
				</div>
				<div className="partners">
					<strong>Partnerzy:</strong>
					<div className="partners-wrap">
						<a href="" className="partner-logo">
							<div ></div>
						</a>
						<a href="" className="partner-logo">
							<div >Logo</div>
						</a>
						<a href="" className="partner-logo">
							<div >Logo</div>
						</a>
						<a href="" className="partner-logo">
							<div >Logo</div>
						</a>
					</div>
				</div>
				<div className="footer-contacts">
					<strong>Contacts:</strong>
					<div>
						<div>tel: +48 731 924 406</div>
						<div className="footer-email">email: uslugi@greenpolis.pl </div>
						<div className="social-media">
							<a href="http://www.facebook.com"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
							<a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
						</div>
					</div>
				</div>
			</footer>
		</GlobalContainer>
	)
}


export default Footer;