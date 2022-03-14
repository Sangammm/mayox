import { Text } from './Typography'

type ContactCardProps = {
	icon: React.ReactNode
	text: string
	linkProps: React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>
	contactNote?: string
}

export const ContactCard = ({
	icon,
	text,
	linkProps,
	contactNote,
}: ContactCardProps) => (
	<div className="flex items-center justify-center">
		<a
			{...linkProps}
			className="bg-grey min-w-full min-h-full flex flex-col button-border border-2 rounded-sm shadow m-2"
		>
			<span className="flex justify-center items-center py-10">{icon}</span>
			{contactNote && (
				<span className="text-center text-base">{contactNote}</span>
			)}
			<Text className="pb-5 text-center text-2xl">{text}</Text>
		</a>
	</div>
)
