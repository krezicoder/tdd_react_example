import React, { Component } from "react";
import { shallow } from "enzyme";
import App from "./App";
import Calculator from "./components/Calculator/Calculator";

describe("AppComponent", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Calculator Component", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
