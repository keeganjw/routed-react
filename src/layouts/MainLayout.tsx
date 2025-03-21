import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
}
