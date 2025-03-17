import { useParams } from 'react-router-dom';

export default function Page1() {
	const { id } = useParams();
	return <h1>Page {id}</h1>;
}
