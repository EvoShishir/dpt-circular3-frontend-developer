import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchInput = ({ redirect }) => {
  const handleClick = () => {
    window.location.href = redirect;
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
    <section>
      <div>
        <div className="flex flex-wrap items-center justify-start gap-6 mb-3 justify-center">
          <div className="flex items-center gap-1">
            <input type="radio" id="oneWay" name="tripType" />
            <label htmlFor="oneWay">One Way</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="roundTrip" name="tripType" />
            <label htmlFor="roundTrip">Round Trip</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="multiCity" name="tripType" />
            <label htmlFor="multiCity">Multi City</label>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center justify-center">
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
    </section>
  );
};

export default SearchInput;
