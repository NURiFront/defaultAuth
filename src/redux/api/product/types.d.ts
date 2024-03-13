/* eslint-disable */

namespace PRODUCT {
	type GetProductsResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type GetProductsRequest = string;

	type GetProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type GetProductRequest = {
		token: string;
		_id: string;
	};

	type PostProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type PostProductRequest = {
		token: string;
		newProduct: {
			productName: string;
			quantity: number | null;
			price: number | null;
			photoUrl: string;
		};
	};

	type DeleteProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type DeleteProductRequest = {
		token: string;
		_id: string;
	};
}
