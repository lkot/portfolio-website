import React, { useEffect } from 'react';
import './Portfolio.css';
import ImgPressPlay from '../../images/img_press_play.svg';
import ImgPortfolioWeb from '../../images/img_portfolio_website.svg';
import ImgReactIcon from '../../images/img_react.svg';
import ImgWebsite from '../../images/img_static_website.svg';
import ImgKnightri from '../../images/img_knightri.svg';
import ImgWeather from '../../images/img_weather.svg';
import ImgCrypto from '../../images/img_crypto.svg';
import ImgFinance from '../../images/img_finance.svg';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import Vimeo from '@u-wave/react-vimeo';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	// Catssoft Webpage
	const openPopupboxCatssoft = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={ImgReactIcon}
					alt='Catssoft Clone Project...'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>ReactJS • HTML5 • CSS3</p>
				</div>
				<p>
					The official catsSoft IT Services company website, with a
					functionality to be displayed in three different languages. Webpage
					implemented using such solutions as React Router, React Link, styled
					components & EmailsJS.
				</p>
				<b>Website:</b>{' '}
				<a
					className='hyper-link'
					onClick={() => window.open('https://catssoft.pl/')}
				>
					https://catssoft.pl/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/lkot/catssoft-webpage', '_blank')
					}
				>
					https://github.com/lkot/catssoft-webpage
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigCatssoft = {
		titleBar: {
			enable: true,
			text: 'Portfolio Projects.',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// My own portfolio website
	const openPopupboxPortfolioWebsite = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={ImgPortfolioWeb}
					alt='Portfolio website...'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>ReactJS • HTML5 • CSS3 • Bootstrap</p>
				</div>
				<p>My own fully responsive portoflio website.</p>
				<b>Website:</b>{' '}
				<a
					className='hyper-link'
					onClick={() => window.open('https://lukaszkot.biz/', '_blank')}
				>
					https://lukaszkot.biz/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/lkot/portfolio-website', '_blank')
					}
				>
					https://github.com/lkot/portfolio-website
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigPortfolioWebsite = {
		titleBar: {
			enable: true,
			text: 'Portfolio Projects.',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Knightri Triathlon Team
	const openPopupboxKnightri = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={ImgKnightri}
					alt='Knightri Triathlon Team...'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>Vanilla JavaScript • HTML5 • CSS3 • SASS • GULP</p>
				</div>
				<p>
					The mock website for fictitious triathlon team. Project implemented to
					practice designing & implementing modern, dynamic single web pages.
					The project has been programmed using 'mobile-first' & RWD approach.
				</p>
				<b>Website:</b>{' '}
				<a
					className='hyper-link'
					onClick={() => window.open('https://knightri.pl/', '_blank')}
				>
					https://knightri.pl/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/lkot/triteam-webpage', '_blank')
					}
				>
					https://github.com/lkot/triteam-webpage
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigKnightri = {
		titleBar: {
			enable: true,
			text: 'Portfolio Projects.',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Vanilla Weather App
	const openPopupboxWeatherApp = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={ImgWeather}
					alt='Vanilla Weather App...'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>Vanilla JavaScript • HTML5 • CSS3 • Axios • REST API</p>
				</div>
				<p>
					Vanilla Weather App is an application displaying 7 day forecast for
					any city in the World. Application has been implemented to practice
					utilizing of axios and establishing connection with REST API.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://lkot.github.io/vanilla-weather-app/', '_blank')
					}
				>
					https://lkot.github.io/vanilla-weather-app/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/lkot/portfolio-website', '_blank')
					}
				>
					https://github.com/lkot/vanilla-weather-app
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigWeatherApp = {
		titleBar: {
			enable: true,
			text: 'Portfolio Projects.',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Cryptocurrencies App
	const openPopupboxCryptoApp = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={ImgCrypto}
					alt='Cryptocurrencies App...'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>ReactJS • HTML5 • CSS3 • Axios • RESTful API</p>
				</div>
				<p>
					Application displaying up-to-date cryptocurrencies' data. Project
					implemented to practice utilizing of ReactJS framework, along with the
					usage of React Hooks, Axios and a RESTful API.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://lkot.github.io/currency-react-app/', '_blank')
					}
				>
					https://lkot.github.io/currency-react-app/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/lkot/currency-react-app', '_blank')
					}
				>
					https://github.com/lkot/currency-react-app
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigCryptoApp = {
		titleBar: {
			enable: true,
			text: 'Portfolio Projects.',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Finance Buddy App
	const openPopupboxFinanceBuddyApp = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={ImgFinance}
					alt='Finance Buddy App...'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>ReactJS • React Hooks • HTML5 • CSS3 • Context API</p>
				</div>
				<p>
					CRUD application to keep track of one's own budget implemented using
					ReactJS including React Hooks and Context API.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://lkot.github.io/finance-buddy-app/', '_blank')
					}
				>
					https://lkot.github.io/finance-buddy-app/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/lkot/finance-buddy-app', '_blank')
					}
				>
					https://github.com/lkot/finance-buddy-app
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigFinanceBuddyApp = {
		titleBar: {
			enable: true,
			text: 'Portfolio Projects.',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Krew System App
	const openPopupboxKrewSystemApp = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox portfolio-mobile-image-display'
					src={ImgPressPlay}
					alt='Krew System App...'
				/>
				<Vimeo
					video='584767575'
					className='vimeo-video portfolio-mobile-video-display'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>ASP.NET MVC 5 • EntityFramework • HTML5 • CSS3 • Bootstrap</p>
				</div>
				<p>
					KrewSystem is a further development of Blood Donation Center System
					via implementation of web portal for servicing blood donors.
					Application is an extension of already existing BDC's system and is
					dedicated for local departments of Lubuskie region located in 5 other
					cities.
				</p>
				<b>Video:</b>{' '}
				<a
					className='hyper-link'
					onClick={() => window.open('https://vimeo.com/584767575', '_blank')}
				>
					https://vimeo.com/KrewSystem
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigKrewSystemApp = {
		titleBar: {
			enable: true,
			text: 'Portfolio Projects.',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div id='portfolio' className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>Projects' Portfolio</h1>
				<div className='image-box-wrapper row justify-content-center'>
					{/* - CATSSOFT.PL */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='100'
						onClick={openPopupboxCatssoft}
					>
						<img
							className='portfolio-image'
							src={ImgReactIcon}
							alt='Catssoft Clone Project...'
						/>
						<h5>catsSoft.pl website</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
					{/* - LUKASZKOT.BIZ */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='200'
						onClick={openPopupboxPortfolioWebsite}
					>
						<img
							className='portfolio-image'
							src={ImgPortfolioWeb}
							alt='City Guide Project...'
						/>
						<h5>lukaszkot.biz website</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
					{/* --- KNIGHTRI --- */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='200'
						onClick={openPopupboxKnightri}
					>
						<img
							className='portfolio-image'
							src={ImgKnightri}
							alt='Knightri website...'
						/>
						<h5>knightri.pl website</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
					{/* --- VANILLA WEATHER APP --- */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='200'
						onClick={openPopupboxWeatherApp}
					>
						<img
							className='portfolio-image'
							src={ImgWeather}
							alt='Weather app...'
						/>
						<h5>Weather app</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
					{/* --- CRYPTOCURRENCIES --- */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='200'
						onClick={openPopupboxCryptoApp}
					>
						<img
							className='portfolio-image'
							src={ImgCrypto}
							alt='Crypto app...'
						/>
						<h5>Crypto app</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
					{/* --- FINANCE BUDDY --- */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='200'
						onClick={openPopupboxFinanceBuddyApp}
					>
						<img
							className='portfolio-image'
							src={ImgFinance}
							alt='FinanceBuddy app...'
						/>
						<h5>FinanceBuddy app</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
					{/* --- KrewSystem APP --- */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='150'
						onClick={openPopupboxKrewSystemApp}
					>
						<img
							className='portfolio-image'
							src={ImgPressPlay}
							alt='Krew System App...'
						/>
						<h5>KrewSystem app</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<div>
				<PopupboxContainer {...popupboxConfigCatssoft} />
				<PopupboxContainer {...popupboxConfigPortfolioWebsite} />
				<PopupboxContainer {...popupboxConfigKnightri} />
				<PopupboxContainer {...popupboxConfigWeatherApp} />
				<PopupboxContainer {...popupboxConfigCryptoApp} />
				<PopupboxContainer {...popupboxConfigFinanceBuddyApp} />
				<PopupboxContainer {...popupboxConfigKrewSystemApp} />
				{/* <PopupboxContainer {...popupboxConfigKrewSystemSMS} /> */}
			</div>
		</div>
	);
};

export default Portfolio;
