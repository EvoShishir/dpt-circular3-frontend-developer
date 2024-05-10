import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const SearchFlight = () => {
  const handleClick = () => {
    window.location.href = "/flights";
  };

  const locations = [
    "DAC",
    "IST",
    "FCO",
    "DXB",
    "KWI",
    "AUH",
    "KUL",
    "DOH",
    "BCN",
    "ATH",
    "BAH",
    "FRA",
    "VCE",
  ];

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="border-solid border-2 rounded-lg border-orange-600 border-opacity-40 p-5">
        <h1 className="text-6xl font-bold w-[500px] m-auto">
          Life is a Journey. Plan your{" "}
          <span className="text-orange-600">Trip!</span>
        </h1>
        <br />
        <div>
          <div className="flex gap-2 items-center">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={locations}
              sx={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={locations}
              sx={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
            <div className="flex border-solid border-[1px] border-opacity-40 rounded border-black">
              <div className="border-e-2 border-opacity-40 border-black px-2">
                <h1 className="font-bold">Journey Date</h1>
                <input type="Date" />
              </div>
              <div className="border-s-2 border-opacity-40 border-black px-2">
                <h1 className="font-bold">Return Date</h1>
                <input type="Date" />
              </div>
            </div>
          </div>
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
