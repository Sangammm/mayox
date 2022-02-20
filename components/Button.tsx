import { ForwardedRef, forwardRef } from 'react'

type OtherButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

type ButtonProps = OtherButtonProps & {
	className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, ...otherProps }, ref) => {
		return (
			<button
				ref={ref}
				className={`bg-black border button-border px-5 py-2 rounded-lg mt-5 ${className}`}
				{...otherProps}
			>
				{children}
			</button>
		)
	}
)
Button.displayName = 'Button'

export default Button
