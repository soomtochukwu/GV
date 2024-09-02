export default function LoginIcon({ type }) {
	switch (type) {
		case "email":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5 text-gray-400"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6l8.25 5.25L20.25 6"
					/>
				</svg>
			);
		case "password":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5 text-gray-400"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 15v1.5M9 15v1.5M15 15v1.5M12 12v.01M9 12v.01M15 12v.01M4.5 18V9.75C4.5 7.127 6.627 5 9.25 5h5.5C17.373 5 19.5 7.127 19.5 9.75V18"
					/>
				</svg>
			);
		default:
			return null;
	}
}
