import Image from "next/image";

const Header = () => {
	return (
		<header className="bg-white shadow py-4">
			<div className="container mx-auto flex items-center justify-between px-4">
				<div className="flex items-center">
					<Image
						src="/logo-placeholder.png" // Replace with the actual logo path
						alt="Governator Logo"
						width={50}
						height={50}
						className="object-contain"
					/>
					<span className="ml-2 text-2xl font-bold text-[#0E0E2C]">
						Governator
					</span>
				</div>
				
			</div>
		</header>
	);
};

export default Header;
