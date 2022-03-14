import * as React from 'react'
import { Call, Email, WhatsApp } from './svg'
import { Title } from './Typography'

export const Header: React.FC = () => {
	return (
		<header className="h-32  px-12 py-2 flex w-full z-10 fixed title-shadow bg-black items-center justify-between flex-col xl:flex-row">
			<Title>Mayox</Title>
			<div className="xl:pr-12 flex items-start flex-row xl:flex-col">
				<a
					href="tel:+919662377224"
					className="vector-link flex cursor-pointer xl:my-0.5 mx-2 xl:mx-0"
				>
					<Call />
					<span className="ml-1">Call</span>
				</a>

				<a
					href="mailto:pratikpatoliya@gmail.com"
					className="vector-link flex cursor-pointer	xl:my-0.5 mx-2 xl:mx-0"
				>
					<Email />
					<span className="ml-1">Email</span>
				</a>

				<a
					target="_blank"
					rel="noreferrer"
					href="https://wa.me/+918140440481"
					className="vector-link flex cursor-pointer xl:my-0.5 mx-2 xl:mx-0"
				>
					<WhatsApp />
					<span className="ml-1">Whatsapp</span>
				</a>
			</div>
		</header>
	)
}
