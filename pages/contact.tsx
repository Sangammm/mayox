import * as React from 'react'
import Content from '../components/Content'
import { Header } from '../components/Header'
import { Title } from '../components/Typography'
import { Call, WhatsApp, Email, Directions } from '../components/svg'
import { ContactCard } from '../components/ContactCartd'

const cotactData = [
	{
		id: 1,
		icon: <Call />,
		text: '+918140440481',
		contactNote: `Let's Talk`,
		linkProps: {
			href: 'tel:+918140440481',
		},
	},
	{
		id: 2,
		icon: <WhatsApp />,
		text: '+918140440481',
		contactNote: `Let's Chat`,
		linkProps: {
			href: 'https://wa.me/+918140440481',
			target: '_blank',
			rel: 'noreferrer',
		},
	},
	{
		id: 3,
		icon: <Email />,
		text: 'fortunediesrajkot@gmail.com',
		contactNote: `Email Us`,
		linkProps: {
			href: 'mailto:fortunediesrajkot@gmail.com',
		},
	},
	{
		id: 4,
		icon: <Directions />,
		text: 'Fortune Dies and Moulds',
		contactNote: `Let's meet`,
		linkProps: {
			href: 'https://goo.gl/maps/FtpYfgrMZ3g2t3zM6',
			target: '_blank',
			rel: 'noreferrer',
		},
	},
]

const Contact = () => (
	<>
		<Header />
		<Content>
			<Title className="flex justify-center pt-16 text-5xl">Contact Us</Title>
			<div className="my-8 mx-10 grid grid-cols-1 gap-4 xl:grid-cols-2 md:mx-60 xl:mx-56">
				{cotactData.map((c) => (
					<ContactCard {...c} key={c.id} />
				))}
			</div>
		</Content>
	</>
)

export default Contact
