import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";

describe("Key", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Key />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
