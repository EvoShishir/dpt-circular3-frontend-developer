import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";

const SearchFlight = () => {
  const handleClick = () => {
    window.location.href = "/flights";
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="border-solid border-2 rounded-lg border-orange-600 border-opacity-40 p-5">
        <h1 className="text-6xl font-bold w-[500px] m-auto">
          Life is a Journey. Plan your{" "}
          <span className="text-orange-600">Trip!</span>
        </h1>
        <br />
        <div>
          <SearchInput />
        </div>
        <button
          onClick={handleClick}
          className="bg-orange-600 text-white font-bold px-6 py-3 rounded-md my-2 w-full"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchFlight;
