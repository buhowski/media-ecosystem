import bgFaberBooks from './images/faber-books.jpg';
import bgCarService from './images/sto-porshen-lviv-ukraine-car-service-interactive-business-website-poster.jpg';
import bgBentley from './images/bentley-skinner.jpg';
import bgStartup from '../../assets/startup/counterculture-ecosystem-universe-another-dimension-startup-vision-by-olexander-buhowski.jpg';

import taylors from './images/taylors-estateagents.jpg';
import wr from './images/west-riding.jpg';
import mb from './images/markbuchananproperty.jpg';
import hbv from './images/homesbyvictoria.jpg';
import h20 from './images/h2oluxembourg.jpg';

import { pathToVision } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: pathToVision,
		urlCode: 'https://github.com/buhowski/media-ecosystem',
		name: 'Media Ecosystem',
		year: '🧠',
		description:
			'Cross-industry startups. Modular SPA with animated routing. Multilingual Markdown rendering with dynamic table of contents. Interactive Canvas 2D brush-reveal effects. Cloudflare Functions. UI/UX design.',
		skills: ['React', 'TypeScript', 'Canvas API', 'SCSS', 'i18n', 'PWA', 'Cloudflare', 'UI/UX'],
		alt: 'Media Ecosystem startup homepage by Olexander Buhowski - Another Dimension Universe Vision, React TypeScript frontend developer portfolio, UI UX web design, PWA, SEO optimization, custom web development showcase',
	},

	{
		img: bgCarService,
		url: `https://sto-porshen.pages.dev`,
		urlCode: 'https://github.com/buhowski/car-service',
		name: 'Automotive Service',
		year: '2026',
		description:
			'Responsive landing page. JavaScript animations. Headless CMS integration. Accessibility-focused UI. SEO optimization. AI-assisted development.',
		skills: [
			'Astro',
			'TypeScript',
			'SCSS',
			'Telegram Bot API',
			'Accessibility',
			'SEO',
			'Pages CMS',
		],
		alt: 'Business website for an automotive car repair service in Lviv, Ukraine. Animated interactive web design using Astro, TypeScript, SCSS, Pages CMS for frontend developer portfolio project, custom web development showcase by Olexander Buhowski',
	},

	{
		img: wr,
		url: 'https://west-riding.co.uk/',
		name: 'West Riding',
		year: '2025',
		description:
			'Custom WordPress theme. Conversion-focused UI/UX. Responsive layouts and PHP development.',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Looking for trusted estate agents in Saddleworth? We are passionate about property and providing a tailored solution to selling your home.',
	},

	{
		img: taylors,
		url: 'https://taylors-estateagents.co.uk/',
		name: 'Taylors Estate Agents',
		year: '2024',
		description:
			'Custom WordPress theme. Conversion-focused UI/UX. Responsive layouts and PHP development.',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Taylors Estate Agents, specialising in residential sales, lettings in Stourbridge, Kingswinford, Halesowen, Sedgley, Brierley Hill, Bearwood West Midland.',
	},

	{
		img: hbv,
		url: 'https://homesbyvictoria.co.uk/',
		name: 'Homes By Victoria',
		year: '2024',
		description:
			'Custom WordPress theme. Conversion-focused UI/UX. Responsive layouts and PHP development.',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Homes By Victoria real estate e-commerce website homepage - custom WordPress web development, SCSS PHP UI UX design, frontend portfolio project by Olexander Buhowski',
	},

	{
		img: mb,
		url: 'https://markbuchananproperty.co.uk/',
		name: 'Mark Buchanan',
		year: '2024',
		description:
			'Custom WordPress theme. Conversion-focused UI/UX. Responsive layouts and PHP development.',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Mark Buchanan property e-commerce website - WordPress PHP custom web development, responsive UI UX design, real estate frontend portfolio project by Olexander Buhowski',
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk',
		name: 'Bentley & Skinner',
		year: '2021',
		description:
			'Custom WordPress e-commerce theme. Pixel-perfect responsive UI. Barba.js page transitions. GSAP ScrollTrigger animations.',
		skills: ['JavaScript', 'Barba.js', 'GSAP', 'SCSS', 'WordPress'],
		alt: 'Bentley and Skinner luxury jewelry e-commerce website - custom WordPress web design, GSAP Barba.js smooth page transitions, frontend developer portfolio showcase by Olexander Buhowski',
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		year: '2021',
		description:
			'Custom WordPress e-commerce theme. Pixel-perfect responsive UI. GSAP ScrollTrigger animations.',
		skills: ['JavaScript', 'GSAP', 'SCSS', 'WordPress'],
		alt: 'Faber Books publisher e-commerce website homepage - pixel perfect WordPress web development, GSAP animations, responsive UI UX design, frontend portfolio project by Olexander Buhowski',
	},

	{
		img: h20,
		url: 'https://www.h2oluxembourg.com/',
		name: 'H2O Luxembourg',
		year: '2019',
		description:
			'Refactored legacy codebase. Interactive water ripple effects. JavaScript animations.',
		skills: ['jQuery', 'WebGL', 'JavaScript', 'SCSS'],
		alt: 'H2O Luxembourg property e-commerce website - WordPress PHP custom web development, responsive UI UX design, real estate frontend portfolio project by Olexander Buhowski',
	},
];

export default projectsData;
