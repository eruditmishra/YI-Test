import React from "react";

const SelectedCard = ({ card }) => {
  const name = `${card.name.title === "Miss" ? "Ms" : card.name.title}. ${
    card.name.first
  } ${card.name.last}`;

  const timeZone = `${card.location.timezone.offset} - ${card.location.timezone.description}`;

  return (
    <div className="flex items-center justify-center bg-white w-[62.25rem] h-[18.1875rem] rounded-2xl gap-8">
      {/* left part - image */}
      <img
        src={card.picture.large}
        className="h-[28] w-[28] rounded-full "
        alt=""
      />
      {/* Right Part details */}
      <div>
        <h2 className="text-[#E16259] font-bold text-[4rem] underline">
          {name}
        </h2>
        <p className="text-[1.25rem] leading-[145%]">
          <span className="text-[#A259FF] font-bold">
            {card.location.street.number}
          </span>
          ,{" "}
          {`${card.location.street.name}, ${card.location.city}, ${card.location.state}`}
          , <span className="font-bold">{card.location.country}</span>,{" "}
          {card.location.postcode}
        </p>
        <p className="text-[1.25rem] leading-[145%]">{timeZone}</p>
        <p className="text-[1.25rem] leading-[145%] capitalize text-[#8A8A8A]">
          {card.gender}
        </p>
      </div>
    </div>
  );
};

export default SelectedCard;
