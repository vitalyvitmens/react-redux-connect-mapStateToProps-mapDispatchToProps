import { connect /* useDispatch */ } from 'react-redux'
import { RESET_AGE, changeUserAsync, increaseAge } from '../../actions'
import styles from './control-panel.module.css'
export const ControlPanelContainer = ({
	/* dispatch, */ onAgeIncrease,
	onAgeReset,
	onUserChange,
}) => {
	// const dispatch = useDispatch()

	// const onAgeIncrease = () => {
	// 	dispatch(increaseAge(5))
	// }

	// const onAgeReset = () => {
	// 	dispatch(RESET_AGE)
	// }

	// const onUserChange = () => {
	// 	dispatch(changeUserAsync)
	// }

	return (
		<div className={styles.buttons}>
			<button className={styles.button} onClick={onAgeIncrease}>
				Увеличить возраст
			</button>
			<button className={styles.button} onClick={onAgeReset}>
				Сбросить возраст
			</button>
			<button className={styles.button} onClick={onUserChange}>
				Сменить пользователя
			</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	onAgeIncrease: () => dispatch(increaseAge(5)),
	onAgeReset: () => dispatch(RESET_AGE),
	onUserChange: () => dispatch(changeUserAsync),
})

export const ControlPanel = connect(
	null,
	mapDispatchToProps
)(ControlPanelContainer)
