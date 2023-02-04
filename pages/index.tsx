import type { NextPage } from 'next'
import Content from '../components/Content'
import { DoorKnboCard } from '../components/DoorKnob/DoorKnboCard'
import CommonHead from '../components/Head'
import { Header } from '../components/Header'
import { ThumbCutterCard } from '../components/ThumbCutter/ThumbCutterCard'

const Home: NextPage = () => {
	return (
		<>
			<CommonHead />
			<Header />
			<Content>
				<ThumbCutterCard />
				<DoorKnboCard />
			</Content>
		</>
	)
}

export default Home
