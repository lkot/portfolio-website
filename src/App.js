import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Technologies from './components/Technologies/Technologies';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Ventures from './components/Ventures/Ventures';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import NavbarX from './components/Navbar/NavbarX';
import CookieConsent from 'react-cookie-consent';

function App() {
	//Function setIs is updating a isOpen - it's a setter
	//By default it is set on false.
	const [isOpen, setIsOpen] = useState(false);

	//Function that updates/changes the State.
	//Basically it changes the State from false to true and the opposite way.
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Particles
				className='particles-canvas'
				params={{
					particles: {
						number: {
							value: 70,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						// The 'shape' object will basically shape the particles.
						shape: {
							type: 'circle',
							stroke: {
								width: 5,
								color: '#B4E6FB',
							},
						},
					},
				}}
			/>
			<NavbarX />
			<Header />
			<AboutMe />
			<Portfolio />
			<Technologies />
			<Experience />
			<Ventures />
			<Contacts />
			<Footer />
			<CookieConsent
				style={{
					background: 'black',
					width: '50%',
					borderRadius: '8px',
					transform: 'translate(50%)',
					marginBottom: '16px',
					fontSize: '12px',
					opacity: '0.9',
				}}
				buttonStyle={{
					color: '#000',
					backgroundColor: '#1fb8ff',
					borderRadius: '8px',
				}}
			>
				This website uses cookies.
			</CookieConsent>
		</>
	);
}

export default App;
