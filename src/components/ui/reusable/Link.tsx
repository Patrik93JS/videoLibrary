'use client';

import NextLink, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

type Variant = 'primary' | 'secondary';

type Props = LinkProps & {
	className?: string;
	variant?: Variant;
};

const linkStyles = tv({
	base: 'font-medium py-2 px-4 rounded-lg',
	variants: {
		variant: {
			primary: 'bg-black text-white',
			secondary: 'mt-10 bg-black text-white border',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

export const Link: FC<PropsWithChildren<Props>> = ({ children, className, variant, ...props }) => {
	return (
		<NextLink {...props} className={linkStyles({ variant, className })}>
			{children}
		</NextLink>
	);
};
