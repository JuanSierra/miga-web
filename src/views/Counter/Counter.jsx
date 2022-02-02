import React from 'react';
import { useStore } from "../../store";

const Counter = props => {
	
  const [counter, setCounter] = useStore.counter();
	
  const add = (e) => { e.preventDefault(); setCounter(counter + 1)};
  const substract = (e) => { e.preventDefault(); setCounter(counter - 1)};
  
  return (
	<section className="text-gray-600 body-font overflow-hidden">
	  <div className="container px-5 mx-auto">
		<div className="flex flex-wrap -m-12">
		  <div className="p-12 md:w flex flex-col items-start w-full">
			<span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">COUNTER</span>
			<h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4"></h2>
			<p className="leading-relaxed mb-8">
				<div class="inline-flex">
				  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"  onClick={substract}>
					-
				  </button>
				  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={add}>
					+
				  </button>
				</div>
			</p>
			<h2 class="text-lg text-gray-900 font-medium title-font mb-4">{counter}</h2>
			<div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
			</div>
		  </div>
		</div>
	  </div>
	</section>
  );
};

export default Counter;