import { Input, Slider } from "@mui/material";
import React, { Fragment, use, useState } from "react";
import Button from "../../../Reusable/Button";
import { AppDispatch } from "@/app/services/redux/store";
import { useDispatch } from "react-redux";
const SliderPrice = () => {
  const [value, setValue] = useState([0, 2000]);
  const [error, setError] = useState({ min: false, max: false });
  const dispatch = useDispatch<AppDispatch>();
  let minDistance = 10;
  const handleChangeSlider = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      if (newValue < 0 || newValue > 2000) {
        setError((prevError) => ({
          ...prevError,
          [index === 0 ? "min" : "max"]: true,
        }));
        return;
      } else {
        setError((prevError) => ({
          ...prevError,
          [index === 0 ? "min" : "max"]: false,
        }));
      }
      if (index === 0) {
        setValue([newValue, value[1]]);
      } else {
        setValue([value[0], newValue]);
      }
    };

  const handleBlur = () => {
    if (value[1] - value[0] < minDistance) {
      if (value[0] > value[1] - minDistance) {
        setValue([value[1] - minDistance, value[1]]);
      } else {
        setValue([value[0], value[0] + minDistance]);
      }
    }
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
          value={value}
          onChange={handleChangeSlider}
          getAriaLabel={() => "Minimum distance"}
        />
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
            inputProps={{ min: 7, max: 2000, step: 10, type: "number" }}
            onBlur={handleBlur}
            error={error.max}
          />
        </div>
        <div className="mt-6">
          <Button>Filter</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default SliderPrice;
