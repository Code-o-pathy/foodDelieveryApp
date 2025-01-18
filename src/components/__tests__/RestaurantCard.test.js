import { render, screen } from "@testing-library/react";
import  RestaurantCards, {withRatedLabel } from "../RestaurantCards";
import restaurant from "../mocks/restaurantMock.json";
import "@testing-library/jest-dom";

it("should render cards with props data", () => {
  render(<RestaurantCards resData={restaurant} />);
  const nae = screen.getByText("McDonald's");
  expect(nae).toBeInTheDocument();
});
it("should render promoted cards with props data", () => {
  const RestaurantRated = withRatedLabel(RestaurantCards);
  render(<RestaurantRated resData={restaurant} />);
  const nae = screen.getByText("Highly Rated");
  expect(nae).toBeInTheDocument();
});
