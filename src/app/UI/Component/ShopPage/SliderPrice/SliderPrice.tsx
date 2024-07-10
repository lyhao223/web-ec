import { Input, Slider } from "@mui/material";
import React, { Fragment, useState } from "react";
import Button from "../../../Reusable/Button";
const SliderPrice = () => {
  const [value, setValue] = useState(7);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };
  return (
    <Fragment>
      <div className="flex flex-col items-start justify-start">
        <Slider
          defaultValue={7}
          step={10}
          min={7}
          max={2000}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `$${value}`}
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
        />
        <Input
          type="number"
          value={typeof value === "number" ? value : 0}
          onChange={handleInputChange}
          className="w-20 p-2"
          inputProps={{ min: 7, max: 2000, step: 100, type: "number" }}
        />
        <div className="mt-6">
          <Button>Filter</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default SliderPrice;
