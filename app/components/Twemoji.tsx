import { twMerge } from 'tailwind-merge';
import { ClassNameOptional } from '~/interfaces/interfaces';

interface TwemojiProps extends ClassNameOptional {
	unicode: string;
}

export default function Twemoji({ unicode, className = '' }: TwemojiProps) {
	const baseUrl = 'https://twemoji.maxcdn.com/v/latest/svg/';
	const ext = '.svg';

	return (
		<img
			className={twMerge('size-6', className)}
			src={baseUrl + unicode + ext}
			alt={`\\u${unicode}`}
		/>
	);
}
