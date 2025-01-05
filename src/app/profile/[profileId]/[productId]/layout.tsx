import React from "react";

export default function ProductDetail({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<h2>Featured products</h2>
			{children}
		</>
	);
}
