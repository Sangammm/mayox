import Image, { ImageProps } from 'next/image'
import { FunctionComponent } from 'react'
import { useSpring, animated } from 'react-spring'

type IntroImageType = {
	src: ImageProps['src']
}
const IntroImage: FunctionComponent<IntroImageType> = ({ src }) => {
	const styles = useSpring({
		delay: 500,
		from: { opacity: 0 },
		to: { opacity: 1 },
	})
	return (
		<animated.div
			style={styles}
			className="p-5 flex items-center justify-center"
		>
			<Image src={src} alt="thumb-cutter" className="rounded-full p-5" />
		</animated.div>
	)
}

export default IntroImage
