import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";

describe("Key", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Key keyValue="" keyType="" />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the value of keyValue", () => {
    wrapper.setProps({ keyValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });

  it("should render the keyType css class to Key div", () => {
    wrapper.setProps({ keyType: "test" });
    expect(wrapper.find(".test").length).toEqual(1);
  });
});
