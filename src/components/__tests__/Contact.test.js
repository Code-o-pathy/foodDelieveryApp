import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

//when u have multiple test cases u can use describe('',()=>{})
//it can also use 'it' instead of 'test' and generally the test message starts with should.
describe("", () => {
  // beforeAll(()=>{
  //   console.log("hello")
  // })
  // beforeEach(()=>{
  //   console.log("before each")
  // })
  // afterAll(()=>{
  //   console.log("after all")
  // })

  // afterEach(()=>{
  //   console.log("after each")
  // })
 
  test("should load heading in the contact page", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should load button in the contact page", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("should load text in the  contact page", () => {
    render(<ContactUs />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });
  test("should load input name  in the contact page", () => {
    render(<ContactUs />);
    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });
  test("should load multiple input box  in the contact page", () => {
    render(<ContactUs />);
    const inputNo = screen.getAllByRole("textbox");
    // console.log(inputNo);
    expect(inputNo.length).toBe(2);
  });
});

// test('should load heading in the contact page', () => {
//     render(<ContactUs/>)
//     const heading=screen.getByRole("heading")
//     expect(heading).toBeInTheDocument()
//  })
// test('should load button in the contact page', () => {
//     render(<ContactUs/>)
//     const button=screen.getByRole("button")
//     expect(button).toBeInTheDocument()
//  })
// test('should load text in the  contact page', () => {
//     render(<ContactUs/>)
//     const text=screen.getByText("Submit")
//     expect(text).toBeInTheDocument()
//  })
// test('should load input name  in the contact page', () => {
//     render(<ContactUs/>)
//     const inputName=screen.getByPlaceholderText("Name")
//     expect(inputName).toBeInTheDocument()
//  })
// test('should load multiple input box  in the contact page', () => {
//     render(<ContactUs/>)
//     const inputNo=screen.getAllByRole("textbox")
//     console.log(inputNo)
//     expect(inputNo.length).toBe(2)
//  })
