import React from 'react';

const Main = props => {
  return (
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 mx-auto">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 md:w flex flex-col items-start w-full">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">MAIN</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Viewer</h2>
        <p className="leading-relaxed mb-8">Count result.</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Main;