import Image from "next/image";
import Link from "next/link";
import "../../governator/src/app/globals.css"
const Header = () => {
	return (
		<header className="bg-white shadow py-4">
			<div className="container mx-auto flex items-center justify-between px-4">
				<Link href="/">
					<div className="flex items-center">
						<Image
							src="/logo.png" // Replace with the actual logo path
							alt="Governator Logo"
							width={50}
							height={50}
							className="object-contain"
						/>
						<span className="ml-2 text-2xl font-bold text-[#0E0E2C]">
							Governator
						</span>
					</div>
				</Link>
				<div className="nav space-x-8 ">
					<Link className="text-gray-500" href={"/login"}>Login</Link>
					<Link className="text-gray-500" href={"/signup"}>Sign Up</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
