import { useRouter } from 'next/router'
import * as React from 'react'
import { Call, Email, WhatsApp } from './svg'
import { Title } from './Typography'
import { useSpring, animated } from 'react-spring'
import { useTranslateAnimation } from '../hooks/animation/tranlate.hook'
export const Header: React.FC = () => {
	const router = useRouter()

	const slideAnimation = useTranslateAnimation({ x: 0, y: '-200%' })

	return (
		<animated.header
			style={slideAnimation}
			className="h-32  px-12 py-2 flex w-full z-10 fixed title-shadow bg-black items-center justify-between flex-col xl:flex-row"
		>
			<animated.span onClick={() => router.push('/')}>
				<Title className="cursor-pointer">Mayox</Title>
			</animated.span>
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
		</animated.header>
	)
}
