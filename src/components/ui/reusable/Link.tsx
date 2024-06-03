'use client';

import NextLink, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const linkStyles = tv({
	variants: {
		variant: {
			primary: 'bg-black text-white py-2 px-4 rounded-lg',
			secondary: 'mt-10 bg-black text-white border py-2 px-4 rounded-lg',
			image: 'bg-red max-w-10 max-h-10',
			close: 'absolute top-4 right-4',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

type Props = LinkProps & VariantProps<typeof linkStyles>;

export const Link: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
	return (
		<NextLink {...props} className={linkStyles(props)}>
			{children}
		</NextLink>
	);
};
