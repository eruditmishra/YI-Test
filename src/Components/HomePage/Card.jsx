import React from "react";
// import CardData from "../../Hooks/CardData";

const Card = (props) => {
  const index = props.index;
  const gender = props.gender;
  const nat = props.nat;
  const title = props.title;
  const firstName = props.firstName;
  const lastName = props.lastName;
  const email = props.email;
  const card = props.cardData;
  const selectedCard = props.selectedCard;

  //   const { setSelectedCard } = CardData();

  const handleCardSelect = (cardData) => {
    props.setSelectedCard(cardData);
  };

  return (
    <div>
      <div
        onClick={() => handleCardSelect(card)}
        key={index}
        className={` ${
          selectedCard === card ? " bg-[#A259FF] text-white" : "bg-white"
        }  flex flex-col items-start lg:w-[17.625rem] shadow-card gap-2 py-3 px-4 rounded-[4px]`}
      >
        {/* Contains gender and nation */}
        <div className="flex items-center justify-center gap-1 capitalize">
          <p
            className={`${
              selectedCard === card
                ? "text-white"
                : "text-[#00000099] opacity-90"
            }   text-sm`}
          >
            {gender}
          </p>
          <p className="text-sm leading-[150%]">.</p>
          <p
            className={`${
              selectedCard === card
                ? "text-white"
                : "text-[#00000099] opacity-90"
            }   text-sm`}
          >
            {nat}
          </p>
        </div>
        {/* Name */}
        <div className="flex gap-1 font-bold text-[1.375rem] leading-[135%] overflow-hidden flex-wrap">
          <p>{title === "Miss" ? "Ms" : title}.</p>
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        {/* Email */}
        <p
          className={`${
            selectedCard === card ? "text-white" : "text-[#E16259]"
          }  text-[0.9375rem]`}
        >
          {email}
        </p>
      </div>
    </div>
  );
};

export default Card;
