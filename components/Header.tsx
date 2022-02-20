import * as React from 'react'
import { Title } from './Typography'

export const Header: React.FC = () => {
	return (
		<header className="h-40 pl-12 flex items-center w-full z-10 fixed title-shadow bg-black">
			<Title>Mayox</Title>
		</header>
	)
}
