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
	isAdmin: boolean;
};

export const pageSeo = ({ title, description, image, keywords, pathname, searchParams, isAdmin }: Props): Metadata => {
	const baseUrl = getBaseUrl();
	const url = `${baseUrl}${pathname}${searchParams ? '?' + searchParams.toString() : ''}`;
	const fullTitle = title ? (~title.indexOf(SITE_NAME) ? title : `${title} | ${SITE_NAME}`) : SITE_NAME;
	const fullImage = image ? `${baseUrl}/${image.startsWith('/') ? image.substring(1) : image}` : undefined;
	const descriptionToShow = description ?? 'Default fallback description';
	const robots = isAdmin
		? {
				index: false,
				follow: false,
				nocache: true,
				googleBot: {
					index: false,
					follow: false,
					noimageindex: true,
					'max-video-preview': -1,
					'max-snippet': -1,
				},
			}
		: {
				index: true,
				follow: true,
				nocache: false,
				googleBot: {
					index: true,
					follow: true,
					noimageindex: false,
					'max-video-preview': 0,
					'max-snippet': 300,
				},
			};

	return {
		title: fullTitle,
		description: descriptionToShow,
		icons: fullImage,
		keywords: keywords,
		openGraph: {
			url: url,
			title: fullTitle,
			description: descriptionToShow,
			images: fullImage,
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: fullTitle,
			description: descriptionToShow,
			images: fullImage,
		},
		robots,
	};
};
