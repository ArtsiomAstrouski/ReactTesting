import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../Header/header'
import { ReactComponent as Danger } from '../../img/danger.svg'
import styles from './style.module.css'
import combineCss from '../../helpers/combine-css'

const useStyles = makeStyles(theme => ({
	style: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		background: '#242D46',
		border: '2px solid #000',
		boxShadow: 24,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	danger: {
		opacity: 0.1,
		animation: `$myEffect 3000ms linear infinite`,
	},
	'@keyframes myEffect': {
		'0%': {
			opacity: 0.1,
		},
		'50%': {
			opacity: 0.4,
		},
		'100%': {
			opacity: 0.8,
		},
	},
}))

export default function Material() {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Header />
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={classes.style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Danger
					</Typography>
					{/* <Danger className={classes.danger} /> */}
				</Box>
			</Modal>
		</div>
	)
}
