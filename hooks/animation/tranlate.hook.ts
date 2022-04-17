import { useMemo } from 'react'
import { useSpring, UseSpringProps } from 'react-spring'

type xy = { x: number | string; y: number | string }

type useTranslateAnimationType = (xy: xy, config?: UseSpringProps) => object

export const useTranslateAnimation: useTranslateAnimationType = (
	{ x, y },
	config = {}
) => {

  const from = useMemo(
		() => ({
			...(config.from || {}),
			transform: `translate(${x},${y})`,
		}),
		[config.from, x, y]
	)

	const to = useMemo(
		() => ({
			...(config.to || {}),
			transform: `translate(0,0)`,
		}),
		[config.to]
	)

	const styles = useSpring({ ...config, from, to })

	return styles
}
