import { FunctionComponent } from 'react'

const lineThroughClassNames = 'line-through decoration-grey decoration-4';

export type TypoGraphyCommon = {
	className?: string
}

export const Title: FunctionComponent<TypoGraphyCommon> = ({
	children,
	className = '',
}) => (
	<h1
		className={`text-7xl font-black tracking-widest antialiased ${className}`}
	>
		{children}
	</h1>
)

export const SubTitle: FunctionComponent<TypoGraphyCommon> = ({
	children,
	className = '',
}) => (
	<h2
		className={`text-5xl font-medium tracking-wider antialiased ${className}`}
	>
		{children}
	</h2>
)

export const Text: FunctionComponent<TypoGraphyCommon> = ({
	children,
	className = '',
}) => (
	<p
		className={`text-base font-extralight tracking-normal antialiased ${className}`}
	>
		{children}
	</p>
)
