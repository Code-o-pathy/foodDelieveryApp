import { sum } from "../sum";
test("Sum function should be able to calculate the sum of two numbers",()=>{

    const result =sum(3,4);

    //this is called assertion
    expect(result).toBe(7)
})