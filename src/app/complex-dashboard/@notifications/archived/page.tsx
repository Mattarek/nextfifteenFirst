import { Card } from "@/components/Card";
import React from "react";
import Link from "next/link";

export default function Page() {
	return (
		<Card>
			<div>Archived notifications</div>
			<div>
				<Link href="/complex-dashboard">Default</Link>
			</div>
		</Card>
	);
}
