import React from "react";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea"
import { Controller } from "react-hook-form";

const FormTextArea = ({
	fieldName,
	placeholder,
	label,
	description,
	form,
	required,
}) => {
	return (
		<div className="min-w-[200px] w-full">
			<Controller
  name={fieldName}
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>
								<div>
									{label}
									{required && <span className="text-red-500">*</span>}
								</div>
							</FieldLabel>
      <Textarea
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder={placeholder}
        className="min-h-[120px]"
      />
      {description && <FieldDescription>{description}</FieldDescription>}
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
		</div>
	);
};

export default FormTextArea;
