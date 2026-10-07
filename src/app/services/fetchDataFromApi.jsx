import axios from "axios";

const FetchProductsPage = async () => {

    const response = await axios.get("https://dummyjson.com/products");

    return response.data.products;
};

export default FetchProductsPage;