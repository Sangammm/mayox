import { FunctionComponent } from 'react'
import Button from '../Button'
import { SubTitle, Text } from '../Typography'

const Intro: FunctionComponent = () => {
	return (
		<div className="flex items-start justify-center p-5 flex-col">
			<SubTitle>Thumb Cutter</SubTitle>
			<Text className="pt-5">
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
			<Button>Order / Inquiry</Button>
		</div>
	)
}

export default Intro
