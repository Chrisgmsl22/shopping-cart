import { ItemApi } from "../api/api"

export type Item = {
    item: ItemApi;
}

export type Items = {
    items: Array<ItemApi>;
}

export type NavItems = {
    items?: Items;
}