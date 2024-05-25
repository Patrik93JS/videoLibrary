'use client';

import NextLink, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const linkStyles = tv({
	base: 'font-medium py-2 px-4 rounded-lg',
	variants: {
		variant: {
			primary: 'bg-black text-white',
			secondary: 'mt-10 bg-red text-white border',
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
