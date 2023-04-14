import React, { useState } from "react";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";

export const InputField = React.forwardRef((props, ref) => {

  const { field, fieldState } = useController(props);
  const [focusState, setFocusState] = useState(false);
  const { title, style,isHighLight=false, type, errors, defaultValue, customStyle, onChange, ellipses, ...others } = props;
  let err = _.get(errors, props.name)
  return (

    <div className="w-full">
      <div className={`${customStyle ? customStyle : 'h-[35px]'}  relative w-full border border-gray ${style ? 'bg-white' : ''} bg-white focus-within:bg-white outlineStyle rounded ${props?.rules && err ? "focus-within:border-red-600 border-red-600" : "focus-within:border-teal-c-900"}`}>
        <Controller
          name={props?.name}
          control={props?.control}
          rules={props?.rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <input
              {...props}
              {...field}
              onBlurCapture={() => setFocusState(false)}
              onFocus={() => setFocusState(true)}
              onChange={e => {
                field.onChange(e.target.value);
                if (props.onChange) {
                  props.onChange(e, props?.name);
                }
              }}
              min={type === "number" && !props.min ? 0 : props.min}
              disabled={props.isDisabled}
              placeholder={props.placeholder ? props.placeholder : ''}
              value={field.value}
              className={`block ${props.inputWidthCls ? props.inputWidthCls : 'w-full'} p-1 appearance-none focus:outline-none bg-transparent focus:ring-0 text-base font-light text-black-300 ${props.isDisabled && "bg-gray-50 cursor-not-allowed"}  ${isHighLight && " bg-highLight  "}  `} {...others}/>
          )}
        />
        <div
          className={`pointer-events-none absolute ml-2 left-0 duration-300 origin-0 mr-2 inline-block px-1 font-normal  ${props?.rules && err ? "text-red-600" : "text-gray-600"}  ${focusState || !field.value == "" || field.value == "0"
            ? "-top-2 duration-300 bg-[white] text-xs rounded-lg"
            : `top-2 duration-300 text-base xl:top-1 ${ellipses && 'w-[98%] text-ellipsis overflow-hidden whitespace-nowrap'}`
            } 
            ${isHighLight && " bg-highLight  "}  
            `}
        >
          {title} {props?.rules?.required?.value === true && <span className="text-red-500 mt-10">*</span>}
        </div>

      </div>
      {props.rules && err &&
      <p className=" text-xs text-red-600 h-3" id="email-error">
        {props.rules && err && (
          props.rules && err?.message
        )}
      </p>
      }
      {/*  */}

    </div>
  );
});