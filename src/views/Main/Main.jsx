import * as config from '../../../config';
import React, { useEffect } from 'react';
import useLocalStorage from "../../hooks/useLocalStorage";
import API from "../../api";
import { useStore } from "../../store";
import { getTimeFromDateTimeString } from "../../utils";

const Main = props => {
  const [savedCount] = useLocalStorage("savedCount", 0);
  const [time, setTime] = useStore.time();
  
  const callAPI = () => {
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	
	API.getTime(timezone)
	.then(data => getTimeFromDateTimeString(data.datetime))
	.then(time => setTime(time))
  }
  
  if(time == null){
	callAPI();
  }
  console.table(import.meta.env)
  return (
	<section className="text-gray-600 body-font overflow-hidden">
	  <div className="container px-5 mx-auto">
		<div className="flex flex-wrap -m-12">
		  <div className="p-12 md:w flex flex-col items-start w-full">
			<span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
				MAIN
			</span>
			<h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Viewer</h2>
			<p className="leading-relaxed mb-8">Count saved result: { savedCount }</p>
			<div className="flex flex-col space-y-4">
				<p className="leading-relaxed">Time: <span className="font-bold">{ time }</span></p>
				<p className="leading-relaxed">Key: <span className="font-bold">{ import.meta.env.VITE_SUPER_KEY }</span></p>
				<p className="leading-relaxed">Config: <span className="font-bold">{ config.property }</span></p>
				<button className="py-2 px-6 text-white rounded shadow font-bold bg-indigo-700 hover:bg-indigo-900 ml-5" 
					onClick={callAPI}>Call API</button>
			</div>
			<div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
			</div>			 
		  </div>
		</div>
	  </div>
	</section>
  );
};

export default Main;