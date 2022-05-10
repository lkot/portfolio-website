import React from 'react';
import './Footer.css';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<IconContext.Provider value={{ size: '36' }}>
			<div id='footer' className='footer'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='d-flex'>
							<a
								className='footer-icon'
								href='https://github.com/lkot'
								target='_blank'
							>
								<FontAwesomeIcon icon={faGithub} size='2x' />
							</a>
							<a
								className='footer-icon'
								href='https://www.linkedin.com/in/kot-lukasz/'
								target='_blank'
							>
								<FontAwesomeIcon icon={faLinkedin} size='2x' />
							</a>
							<a
								className='footer-icon'
								href='https://www.facebook.com/kicirrus/'
								target='_blank'
							>
								<FontAwesomeIcon icon={faFacebook} size='2x' />
							</a>
							<a
								className='footer-icon'
								href='https://www.instagram.com/luk_kot'
								target='_blank'
							>
								<FontAwesomeIcon icon={faInstagram} size='2x' />
							</a>
						</div>
					</div>
					<div className='row justify-content-center'>
						{/* <p className="footer-icon d-flex">lukasz.kot@hotmail.com</p> */}
						<a
							className='footer-email'
							href='mailto:lukasz.kot@hotmail.com?body=My custom mail body'
						>
							lukasz.kot@hotmail.com
						</a>
					</div>
					<div className='row justify-content-center'>
						<a className='footer-email' href='tel:691-082-823'>
							+48 691 082 823
						</a>
					</div>
					<div className='row justify-content-center'>
						<p className='d-flex'>
							Copyright &copy; {new Date().getFullYear()}&nbsp; | Łukasz Kot |
							All Rights Reserved
						</p>
					</div>
					<div className='row'>
					</div>
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Footer;
