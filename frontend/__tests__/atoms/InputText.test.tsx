import { fireEvent, render, screen } from "@testing-library/react";
import InputText from "../../src/components/atoms/inputText/InputText";

describe("InputText component", () => {
  it("calls onChange handler when input value changes", () => {
    const onChangeMock = jest.fn();
    render(<InputText onChange={onChangeMock} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("test");
  });

  it("calls onBlur handler when input loses focus", () => {
    const onBlurMock = jest.fn();
    render(<InputText onBlur={onBlurMock} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.blur(inputElement);

    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it("calls onFocus handler when input gains focus", () => {
    const onFocusMock = jest.fn();
    render(<InputText onFocus={onFocusMock} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.focus(inputElement);

    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });
});
