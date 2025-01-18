import { fireEvent, render, screen } from "@testing-library/react";
import HeadingComponent from "../HeadingComponent"
import { BrowserRouter } from "react-router-dom";
import RestaurantCategory from "../RestaurantCategory";
import { act } from "react";
import mock_dataaa from "../mocks/mockForCategory.json";
import mock_data from "../mocks/mockRestList.json";
import BodyComponent from "../BodyComponent";
import MenuCard from "../MenuCard";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_dataaa);
    },
  });
});
it("should render the cart component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <HeadingComponent />
          <MenuCard />
          <Cart/>
        </BrowserRouter>
      </Provider>
    );
  });
  
  expect(screen.getByText("Cart (0)")).toBeInTheDocument()
  const recommmended = screen.getByText("Recommended(13)");
  fireEvent.click(recommmended);
  // expect(screen.getByText("Iced Caramel Latte")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  const addbtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addbtns[0]);
  fireEvent.click(addbtns[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument()
  expect(screen.getAllByText("Iced Caramel Latte").length).toBe(2)
  const clearCart=screen.getByText("Clear Cart")
  // fireEvent.click(clearCart)
  // expect(screen.getAllByText("Iced Caramel Latte").length).toBe(1)
  // expect(screen.getByText("Shop something to add it here")).toBeInTheDocument()
  expect(screen.getAllByTestId("foodItems").length).toBe(15);


  
  
});
