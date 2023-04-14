import React, { useState } from "react";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";
export const InputField = React.forwardRef((props, ref) => {

  const { field, fieldState } = useController(props);
  const [focusState, setFocusState] = useState(false);
  const { title, style,isHighLight=false, type, errors, defaultValue, customStyle, onChange, ellipses, ...others } = props;
  return (
    <div className="">
      <input
        {...field}
        {...others}
        type={type}
        className={focusState ? "focus" : ""}
        onFocus={() => setFocusState(true)}
        onBlur={() => setFocusState(false)}
      />
      {/* <label className={focusState ? "focus" : ""}>{title}</label> */}

    </div>
  );
});