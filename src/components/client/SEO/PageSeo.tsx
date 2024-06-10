import Head from 'next/head';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import facebookImg from '../../../assets/facebookImg.png';
import twitterImg from '../../../assets/twitterImg.png';
import { IS_DEVELOPMENT, SITE_NAME } from '../../../util/constants';
import { getBaseUrl } from '../../../util/helpers/getBaseUrl';

type Props = {
	title?: string;
	description?: string;
	image?: string;
	keywords?: string[];
	index?: boolean;
};

export const PageSeo: FC<PropsWithChildren<Props>> = ({ title, description, image, keywords, index, children }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const url = `${getBaseUrl()}${pathname}${searchParams ? '?' + searchParams.toString() : ''}`;
	const fullTitle = title ? (~title.indexOf(SITE_NAME) ? title : `${title} | ${SITE_NAME}`) : SITE_NAME;
	const fullImage = image ? `${getBaseUrl()}/${image.startsWith('/') ? image.substring(1) : image}` : undefined;
	const isAdministration = pathname.startsWith('/admin');
	const fallbackDescription =
		'Videa Library kde si můžete prohlédnout všechny videa, které uživatele nahráli, nebo se můžete registrovat a nahrát své';
	const descriptionToShow = description ?? fallbackDescription;

	return (
		<Head>
			<title key="title">{fullTitle}</title>
			<meta key="twitter:image" name="twitter:image" content={fullImage ?? `${getBaseUrl()}${facebookImg.src ?? twitterImg}`} />
			<meta property="og:image" content={fullImage ?? `${getBaseUrl()}${twitterImg.src ?? twitterImg}`} />
			<meta key="og:image" name="og:image" content={fullImage ?? `${getBaseUrl()}${twitterImg.src ?? twitterImg}`} />
			<meta key="og:title" name="og:title" content={fullTitle} />
			<meta key="twitter:title" name="twitter:title" content={fullTitle} />

			<meta key="og:locale" name="og:locale" content="cs_CZ" />
			<meta key="og:site_name" name="og:site_name" content={SITE_NAME} />
			<meta key="og:type" name="og:type" content="website" />
			{pathname && <meta key="og:url" name="og:url" content={`${getBaseUrl()}${pathname}`} />}

			<meta key="description" name="description" content={descriptionToShow} />
			<meta key="og:description" name="og:description" content={descriptionToShow} />
			<meta key="twitter:description" name="twitter:description" content={descriptionToShow} />

			<meta property="og:url" content={url} />

			{keywords && <meta key="keywords" name="keywords" content={keywords.join(', ')} />}

			<meta
				key="robots"
				name="robots"
				content={!IS_DEVELOPMENT && !isAdministration && index ? 'index, follow' : 'noindex, nofollow'}
			/>

			{children}
		</Head>
	);
};

PageSeo.displayName = 'PageSeo';
