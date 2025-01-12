import React from "react";
import Link from "next/link";

function Page() {
	return (
		<div>
			<h1>Inner F2 page</h1>
			<div>
				<Link href="/f5">F5</Link>
			</div>
		</div>
	);
}

export default Page;
