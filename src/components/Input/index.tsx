import "./styles.css";
import { Spin } from "../Spin";
import { InputHTMLAttributes } from "react";

// EXTENDS: é uma forma de estender a interface, herdando propriedades de um elemento HTML. No exemplo, estamos estendendo as propriedades do input HTML abaixo. Assim também poderemos passar todas as props na fcn!
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean; // ? significa que a propriedade é opcional.
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input">
      <input type="text" {...rest} />

      {isLoading && <Spin />}
    </div>
  );
}
