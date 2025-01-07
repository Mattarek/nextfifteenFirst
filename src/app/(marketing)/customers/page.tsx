import React from "react";
import Link from "next/link";

function Page() {
	return (
		<div>
			<h1>Welcome home!</h1>
			<h2>
				<Link href="/customers/blog">Blog</Link>
			</h2>
			<h2>
				<Link href="/customers/products">Products</Link>
			</h2>
			<h2>
				<Link href="/customers/products3" replace>
					Products
				</Link>
			</h2>
		</div>
	);
}

export default Page;
