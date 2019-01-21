import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";

describe("Keypad", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Keypad numbers={[]} operators={[]} />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should render an instance of the Key component", () => {
    expect(wrapper.find("Key").length).toEqual(1);
  });

  it("should render an instance of the Key component for each index of numbers, operators, and the submit Key", () => {
    const numbers = ["0", "1", "2", "3"];
    const operators = ["+", "-"];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find("Key").length).toEqual(keyTotal);
  });
});
