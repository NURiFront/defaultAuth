import { api as index } from "..";
const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			PRODUCT.GetProductsResponse,
			PRODUCT.GetProductsRequest
		>({
			query: (token) => ({
				url: "/products",
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			providesTags: ["products"],
		}),
		getProduct: build.query<
			PRODUCT.GetProductResponse,
			PRODUCT.GetProductRequest
		>({
			query: ({ token, _id }) => ({
				url: `/products/${_id}`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			providesTags: ["products"],
		}),
		postProducts: build.mutation<
			PRODUCT.PostProductResponse,
			PRODUCT.PostProductRequest
		>({
			query: ({ token, newProduct }) => ({
				url: "/products",
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: newProduct,
			}),
			invalidatesTags: ["products"],
		}),
		deleteProducts: build.mutation<
			PRODUCT.DeleteProductResponse,
			PRODUCT.DeleteProductRequest
		>({
			query: ({ token, _id }) => ({
				url: `/products/${_id}`,
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			invalidatesTags: ["products"],
		}),
	}),
});
export const {
	useGetProductsQuery,
	useGetProductQuery,
	usePostProductsMutation,
	useDeleteProductsMutation,
} = api;
