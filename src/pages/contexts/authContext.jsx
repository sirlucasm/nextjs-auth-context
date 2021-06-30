import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = Cookies.get('token');

    const login = ({ email, password }) => {
        Cookies.set('token', email, { expires: 7 });
		router.push('dashboard');
    }

	const logout = () => {
        Cookies.remove('token');
		router.push('/');
    }
    
    useEffect(() => {
        if (!token) router.replace('/');
        else {
			fetch('http://localhost:3000/api/users')
				.then(res => res.json())
				.then(data => {
					if (!data.verified_email) router.push('verificarEmail');
					setIsAuthenticated(true);
					setUser(data);
				});
        }
    }, []);

    return (
        <AuthContext.Provider
            value = {{
                user,
                login,
                isAuthenticated,
				logout
            }}
        >
            {children}
            {/* <Image src='/assets/images/loading.gif' layout="responsive" height={1080} width={1600} /> */}
        </AuthContext.Provider>
    );
}

export default AuthProvider;