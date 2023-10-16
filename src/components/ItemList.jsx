import { Item } from "../components/Item"

export const ItemList = ({ products }) => 
    products.map(car => <Item key={car.id} car={car} />)
