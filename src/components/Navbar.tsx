import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/page/1">Page 1</Link>
			<Link to="/page/new">New Page</Link>
		</div>
	);
}
