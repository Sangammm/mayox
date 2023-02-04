import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import Button from './Button'
import { SubTitle, Text } from './Typography'
import { animated } from 'react-spring'
import { useTranslateAnimation } from '../hooks/animation/tranlate.hook'
type IntoProps = {
	subTitle: string
	textArray: string[]
}
const Intro: FunctionComponent<IntoProps> = ({ subTitle, textArray, children }) => {
	const router = useRouter()

	const slideAnimation = useTranslateAnimation({ x: '-150%', y: 0 })

	return (
		<animated.div
			style={slideAnimation}
			className="flex items-start justify-center p-5 flex-col"
		>
			<SubTitle className="mb-3">{subTitle}</SubTitle>
			{textArray.map((t) => (
				<Text key={t} className="pt-4">{t}</Text>
			))}
			{children}
		</animated.div>
	)
}

export default Intro
