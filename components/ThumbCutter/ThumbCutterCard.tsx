import React from 'react'
import Card from '../Card'
import Intro from '../Intro'
import IntroImage from '../IntroImage'
import thumbCutter from '../../images/thumb-cutter.png'
import Button from '../Button'
import { useRouter } from 'next/router'

export const ThumbCutterCard = () => {
	const router = useRouter()
	return (
		<Card
			left={
				<div>
					<Intro
						subTitle="Thumb Cutter"
						textArray={[
							`Wide applications in the garden industry, agriculture, kitchen`,
							`Professional in helping to pick vegetables, fruits, peppers, chillies, and more, labor-saving and is a good helper in harvest season.`,
							`The sharp arc blade is solid and durable, easy to clean, not easy to get rust.`,
						]}
					>
						<Button className="pl-5" onClick={() => router.push('/contact')}>
							Order / Inquiry
						</Button>
					</Intro>
				</div>
			}
			right={<IntroImage src={thumbCutter} />}
		/>
	)
}
