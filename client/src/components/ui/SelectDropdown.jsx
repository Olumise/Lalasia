import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/shadcn/select";

const dropdownItems = [
  {
		text: "Apartment",
		value: "Apartment",
	},
	{
		text: "Houses",
		value: "Houses",
	},
];

const SelectDropdown = ({
  dropdownValues = dropdownItems,
  placeholder = 'Select Dropdown',
  value,
  setValue
}) => {
	return (
		
			<Select value={value} onValueChange={setValue}>
				<SelectTrigger className="w-full py-5 px-4 rounded-xs text-sm">
					<SelectValue
						placeholder={placeholder}
					/>
				</SelectTrigger>
				<SelectContent className='rounded-xs py-1' >
          <SelectItem
								className="text-sm py-2 px-4 focus:bg-primary-100 focus:text-white" value="null">
                  {placeholder}
							</SelectItem>
					{dropdownValues.map((content) => {
						return (
							<SelectItem
								className="text-sm py-2 px-4 focus:bg-primary-100 focus:text-white"
								value={content.value}>
								{content.text}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		
	);
};

export default SelectDropdown;
