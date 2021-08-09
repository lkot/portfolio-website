import React, { useEffect } from 'react';
import './Portfolio.css';
import ImgPressPlay from '../../images/img_press_play.svg';
import ImgPortfolioWeb from '../../images/img_portfolio_website.svg';
import ImgReactIcon from '../../images/img_react.svg';
import ImgWebsite from '../../images/img_static_website.svg';
// import VideoExample from "../../videos/examplary-video.mp4";
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

	// const [playPause, setPlayPause] = useState(false);
	// const changeNav = () => {

	// };

	// var myVideo = document.getElementById("myVideo");

	// function playPause() {
	//   if (myVideo.paused) myVideo.play();
	//   else myVideo.pause();
	// }

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
				{/* <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://portfolio-rea-and-material-ui.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://portfolio-rea-and-material-ui.herokuapp.com/
        </a>
        <br /> */}
				{/* <b>GitHub:</b>{" "} */}
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

	// Krew System SMS application
	const openPopupboxKrewSystemSMS = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox portfolio-mobile-image-display'
					src={ImgWebsite}
					alt='Krew System SMS App...'
				/>
				{/* <div>
          <button onClick={playPause}>Play/Pause</button>
          <button onClick="makeBig()">Big</button>
          <button onClick="makeSmall()">Small</button>
          <button onClick="makeNormal()">Normal</button>
          <video
            id="myVideo"
            className="portfolio-image-popupbox"
            src={VideoExample}
            autoPlay
            loop
            type="video/mp4"
          />
        </div> */}
				{/* <video
          className="portfolio-image-popupbox"
          src={VideoExample}
          autoPlay
          loop
          type="video/mp4"
        /> */}
				<Vimeo
					video='555818973'
					className='vimeo-video portfolio-mobile-video-display'
				/>
				<hr />
				<div className='portfolio-techs'>
					<b>Frameworks, technologies & libraries used: </b>{' '}
					<p>ASP.NET MVC 5 • EntityFramework • HTML5 • CSS3 • Bootstrap</p>
				</div>
				<p>
					KrewSystem.Sms is a further further development of existing Blood
					Donation Center. An application which main functionality is to send
					various short text messages as a notification for donors.
				</p>
				{/* <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://react-redux-task-manager.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://react-redux-task-manager.herokuapp.com/
        </a> */}
				{/* <br /> */}
				{/* <b>GitHub:</b>{" "} */}
				<b>Video:</b>{' '}
				<a
					className='hyper-link'
					onClick={() => window.open('https://vimeo.com/555818973', '_blank')}
				>
					https://vimeo.com/KrewSystemSMS
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigKrewSystemSMS = {
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
					{/* - */}
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
					{/* - */}
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
						<h5>KrewSystem App</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
					{/* - */}
					<div
						className='portfolio-image-box'
						data-aos='zoom-in'
						data-aos-delay='250'
						onClick={openPopupboxKrewSystemSMS}
					>
						<img
							className='portfolio-image'
							src={ImgWebsite}
							alt='Krew System SMS...'
						/>
						<h5>KrewSystem.Sms App</h5>
						<div className='overflow'></div>
						<FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<div>
				<PopupboxContainer {...popupboxConfigCatssoft} />
				<PopupboxContainer {...popupboxConfigPortfolioWebsite} />
				<PopupboxContainer {...popupboxConfigKrewSystemApp} />
				<PopupboxContainer {...popupboxConfigKrewSystemSMS} />
			</div>
		</div>
	);
};

export default Portfolio;
