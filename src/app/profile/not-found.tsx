"use client";
import React from "react";
import { usePathname } from "next/navigation";

function NotFound() {
	// Wyciagamy url na który przeszedł użytkownik
	const pathname = usePathname();
	console.log(pathname); // np. /profile/10000/1000000/reviews

	// Tworzymy tablice z urla
	const productId = pathname.split("/");
	console.log(productId); // np. [ "", "profile", "10000", "1000000", "reviews" ]
	return (
		<div>
			<h2>Page Not Found</h2>
			<p>Could not find requested resource</p>
		</div>
	);
}

export default NotFound;
