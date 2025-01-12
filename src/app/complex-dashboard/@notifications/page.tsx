import { Card } from "@/components/Card";
import Link from "next/link";

export default function Page() {
	return (
		<Card>
			<div>Notifications</div>
			<div>
				<Link href="/complex-dashboard/archived">Archived</Link>
			</div>
		</Card>
	);
}
