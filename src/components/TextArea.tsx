import { ChangeEvent, ReactNode } from "react";

interface TextAreaProps {
    label?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    onChange?: ((event: ChangeEvent<HTMLTextAreaElement>) => void) | undefined,
    readOnly?: boolean
}

const TextArea = (props: TextAreaProps = {
    label: 'Label', readOnly: false
}): ReactNode => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">
          {props.label}
        </span>
      </label>
      <textarea
        className={`textarea textarea-bordered border-2 h-24
        ${props.className}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readOnly}
      ></textarea>
    </div>
  );
};

export {TextArea}
