import React from "react";
import { notFound, redirect } from "next/navigation";

async function Page({
	params
}: {
	params: Promise<{ productId: string; profileId: string }>;
}) {
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
