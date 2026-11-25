import { useState } from 'react';
import Preloader from '../components/Preloader';
import PageHelmet from '../components/PageHelmet';
import { cvMetaTags } from '../components/metaTagsBasic';

const FILE_ID = '12rOT1Pa4Z-Usau2Xkh-QTXweDTZJJTKvadrJKmRpCk0';
const EXPORT_URL = `https://docs.google.com/document/d/${FILE_ID}/export?format=pdf`;
const FILE_SRC = `https://drive.google.com/file/d/${FILE_ID}/preview?rm=minimal`;
const downloadPDF = '/api/cv';

const CVActions = ({ downloadFile }: { downloadFile: string }) => {
	const [isDownloading, setIsDownloading] = useState(false);

	// check proxy availability before download, fallback to direct link on error
	const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		if (isDownloading) return;

		setIsDownloading(true);

		try {
			const response = await fetch(downloadFile, { method: 'HEAD' });

			if (response.ok) {
				window.location.href = downloadFile;
			} else {
				window.open(EXPORT_URL, '_blank', 'noopener,noreferrer');
			}
		} catch {
			window.open(EXPORT_URL, '_blank', 'noopener,noreferrer');
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<nav className='resume__actions'>
			<a
				href={downloadFile}
				onClick={handleDownload}
				className={`resume__btn ${isDownloading ? 'is-loading' : ''}`}
				title='Download PDF'
				aria-busy={isDownloading}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 448 512'
					width='20'
					height='22'
					fill='currentColor'
				>
					<path d='M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
				</svg>
				{isDownloading ? 'Getting...' : 'Get CV'}
			</a>
		</nav>
	);
};

const CVPage = () => {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className={`resume ${loaded ? 'is-loaded' : ''}`}>
			<PageHelmet metaTags={cvMetaTags} />

			<CVActions downloadFile={downloadPDF} />

			{!loaded && <Preloader />}

			{/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
			<iframe
				src={FILE_SRC}
				width='100%'
				height='100%'
				className='resume__frame'
				onLoad={() => setLoaded(true)}
				// title='CV'
			/>
		</div>
	);
};

export default CVPage;
