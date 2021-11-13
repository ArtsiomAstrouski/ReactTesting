const combineCss = (...classNames) =>
	classNames.filter(name => name?.length > 0).join(' ')

export default combineCss
