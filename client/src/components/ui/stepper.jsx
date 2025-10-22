import React, { useState } from "react";
import {Plus,Minus} from "lucide-react"

const Stepper = ({currentCount=4,onChange}) => {
	const [count, setCount] = useState(currentCount);

	return (
        
		<div className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-white border border-gray-200 rounded-sm ">
		
            <button
				onClick={() => {
                   const newCount = count < 2 ? 1 : count - 1 
                    setCount(newCount)
                    onChange(newCount)
                }}
				className="text-2xl w-8 h-8 font-light flex justify-center items-center rounded-sm text-gray-700 hover:text-white hover:bg-primary-100 cursor-pointer transition-colors">
				<Minus size={'18'}/>
			</button>

			<span className="text-base font-medium text-gray-900 min-w-[2ch] text-center">
				{count}
			</span>

			<button
				onClick={() => {
                    const newCount = count + 1
                    setCount(newCount)
                    onChange(newCount)

                } }
				className="text-2xl w-8 h-8 font-light flex justify-center items-center rounded-sm text-gray-700 hover:text-white hover:bg-primary-100 cursor-pointer transition-colors">
				<Plus size={'18'}/>
			</button>
		</div>
	);
};

export default Stepper;
