import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import Button from '../Button'
import { SubTitle, Text } from '../Typography'
import { animated } from 'react-spring'
import { useTranslateAnimation } from '../../hooks/animation/tranlate.hook'
const Intro: FunctionComponent = () => {
	const router = useRouter()

	const slideAnimation = useTranslateAnimation({ x: '-150%', y: 0 })

	return (
		<animated.div
			style={slideAnimation}
			className="flex items-start justify-center p-5 flex-col"
		>
			<SubTitle className='mb-3'>Thumb Cutter</SubTitle>
			<Text className="pt-2">
				Wide applications in the garden industry, agriculture, kitchen
			</Text>
			<Text className="pt-2">
				Professional in helping to pick vegetables, fruits, peppers, chillies,
				and more, labor-saving and is a good helper in harvest season.
			</Text>
			<Text className="pt-2">
				The sharp arc blade is solid and durable, easy to clean, not easy to get
				rust.
			</Text>
			<Button onClick={() => router.push('/contact')}>Order / Inquiry</Button>
		</animated.div>
	)
}

export default Intro
