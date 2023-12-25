import { fireEvent, render } from "@testing-library/react";
import Button from "../../src/components/atoms/button/Button";

describe("buttonComponent", () => {
  it("Should render button with text", () => {
    const { getByText } = render(<Button text="Click Me" />);
    const buttonText = getByText(/Click Me/i);
    expect(buttonText).toBeInTheDocument();
  });

  it("should call onClick handler when button is clicked", () => {
    const mockClickHandler = jest.fn();

    const { getByText } = render(
      <Button text="Click Me" onClick={mockClickHandler} />
    );

    const buttonText = getByText(/Click Me/i);
    fireEvent.click(buttonText);

    expect(mockClickHandler).toHaveBeenCalled();
  });
});
