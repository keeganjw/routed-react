import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Error404 from './pages/errors/Error404';
import Home from './pages/Home';
import PageCount from './pages/PageCount';
import PageNew from './pages/PageNew';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/page">
						<Route path=":id" element={<PageCount />} />
						<Route path="new" element={<PageNew />} />
					</Route>
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
