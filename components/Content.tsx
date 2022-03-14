import { FunctionComponent } from 'react'

interface ContentProps {}

const Content: FunctionComponent<ContentProps> = ({ children }) => {
	return <div className="pt-32">{children}</div>
}

export default Content