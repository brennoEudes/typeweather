import './styles.css';
import { Spin } from '../Spin';

interface Props {
  isLoading?: boolean; // ? significa que a propriedade é opcional.
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}