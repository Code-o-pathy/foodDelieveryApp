import HeadingComponent from "../HeadingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeadingComponent />
      </Provider>
    </BrowserRouter>
  );
  const button =screen.getByText(/Cart/)
  // const button =screen.getByText("Cart (0)")
  expect(button).toBeInTheDocument();
});

it("should render a login button and change to logout onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeadingComponent />
      </Provider>
    </BrowserRouter>
  );
  const button =screen.getByRole("button",{name:"Login"})
  fireEvent.click(button)
  const logooutButton =screen.getByRole("button",{name:"Logout"})
  // const button =screen.getByText("Cart (0)")
  expect(logooutButton).toBeInTheDocument();
});
// const button = screen.getByRole("li");


// const loginBtn = screen.getByRole("button");
// expect(loginBtn).toBeInTheDocmument();

//this will fail because our testing environment can only test react code, but our heading coponent has a redux store too, if u want to test this with store pass the store too
// it("should load a login button",()=>{
//     render(<HeadingComponent/>)
// })
