import { FunctionComponent } from 'react'

export type CardProps = {
	left: React.ReactNode
	right: React.ReactNode
}

const Card: FunctionComponent<CardProps> = ({ left:Left, right:Right }) => {
	return (
		<div className="grid grid-cols-1 px-1 py-20 bg-grey min-h-fit sm:grid-cols-2 sm:px-20 md:px-40">
      {Left}
			{Right}
		</div>
	)
}

export default Card
