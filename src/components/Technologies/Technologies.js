import React, { useEffect } from 'react';
import './Technologies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faReact,
	faJsSquare,
	faCss3Alt,
	faHtml5,
	faBootstrap,
	faNpm,
	faGithub,
	faCuttlefish,
	faConnectdevelop,
	faUsb,
	faSass,
	faGulp,
} from '@fortawesome/free-brands-svg-icons';
import {
	faDatabase,
	faCode,
	faNetworkWired,
	faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<div id='technologies' className='technologies'>
			<h1 className='py-5'>Frameworks, Libraries & Technologies</h1>
			<div className='container'>
				<div className='row'>
					{/* - */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='100'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faJsSquare} size='2x' />
							</div>
							<h3>JavaScript</h3>
						</div>
					</div>
					{/* - */}
					<div className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'>
						<div className='box' data-aos='flip-left' data-aos-delay='200'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faHtml5} size='2x' />
							</div>
							<h3>HTML 5</h3>
						</div>
					</div>
					{/* - */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='300'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faCss3Alt} size='2x' />
							</div>
							<h3>CSS 3</h3>
						</div>
					</div>
					{/* - */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='400'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faSass} size='2x' />
							</div>

							<h3>SASS</h3>
						</div>
					</div>
					{/* - */}
					<div className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'>
						<div className='box' data-aos='flip-left' data-aos-delay='500'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faReact} size='2x' />
							</div>
							<h3>ReactJS</h3>
						</div>
					</div>
					{/* - */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='600'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faBootstrap}
									size='2x'
								/>
							</div>
							<h3>Bootstrap</h3>
						</div>
					</div>
				</div>
				{/* - */}
				<div className='row'>
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='700'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
							</div>
							<h3>GitHub</h3>
						</div>
					</div>
					{/* - */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='800'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faNpm} size='2x' />
							</div>
							<h3>NPM</h3>
						</div>
					</div>
					{/* - */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='900'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faCode} size='2x' />
							</div>
							<h3>VSCode</h3>
						</div>
					</div>
					{/* - */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='1000'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faLaptop} size='2x' />
							</div>
							<h3>RWD</h3>
						</div>
					</div>
					{/* --- ASP.NET --- */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='1100'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faNetworkWired}
									size='2x'
								/>
							</div>
							<h3>BEM</h3>
						</div>
					</div>
					{/* --- MySQL --- */}
					<div
						className='col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6'
						data-aos='flip-left'
						data-aos-delay='1200'
					>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon className='icon' icon={faGulp} size='2x' />
							</div>

							<h3>GULP</h3>
						</div>
					</div>
					{/* - */}
				</div>
			</div>
		</div>
	);
};

export default Technologies;
