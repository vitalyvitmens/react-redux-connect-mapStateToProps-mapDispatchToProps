import { User, ControlPanel } from './components'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<div>
				<User />
				<ControlPanel />
			</div>
		</div>
	)
}
