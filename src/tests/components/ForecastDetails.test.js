import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("it rents ok", () => {
  const validProps = {
    date: 1525392000000,
    temperature: {
      max: 11,
      min: 4,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
