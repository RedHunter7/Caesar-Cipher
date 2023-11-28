import { ChangeEvent, ReactNode } from "react";

interface RangeInputProps {
    label?: string,
    value?: number,
    min?: number,
    max?: number,
    onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined,
    displayValue?: number | string | undefined
}

const RangeInput = (props: RangeInputProps = {
    label: 'Label', value: 0,
    min: 0, max: 10, displayValue: undefined
}): ReactNode => {
  return (
    <div>
        <label className="label">
            <span className="label-text">Key</span>
        </label>
        <input type="range" className="range" 
        min={props.min} max={props.max} value={props.value} 
        onChange={props.onChange}  />
        {props.displayValue ? props.displayValue : props.value}
    </div>
  );
};

export {RangeInput}
