import React from "react";
import { notFound } from "next/navigation";

async function Page({
	params
}: {
	params: Promise<{ productId: string; profileId: string }>;
}) {
	const { productId, profileId } = await params;
	if (parseInt(productId) > 1000) {
		notFound();
	}
	
	return (
		<div>
			<div>productId: {productId}</div>
			<div>reviewId: {profileId}</div>
		</div>
	);
}

export default Page;
