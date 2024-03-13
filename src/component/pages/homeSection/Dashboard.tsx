import {
	useGetProductsQuery,
	usePostProductsMutation,
	useDeleteProductsMutation,
} from "@/src/redux/api/product";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const [productName, setProductName] = useState<string>("");
	const [quantity, setQuantity] = useState<number | null>(null);
	const [price, setPrice] = useState<number | null>(null);
	const [photoUrl, setPhotoUrl] = useState<string>("");
	const token = localStorage.getItem("auth_token")!;
	const { data, isLoading } = useGetProductsQuery(
		localStorage.getItem("auth_token")!
	);

	const [productPostMutation] = usePostProductsMutation();
	const [productDeleteMutation] = useDeleteProductsMutation();

	const productPost = async () => {
		await productPostMutation({
			token,
			newProduct: {
				productName,
				quantity,
				price,
				photoUrl,
			},
		});
	};

	const deleteRequest = async (_id: string) => {
		await productDeleteMutation({ token, _id });
	};

	return (
		<>
			<input
				placeholder="productName"
				type="text"
				value={productName}
				onChange={(e) => setProductName(e.target.value)}
			/>
			<input
				placeholder="quantity"
				type="number"
				value={"" + quantity}
				onChange={(e) => setQuantity(+e.target.value)}
			/>
			<input
				placeholder="price"
				type="number"
				value={"" + price}
				onChange={(e) => setPrice(+e.target.value)}
			/>
			<input
				placeholder="photoUrl"
				type="text"
				value={photoUrl}
				onChange={(e) => setPhotoUrl(e.target.value)}
			/>
			<button onClick={productPost}>Submit</button>

			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					{data?.map((item) => (
						<Link key={item._id} to={`/product/${item._id}`}>
							<div>
								<h1>{item.productName}</h1>
								<h1>{item.quantity}</h1>
								<h1>{item.price}</h1>
								<img
									style={{ width: 200 }}
									src={item.photoUrl}
									alt={item.productName}
								/>
								<button onClick={() => deleteRequest(item._id)}>DELETE</button>
							</div>
						</Link>
					))}
				</>
			)}
		</>
	);
};

export default Dashboard;
