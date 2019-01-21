import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";

describe("Keypad", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Keypad numbers={[]} />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("renders the values of numbers", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(wrapper.find(".numbers-container").text()).toEqual("012");
  });

  it("renders the values of operators", () => {
    wrapper.setProps({ operators: ["+", "-", "*", "/"] });
    expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
  });
});
