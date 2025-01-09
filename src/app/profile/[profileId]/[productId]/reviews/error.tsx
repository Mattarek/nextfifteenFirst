"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
	error,
	reset
}: Readonly<{
	error: Error;
	reset: () => void;
}>) {
	const router = useRouter();

	const reload = () => {
		startTransition(() => {
			router.refresh(); // odświezanie strony
			reset();
		});
	};

	return (
		<div>
			<p>{error.message}</p>
			<button onClick={() => reload()}>Try again</button>
		</div>
	);
}
