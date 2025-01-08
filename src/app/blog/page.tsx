import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "blog"
	}
};

export default async function Page() {
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("intentional delay");
		}, 2000);
	});
	return <div>firstPage</div>;
}
