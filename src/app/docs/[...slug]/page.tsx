import React from "react";

export default async function Page({
	params
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await params;
	
	if (slug?.length >= 2) {
		return (
			<h1>
				Viewing docs for feature {slug[0]} and {slug[1]}
			</h1>
		);
	}

	if (slug?.length === 1) {
		return <h1>Viewing docs for feature {slug}</h1>;
	}

	console.log(slug.length);
	console.log(slug);
	return <div>Page {slug.length}</div>;
}
