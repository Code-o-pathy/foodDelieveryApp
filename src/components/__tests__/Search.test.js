import { act } from "react";
import mock from "../mocks/mockRestList.json";
import { fireEvent, render, screen } from "@testing-library/react";
import BodyComponent from "../BodyComponent";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock);
    },
  });
});

// it("should perform search", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <BodyComponent />
//       </BrowserRouter>
//     )
//   );
//   const btn = screen.getByRole("button", { name: "Search" });
//   const searchInput = screen.getByTestId("searchInput");
//   //   console.log("before click")
//   //   const cards1=screen.getAllByTestId("resCardTests")
//   //   console.log(cards1)
//   //   console.log(btn)
//   fireEvent.change(searchInput, { target: { value: "Mc" } });
//   fireEvent.click(btn);
//   console.log("after click");
//   const cards = screen.getAllByTestId("resCardTests");
//   console.log(cards);
//   expect(cards.length).toBe(3)

//   expect(btn).toBeInTheDocument();
// });
//whenever u do state updates,using fetch u have to wrap your render in act function
//whenever there is fetch u have to make a global.fetch template.

it("should check top rated restaurants button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    )
  );
  // const resCards = screen.getAllByTestId("resCardTests");
  // console.log("top rated resCard count");
  // console.log(resCards.length);
  // const topRatedBtn=screen.getByRole("button",{name:"Top Rated Restaurants"})
  // fireEvent.click(topRatedBtn)
  // const resCardsLeft = screen.getAllByTestId("resCardTests");
  // console.log("top rated resCard count after");
  // console.log(resCardsLeft);


});
