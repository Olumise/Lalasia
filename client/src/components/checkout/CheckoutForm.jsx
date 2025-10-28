import React from "react";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import PageLoader from "../ui/PageLoader";
import { useQuery } from "@tanstack/react-query";
import CartSummary from "./CartSummary";
import FormTextArea from "../ui/FormTextArea";

const options = [
	{ text: "House", value: "house" },
	{ text: "Car", value: "car" },
];

const CheckoutSchema = z.object({
	firstName: z.string("First Name is required"),
	lastName: z.string("Last Name is required"),
	email: z.email("Email is required"),
	phone: z.number().nullable().optional(),
	address: z.string("Address is required"),
	city: z.string("City is required"),
	country: z.string("Country is required"),
  additionalNotes: z.string().optional()
});

const CheckoutForm = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ["countries"],
		queryFn: () =>
			fetch("https://restcountries.com/v3.1/all?fields=name").then((res) =>
				res.json()
			),
	});

	const checkOutForm = useForm({
		resolver: zodResolver(CheckoutSchema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	if (isPending) {
		<PageLoader />;
	}
	if (data) {
		const coutriesList = data
			.map((item) => {
				return {
					text: item.name.common,
					value: item.name.common,
				};
			})
			.sort((a, b) => a.text.localeCompare(b.text));

		return (
			<div className="w-full">
				<form
					className="flex w-full gap-20 items-start"
					onSubmit={checkOutForm.handleSubmit(onSubmit)}>
					<div className="flex flex-col flex-2 gap-3 p-9 bg-white rounded-lg shadow-sm ">
            <h2 className="text-2xl font-semibold mb-4">Checkout Details</h2>
						<div className="flex flex-row gap-4">
							<FormInput
								form={checkOutForm}
								fieldName={"firstName"}
								placeholder={"First Name"}
								label={"First Name"}
								required={true}
							/>
							<FormInput
								form={checkOutForm}
								fieldName={"lastName"}
								placeholder={"Last Name"}
								label={"Last Name"}
								required={true}
							/>
						</div>
						<div className="flex gap-4">
							<FormInput
								form={checkOutForm}
								fieldName={"email"}
								placeholder={"Email Address"}
								label={"Email Address"}
								required={true}
							/>
							<FormInput
								form={checkOutForm}
								fieldName={"phone"}
								placeholder={"Phone Number"}
								label={"Phone Number"}
							/>
						</div>
						<div className="flex gap-4">
							<FormInput
								form={checkOutForm}
								fieldName={"address"}
								placeholder={"Address"}
								label={"Address"}
								required={true}
							/>
							<FormInput
								form={checkOutForm}
								fieldName={"city"}
								placeholder={"City"}
								label={"City"}
								required={true}
							/>
							<FormSelect
								form={checkOutForm}
								fieldName={"country"}
								placeholder={"Country"}
								label={"Country"}
								selectOptions={coutriesList}
								required={true}
							/>
						</div>
            <div className="flex gap-4">
							<FormTextArea form={checkOutForm}
								fieldName={"additionalNotes"}
								placeholder={"Write any additional notes"}
								label={"Additional Notes"}
								required={false}/>
						</div>
					</div>
					<div className="flex-1">
						<CartSummary />
					</div>
				</form>
			</div>
		);
	}
};

export default CheckoutForm;
