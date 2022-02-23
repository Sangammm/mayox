import { FunctionComponent } from 'react'

export type CardProps = {
	left: React.ReactNode
	right: React.ReactNode
}

const Card: FunctionComponent<CardProps> = ({ left:Left, right:Right }) => {
	return (
		<div className="grid grid-cols-2 px-40 py-20 bg-grey min-h-fit">
      {Left}
			{Right}
		</div>
	)
}

export default Card
