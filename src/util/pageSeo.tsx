import type { Metadata } from 'next';
import { SITE_NAME } from './constants';
import { getBaseUrl } from './helpers/getBaseUrl';

type Props = {
	title?: string;
	description?: string;
	image?: string;
	keywords?: string[];
	pathname?: string;
	searchParams?: string;
};

export const pageSeo = ({ title, description, image, keywords, pathname, searchParams }: Props): Metadata => {
	const url = `${getBaseUrl()}${pathname}${searchParams ? '?' + searchParams.toString() : ''}`;
	const fullTitle = title ? (~title.indexOf(SITE_NAME) ? title : `${title} | ${SITE_NAME}`) : SITE_NAME;
	const fullImage = image ? `${getBaseUrl()}/${image.startsWith('/') ? image.substring(1) : image}` : undefined;
	// const isAdministration = pathname.startsWith('/admin');
	const fallbackDescription =
		'Videa Library kde si můžete prohlédnout všechny videa, které uživatele nahráli, nebo se můžete registrovat a nahrát své';
	const descriptionToShow = description ?? fallbackDescription;

	// return (
	// 	<Head>
	// 		<title key="title">{fullTitle}</title>
	// 		<meta key="twitter:image" name="twitter:image" content={fullImage ?? `${getBaseUrl()}${facebookImg.src ?? twitterImg}`} />
	// 		<meta property="og:image" content={fullImage ?? `${getBaseUrl()}${twitterImg.src ?? twitterImg}`} />
	// 		<meta key="og:image" name="og:image" content={fullImage ?? `${getBaseUrl()}${twitterImg.src ?? twitterImg}`} />
	// 		<meta key="og:title" name="og:title" content={fullTitle} />
	// 		<meta key="twitter:title" name="twitter:title" content={fullTitle} />

	// 		<meta key="og:locale" name="og:locale" content="cs_CZ" />
	// 		<meta key="og:site_name" name="og:site_name" content={SITE_NAME} />
	// 		<meta key="og:type" name="og:type" content="website" />
	// 		{pathname && <meta key="og:url" name="og:url" content={`${getBaseUrl()}${pathname}`} />}

	// 		<meta key="description" name="description" content={descriptionToShow} />
	// 		<meta key="og:description" name="og:description" content={descriptionToShow} />
	// 		<meta key="twitter:description" name="twitter:description" content={descriptionToShow} />

	// 		<meta property="og:url" content={url} />

	// 		{keywords && <meta key="keywords" name="keywords" content={keywords.join(', ')} />}

	// 		<meta
	// 			key="robots"
	// 			name="robots"
	// 			content={!IS_DEVELOPMENT && !isAdministration && index ? 'index, follow' : 'noindex, nofollow'}
	// 		/>

	// 		{children}
	// 	</Head>
	// );

	// TODO opravit, doplnit všechny meta
	return {
		title: fullTitle,
		description: descriptionToShow,
		icons: fullImage,
		keywords: keywords,
		openGraph: {
			url: url,
			title: fullTitle,
			description: descriptionToShow,
		},
	};
};
