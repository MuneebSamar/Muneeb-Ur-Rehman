import React, { useEffect } from 'react';
import { useForm, useFieldArray, useFormState } from 'react-hook-form';
import { InputField } from './simpleInput.js';
import { DatePickerFeild } from './datePicker.js';
import { cloneDeep } from 'lodash';
export function DoublicateFields({ form, doublicateValues, setDoublicateValues }) {
    const defaultsDeep = cloneDeep(form?.default);
    const { register, control, getValues } = useForm({
        defaultValues: {
            [form?.name]: [defaultsDeep],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: form?.name,
    });

    const value = getValues();

    const onSave = () => {
        Object.keys(value).map((key) => {
            if (key == form?.name) {
                setDoublicateValues({...doublicateValues, [key]: value[key]});
            }
        });
    };

    return (
        <div>
            {fields.map((item, index) => {
                return (
                    <div className='d-flex align-items-center' key={item.id}>
                        {form?.row?.map((field) => {
                            if (field.type == 'text') {
                                return (
                                    <div className="pr-3 py-2">
                                        {field?.title && <label>{field?.title}</label>}
                                        <InputField
                                            control={control}
                                            register={register}
                                            name={`${form?.name}[${index}].${field.name}`}
                                            type={field.type}
                                            required={field.required}
                                        />
                                    </div>
                                );
                            } else if (field.type == 'date') {
                                return (
                                    <div className="pr-3 py-2">
                                        {field?.title && <label>{field?.title}</label>}
                                        <DatePickerFeild
                                            control={control}
                                            register={register}
                                            name={`${form?.name}[${index}].${field.name}`}
                                            type={field.type}
                                            required={field.required}
                                        />
                                    </div>
                                );
                            }
                        })}
                        <button
                            type="button"
                            className="bg-danger px-2 rounded-circle mt-4 "
                            onClick={() => remove(index)}
                        >
                            x
                        </button>
                    </div>
                );
            }
            )}
            <button

                type="button"
                className="btn btn-primary"
                onClick={() => append({
                    [form?.name]: defaultsDeep,
                })}
            >
                Add
            </button>
            <button

                type="button"
                className="btn btn-primary"
                onClick={() => {
                    onSave();
                }
                }
            >
                Save
            </button>
        </div>
    );
}