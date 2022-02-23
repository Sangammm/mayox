import type { NextPage } from 'next'
import Card from '../components/Card'
import Content from '../components/Content'
import CommonHead from '../components/Head'
import { Header } from '../components/Header'

import Intro from '../components/ThumbCutter/Intro'
import IntroImage from '../components/ThumbCutter/IntroImage'

const Home: NextPage = () => {
	return (
		<>
			<CommonHead />
			<Header />
			<Content>
				<Card left={<Intro />} right={<IntroImage />} />
			</Content>
		</>
	)
}

export default Home
