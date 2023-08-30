import { Typography } from "antd";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar";
import { ItemApi, fetchItem } from "../../api/api";
import { useEffect, useState } from "react";

export const ItemInfo = () => {
  const { itemId } = useParams();
  const { Title } = Typography;

  const retrieveItem = async () => {
    try {
      const fetchedItem = await fetchItem(itemId ? +itemId : 1);
      return fetchedItem;
    } catch (err) {
      console.error("Error retrieving item: ", err);
      return null;
    }
  };

  const fetchAndDisplayItem = () => {
    // We use the promise right here
    retrieveItem().then((fetchedItem) => setItem(fetchedItem));
  };

  const [item, setItem] = useState<ItemApi | null>(null);
  useEffect(() => {
    // We listen for changes for only one time
    fetchAndDisplayItem();
  }, []);
  console.log("DEBUGGING: ", item);
  return (
    <>
      <Navbar />
      <Title>
        {item?.title} {itemId}
      </Title>
      <div>{item?.description}</div>
    </>
  );
};
