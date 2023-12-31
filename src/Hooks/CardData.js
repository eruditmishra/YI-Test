import { useState } from "react";

const url = `https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020`;

const CardData = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      const fetchedData = result.results;
      setData(fetchedData);
      setSelectedCard(fetchedData[0]);

      console.log(fetchedData);
      console.log(fetchedData[0]);
    } catch (error) {
      console.log("Data cannot be fetched");
      console.log(error);
    }
  };

  return { data, selectedCard, setSelectedCard, fetchData };
};

export default CardData;
