import { redirect } from '@remix-run/node';

// Add logic later to redirect to login page
export const loader = () => redirect('/dashboard');

export default function Index() {
	return <></>;
}
