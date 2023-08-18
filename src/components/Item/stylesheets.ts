import { Button, Card } from "antd";
import { styled } from "styled-components";

export const CustomCard = styled(Card)`
    width: 300px;
    margin: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    .image {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    h3{
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        /* white-space: nowrap; */
        /* overflow: ; */
        text-overflow: ellipsis;
    }

    .description {
        /* max-kjmn  : 100px; */
        color: #777;
    }
`;

export const CustomButton = styled(Button)`
    background: #C23373;
`;