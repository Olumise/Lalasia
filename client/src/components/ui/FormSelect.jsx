import React from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Controller } from "react-hook-form"

const options = [{text:'House', value: 'house'}, {text:'Car', value: 'car'}]


const FormSelect
 = ({fieldName,placeholder, label,description, form, required, selectOptions=options}) => {
  return (
    <div className='w-full'>
        <Controller
  name={fieldName}
  control={form.control}
  render={({ field, fieldState }) => (
    <Field orientation="responsive" data-invalid={fieldState.invalid}>
 
        <FieldLabel htmlFor={field.name}>
                      <div>
                        {label}
                        {required && <span className="text-red-500">*</span>}
                      </div>
                    </FieldLabel>
        {description &&  <FieldDescription>
          {description}
        </FieldDescription>}
            
      <Select
        name={field.name}
        value={field.value}
        onValueChange={field.onChange}
      >
        <SelectTrigger
          id={field.name}
          aria-invalid={fieldState.invalid}
          className="min-w-[120px]"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          {selectOptions.map((option)=> {
            return <SelectItem key={option.value} value={option.value}>{option.text}</SelectItem>
          })}
        </SelectContent>
      </Select>
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

    </Field>
  )}
/>
    </div>
  )
}

export default FormSelect
