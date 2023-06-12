import React, { useEffect } from "react";
import Navbar from "../Components/HomePage/Navbar";
import SelectedCard from "../Components/HomePage/SelectedCard";
import Card from "../Components/HomePage/Card";
import CardData from "../Hooks/CardData";

const Homepage = () => {
  const { data, fetchData, selectedCard, setSelectedCard } = CardData();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col ">
      {/* Navigation Bar */}
      <Navbar />
      <section className="flex items-center flex-col mt-16 ">
        {/* Selected Card */}
        <section>
          {data.length > 0 && <SelectedCard card={selectedCard} />}
        </section>

        {/*Multiple Cards Container */}
        <section className="flex  flex-wrap justify-center items-center lg:mx-20 gap-6 lg:my-20">
          {data.map((data, index) => (
            <Card
              gender={data.gender}
              nat={data.nat}
              title={data.name.title}
              firstName={data.name.first}
              lastName={data.name.last}
              email={data.email}
              index={index}
              key={index}
              cardData={data}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Homepage;
