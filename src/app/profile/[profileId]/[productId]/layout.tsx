import React from "react";
import { counters } from "sharp";

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};
export default function ProductDetail({
	children
}: {
	children: React.ReactNode;
}) {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("Error loading reviews");
	}
	return (
		<>
			<h2>Featured products</h2>
			{children}
		</>
	);
}
