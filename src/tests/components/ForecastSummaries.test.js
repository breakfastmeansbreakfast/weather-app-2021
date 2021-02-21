import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1525392000000,
      description: "Stub description 1",
      icon: "800",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 1524382000000,
      description: "Stub description2",
      icon: "200",
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );

    expect(getAllByTestId("date-id")).toHaveLength(2);
    expect(getAllByTestId("temperature-id")).toHaveLength(2);
    expect(getAllByTestId("description-id")).toHaveLength(2);
    expect(getAllByTestId("icon-image-id")).toHaveLength(2);
  });
});
