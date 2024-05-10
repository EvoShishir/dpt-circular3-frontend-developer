import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchInput = () => {
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
  );
};

export default SearchInput;
