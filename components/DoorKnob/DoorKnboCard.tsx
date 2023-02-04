import Card from '../Card'
import Intro from '../Intro'
import IntroImage from '../IntroImage'
import thumbCutter from '../../images/doorknob.png'
import Button from '../Button'
import { downloadPdf } from '../../common/common'

export const DoorKnboCard = () => {
	return (
		<Card
			right={
				<Intro
					subTitle="Knob"
					textArray={[
						`Handles and knobs are often overlooked. The right knobs and pulls can make the simplest cabinet fronts look amazing. Knobs with distinctive designs draw the eye and are an important finishing touch for cabinetry. Choose high-quality knobs and pulls that will last longer and look good after years of use.`,
						`ABVIN Solid Brass Round Knobs for Cabinet Kitchen Drawer Pulls knob ( 30 mm ) - Satin Brass - 1 Pcs`,
					]}
				>
					<Button onClick={() => downloadPdf('cabinet_knob.pdf', 'Mayox Cabinate Knob')}>
						Download Catalogue
					</Button>
				</Intro>
			}
			left={<IntroImage src={thumbCutter} />}
		/>
	)
}
