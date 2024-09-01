import React from "react";


export default function InputButton({ label, name, type, value, onChange, icon, ...props }) {
	return (
		<div className="relative flex items-center">
			<input
				className="w-full rounded-md p-3 pl-12 bg-gray-100 text-slate-800 border-none outline-0"
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				{...props}
				required
				placeholder={label}
			/>
			<div className="absolute left-4">{icon}</div>
		</div>
	);
}
