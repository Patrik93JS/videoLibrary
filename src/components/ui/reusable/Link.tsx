'use client';

import NextLink, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
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
	const { variant, ...restProps } = props;

	return (
		<NextLink {...restProps} className={linkStyles(props)}>
			{variant === 'close' ? <IoCloseSharp className="text-gray-600 hover:text-gray-900 hover:bg-red-300 h-5 w-5" /> : children}
		</NextLink>
	);
};
