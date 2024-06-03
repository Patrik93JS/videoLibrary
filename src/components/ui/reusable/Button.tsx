'use client';

import { type ButtonHTMLAttributes, type DetailedHTMLProps, FC } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { tv, VariantProps } from 'tailwind-variants';

const buttonStyles = tv({
	variants: {
		variant: {
			primary: 'w-56 flex justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
			close: 'absolute top-4 right-4',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

type Props = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> &
	VariantProps<typeof buttonStyles>;

export const Button: FC<Props> = ({ children, ...props }) => {
	return (
		<button {...props}>
			{props.variant === 'close' ? <IoCloseSharp className="text-gray-600 hover:text-gray-900 hover:bg-red-300 h-5 w-5" /> : children}
		</button>
	);
};
