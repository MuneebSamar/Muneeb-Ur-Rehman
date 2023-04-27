import { useHistory } from "react-router-dom";
import { FormsJson } from "../../portfolio/json";
import { cloneDeep } from "lodash";
import { InputField } from "../../component/simpleInput";
import { DatePickerFeild } from "../../component/datePicker";
import { DoublicateFields } from "../../component/doublicate";
import { useForm, useFieldArray } from "react-hook-form";
import React from "react";
export default function Forms({ user, setUser }) {
  const { register, handleSubmit, errors, control } = useForm({
    // defaultValues: {
    //   featuredPortfolio: FormsJson["featuredPortfolio"],
    // },
  });
  const [doublicateValues, setDoublicateValues] = React.useState();
  const navigate = useHistory();
  const json = cloneDeep(FormsJson);

  const renderForm = (field) => {
    if (field.type == "text") {
      return (
        <div className="p-2">
        <InputField control={control} register={register} name={field.name} type={field.type} required={field.required} />
          </div>
      );
    } else if (field.type == "date") {
      return (
        <div className="p-2">
        <DatePickerFeild control={control} register={register} name={field.name} type={field.type} required={field.required} />
          </div>
      );
    } else if (field.type == "multi") {
        return (
            <div className="p-2">
                <DoublicateFields form={field} doublicateValues={doublicateValues} setDoublicateValues={setDoublicateValues} />
            </div>
        );
        }
  };

    const onSubmit = (data) => {
        console.log(data, "data", doublicateValues, "doublicateValues");
    };
    if ( user && user?.code == 0) {
  if (json) {
    return (
      <div className="w-auto m-8" >
        {json.map((form, index) => {
          return (
            <>
              {form?.title && <h3>{form?.title}</h3>}
              <div className="d-flex">
              {form?.form?.map((field, index) => {
                return (
                  <div className="form-group">
                    {field?.title && <label>{field?.title}</label>}
                    {renderForm(field)}
                  </div>
                );
              })}
              </div>
            </>
          );
        })}
        <button onClick={handleSubmit(onSubmit)} className="btn btn-sucess">Submit</button>
      </div>
    );
  }

  } else {
      navigate.push("/admin");
  }
}
