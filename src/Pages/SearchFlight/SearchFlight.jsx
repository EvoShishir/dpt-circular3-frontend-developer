import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";

const SearchFlight = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="border-solid border-2 rounded-lg border-orange-600 border-opacity-40 p-5">
        <h1 className="text-6xl font-bold max-w-[500px] m-auto">
          Life is a Journey. Plan your{" "}
          <span className="text-orange-600">Trip!</span>
        </h1>
        <br />
        <div>
          <SearchInput redirect={"/flights"} />
        </div>
      </div>
    </section>
  );
};

export default SearchFlight;
