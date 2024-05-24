import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

type Variant = 'primary' | 'secondary';

type Props = LinkProps & {
	className?: string;
	variant?: Variant;
};

export const StyledLink: FC<PropsWithChildren<Props>> = ({ children, className, variant = 'primary', ...props }) => {
	let variantClasses = '';

	switch (variant) {
		case 'primary':
			variantClasses = 'bg-black text-white py-2 px-4 rounded-lg';
			break;
		case 'secondary':
			variantClasses = 'mt-10 bg-black text-white py-2 px-4 rounded-lg border';
			break;
		default:
			variantClasses = 'bg-black text-white py-2 px-4 rounded-lg';
	}

	return (
		<Link {...props} className={`${variantClasses} ${className}`}>
			{children}
		</Link>
	);
};
