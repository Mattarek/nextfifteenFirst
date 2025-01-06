import { Metadata } from "next";

type Props = {
	params: Promise<{
		profileId: string;
	}>;
};

export const generateMetadata = async ({ params }: Props) => {
	const id = (await params).profileId;

	return {
		title: `Product ${id}`
	};
};

export default async function Page({ params }: Props) {
	const id = (await params).profileId;

	return <h1>Details about product {id}</h1>;
}
