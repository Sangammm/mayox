import Image from 'next/image'
import { FunctionComponent } from 'react'
import { useSpring, animated } from 'react-spring'
import thumbCutter from '../../images/thumb-cutter.png'

const IntroImage: FunctionComponent = () => {
	const styles = useSpring({
		delay: 500,
		from: { opacity: 0 },
		to: { opacity: 1 },
	})
	return (
		<animated.div style={styles} className="p-5 flex items-center justify-center">
			<Image
				src={thumbCutter}
				alt="thumb-cutter"
				className="rounded-full p-5"
			/>
		</animated.div>
	)
}

export default IntroImage
