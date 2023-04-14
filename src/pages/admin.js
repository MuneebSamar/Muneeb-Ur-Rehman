import { InputField } from "../component/simpleInput"
import { useForm } from "react-hook-form"
export default function Admin() {
    const { register, handleSubmit, errors, control } = useForm()
    return (
        <div>
            <div className="w-full p-8">
                <InputField control={control} errors={errors} title='tests' name='test' />
            </div>
        </div>
    )
}