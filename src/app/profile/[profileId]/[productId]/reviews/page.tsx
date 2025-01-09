import React from "react";
import { redirect } from "next/navigation";

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};

async function Page({
	params
}: {
	params: Promise<{ productId: string; profileId: string }>;
}) {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("Error loading review");
	}
	const { productId, profileId } = await params;
	if (parseInt(productId) > 1000) {
		redirect("/products");
	}

	return (
		<div>
			<div>productId: {productId}</div>
			<div>reviewId: {profileId}</div>
		</div>
	);
}

export default Page;
