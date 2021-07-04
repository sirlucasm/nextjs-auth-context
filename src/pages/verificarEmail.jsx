import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export default function Home() {
	const { user } = useContext(AuthContext);

	return (
		<div>
			<h2>Verificar email</h2>
		</div>
	)
}

export function getServerSideProps(ctx) {
	const { token } = ctx.req.cookies;
	if (token) {
		return {
			redirect: {
				destination: 'dashboard',
				permanent: false
			}
		}
	}
	return {
		props: {}
	}
}