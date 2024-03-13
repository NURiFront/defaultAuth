import { useGetProductQuery } from "@/src/redux/api/product";
import { useParams } from "react-router-dom";

const ProductSection = () => {
	const { productId } = useParams();
	const token = localStorage.getItem("auth_token")!;

	const { data } = useGetProductQuery({ token, _id: productId! });

	return (
		<>
			<h1>{data?.productName}</h1>
			<img src={data?.photoUrl} alt={data?.productName} />
			<p>{data?.price}</p>
			<p>{data?.quantity}</p>
		</>
	);
};

export default ProductSection;