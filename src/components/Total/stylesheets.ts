import { Card } from "antd";
import { styled } from "styled-components";

export const ItemCard = styled(Card)`
    padding: 3.5rem;
    margin-top: 2.5rem;
`;

export const ItemContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    flex: 1;
`;

export const ItemImage = styled.img`
    width: 10rem;
`;