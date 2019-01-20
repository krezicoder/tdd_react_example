import React, { Component } from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("AppComponent", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Calculator Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
