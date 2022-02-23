import Image from 'next/image'
import { FunctionComponent } from 'react'
import thumbCutter from '../../images/thumb-cutter.png'

const IntroImage: FunctionComponent = () => {
	return (
		<div className="p-5 flex items-center justify-center">
			<Image
				src={thumbCutter}
				alt="thumb-cutter"
				className="rounded-full p-5"
			/>
		</div>
	)
}

export default IntroImage
