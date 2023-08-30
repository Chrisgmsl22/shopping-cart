import axios from 'axios';

export interface ItemApi {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
    quantity?: number;
}


// Here we do the fetch api thing
export const fetchItems = async (): Promise<Array<ItemApi>> => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        return response.data as ItemApi[];
    } catch (err) {
        console.error('Error fetching items: ', err);
        return [];
    }
}

export const fetchItem = async (itemId: number): Promise<ItemApi> => {
    try {
        const response = await axios.get<ItemApi>(`https://fakestoreapi.com/products/${itemId}`);
        return response.data;
    } catch (err) {
        console.error('Error while fetching Item: ', err);
        return {} as ItemApi;

    }
}