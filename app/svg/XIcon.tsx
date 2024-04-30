import { twMerge } from 'tailwind-merge';
import { ClassNameOptional } from '~/interfaces/interfaces';

interface XIconProps extends ClassNameOptional {}

export default function XIcon({ className = '' }: XIconProps) {
	return (
		<svg
			className={twMerge('h-8 w-8', className)}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M6 18L18 6M6 6l12 12'
			/>
		</svg>
	);
}
