import { Input, Slider } from "@mui/material";
import React, { Fragment } from "react";
import Button from "../../../Reusable/Button";
interface SliderPriceProps {
  onClick: () => void;
  value: number[];
  handleChangeSlider: (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => void;
  handleInputChange: (
    index: number
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  error: { min: boolean; max: boolean };
  resetFilter: () => void;
}
const SliderPrice = ({
  onClick,
  value,
  handleChangeSlider,
  handleInputChange,
  handleBlur,
  error,
  resetFilter,
}: SliderPriceProps) => {
  return (
    <Fragment>
      <div className="flex flex-col items-start justify-start">
        <div className="xl:w-full w-64">
          <Slider
            defaultValue={7}
            step={10}
            min={7}
            max={1000}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value}`}
            value={value}
            onChange={handleChangeSlider}
            getAriaLabel={() => "Minimum distance"}
            className="xl:w-full w-42"
          />
        </div>
        <div className="flex flex-row items-start justify-between space-x-4">
          <div className="flex flex-col">
            <Input
              type="number"
              value={value[0]}
              onChange={handleInputChange(0)}
              inputProps={{ min: 7, max: 2000, step: 10, type: "number" }}
              onBlur={handleBlur}
              error={error.min}
            />
          </div>
          <Input
            type="number"
            value={value[1]}
            onChange={handleInputChange(1)}
            inputProps={{ min: 7, max: 1000, step: 10, type: "number" }}
            onBlur={handleBlur}
            error={error.max}
          />
        </div>
        <div className="mt-6 flex flex-col space-y-5 xl:mb-0 xl:mt-12 mb-12 items-start justify-between">
          <Button onClick={onClick}>Filter</Button>
          <Button onClick={resetFilter}>Reset</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default SliderPrice;
