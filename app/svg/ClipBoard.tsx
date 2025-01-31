import { twMerge } from 'tailwind-merge';
import { ClassNameOptional } from '~/interfaces/interfaces';

interface ClipBoardProps extends ClassNameOptional {}

export default function ListSVG({ className = '' }: ClipBoardProps) {
	return (
		<svg
			fill='none'
			stroke='currentColor'
			className={twMerge('h-8 w-8', className)}
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
			/>
		</svg>
	);
}
