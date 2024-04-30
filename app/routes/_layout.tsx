import { Outlet } from '@remix-run/react';
import classNames from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Twemoji from '~/components/Twemoji';
import { ClassNameOptionalAndChildren } from '~/interfaces/interfaces';

import Logo from '~/svg/Logo';
import XIcon from '~/svg/XIcon';

interface SideBarLinkProps extends ClassNameOptionalAndChildren {
	unicode: string;
}

function SideBar({ children, className = '' }: ClassNameOptionalAndChildren) {
	return <ul className={twMerge(className)}>{children}</ul>;
}

function SidebarLink({ className = '', children, unicode }: SideBarLinkProps) {
	// refactor to link when we have actual links
	return (
		<li className={twMerge('flex gap-2 py-2 px-4', className)}>
			<Twemoji unicode={unicode} />
			{children}
		</li>
	);
}

export default function Layout() {
	const [isOpen, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key == 'Escape') setOpen(false);
		return;
	};
	// Will use later when sidebar links become links
	// const handleNavigate = (href: string) => {
	// 	navigate(href);
	// 	setOpen(false);
	// }

	return (
		<div>
			{/* NavBar */}
			<nav className='flex bg-charade-950 py-3 px-2 md:p-5 text-radical-red-500'>
				<div className='sm:hidden'>
					<Hamburger
						size={20}
						rounded
						toggled={isOpen}
						toggle={setOpen}
						duration={0}
					/>
				</div>

				<h1 className='flex items-center gap-2 md:gap-5 font-bold text-2xl md:text-4xl cursor-pointer px-2'>
					<Logo className='size-12 md:size-20 fill-radical-red-500' />
					Roho
				</h1>
			</nav>

			{/* Hamburger Menu */}
			<section
				className={classNames('fixed inset-0', { hidden: !isOpen })}
			>
				<div className='relative z-10 flex flex-col w-9/12 h-full bg-slate-100'>
					<div className='flex items-center bg-charade-950 text-radical-red-500 font-bold text-lg p-3 px-5'>
						<h1 className='flex-auto'>Roho</h1>
						<button onClick={handleClose}>
							<XIcon />
						</button>
					</div>

					<SideBar className=''>
						<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
						<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
						<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
						<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
						<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
						<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
					</SideBar>
				</div>

				{/* Hamburger Overlay */}
				<div
					className='absolute inset-0 bg-slate-950 opacity-50'
					onClick={handleClose}
					onKeyDown={handleOnKeyDown}
					role='button'
					tabIndex={0}
				></div>
			</section>

			<section className='px-12 pt-4 hidden sm:flex'>
				{/* Sidebar */}
				<SideBar className=''>
					<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
					<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
					<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
					<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
					<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
					<SidebarLink unicode='1f4ca'>Dashboard</SidebarLink>
				</SideBar>
				<Outlet />
			</section>
		</div>
	);
}
