import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders city and country", () => {
    const validProps = {
      location: {
        city: "MockCity",
        country: "MockCountry",
      },
      forecasts: [
        {
          date: 1111111,
          description: "Mock description",
          humidity: 50,
          icon: "800",
          temperature: {
            min: 12,
            max: 22,
          },
          wind: {
            speed: 5,
            direction: "n",
          },
        },
      ],
    };

    render(
      <App forecasts={validProps.forecasts} location={validProps.location} />
    );
    const copy = screen.getByText(/MockCity, MockCountry/i);
    expect(copy).toBeInTheDocument();
  });
});
