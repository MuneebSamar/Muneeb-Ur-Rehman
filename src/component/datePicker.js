import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController, Controller } from "react-hook-form";

export const DatePickerFeild = React.forwardRef((props, ref) => {
  const [focusState, setFocusState] = useState(false);
  const {
    title,
    style,
    type,
    errors,
    defaultValue,
    isDisabled,
    dateTime = true,
    customStyles,
    onChange,
    maxDate,
    isHighLight=false,
    ellipses=false,
    ...others
  } = props;
  const { field, fieldState } = useController(props);
  let err = _.get(errors, props.name);
  // const inputRef = useRef(null);
  // useEffect(() => {
  //     inputRef.current.setOpen(false)
  // }, [])
  return (
    <div className="datePicker">
        <DatePicker
            {...field}
            {...others}
            selected={field.value}
            onChange={(date) => {
                field.onChange(date);
                onChange && onChange(date);
            }}
            dateFormat={dateTime ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy"}
            showTimeSelect={dateTime}
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            maxDate={maxDate}
            customInput={
                <input

                    className={focusState ? "focus" : ""}
                    onFocus={() => setFocusState(true)}
                    onBlur={() => setFocusState(false)}
                />
            }
        />
        {/* <label className={focusState ? "focus" : ""}>{title}</label> */}
    </div>
  );
});
