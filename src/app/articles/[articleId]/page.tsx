import Link from "next/link";

export default async function Page({
	params,
	searchParams
}: {
	params: Promise<{ articleId: string }>;
	searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
	const { articleId } = await params;
	const { lang = "en" } = await searchParams;

	return (
		<div>
			<h1>News article {articleId}</h1>
			<p>Reading in {lang}</p>

			<div>
				<Link href={`/articles/${articleId}?lang=en`}>English</Link>
				<br />
				<Link href={`/articles/${articleId}?lang=fr`}>French</Link>
				<br />
				<Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
			</div>
		</div>
	);
}
