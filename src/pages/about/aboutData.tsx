import {
	BackpackIcon,
	BrainIcon,
	KeyboardIcon,
	RootsIcon,
	WriterIcon,
} from '../../assets/svg/icons';

const dotsData = [
	{
		classItem: 'brain',
		titleSub: 'Explorer,',
		title: 'Developer, Creator',
		img: <BrainIcon />,
	},
	{
		classItem: 'writer',
		titleSub: 'Storyteller,',
		title: 'Directing Freedom, Counterculture Architect',
		img: <WriterIcon />,
	},
	{
		classItem: 'keyboard',
		title:
			'Engineering the front of the internet. Architecting an alternative universe powered by the Counterculture OS of Reality.',
		// titleSub: 'Stack:',
		// title: 'React, TypeScript, Next.js, Node.js, HTML5, CSS3, SCSS, JavaScript',
		img: <KeyboardIcon />,
	},
	{
		classItem: 'backpack',
		titleSub: 'Wanderlust Adventurer,',
		title: 'Traveler, Hiker',
		img: <BackpackIcon />,
	},
	{
		classItem: 'roots',
		titleSub: 'Breaking Patterns,',
		title: 'Self-Rebuilding, Wild Growth',
		img: <RootsIcon />,
	},
];

export default dotsData;
