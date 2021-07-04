import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export default function Home() {
	const { logout, user } = useContext(AuthContext);

	const handleLogin = () => {
		logout();
	}
	return (
		<div>
			<h2>Dashboard - Olá, {user && user.name}</h2>
			<div>
				<button className="btn" onClick={handleLogin}>Sair</button>
			</div>
		</div>
	)
}
