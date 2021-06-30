import { useContext } from 'react';
import { AuthContext } from './contexts/authContext';

export default function Home() {
	const { login } = useContext(AuthContext);

	const handleLogin = () => {
		login({
			email: 'lucasmatheus@gmail.com',
			password: '1234567890'
		});
	}

	return (
		<div>
			<h2>Inicio</h2>
			<div>
				<button className="btn" onClick={handleLogin}>Login</button>
			</div>
		</div>
	)
}
