"use client"
import React, { useRef, useState } from "react";

const Details = () => {
    const[isOpen,setIsOpen]=useState(false)
    const[height,setHeight]=useState(100)
    const devRef = useRef<HTMLDivElement |null>(null);

   
    const handleToggle = () => {
        if (devRef.current) {
          if (isOpen) {
            setHeight(100); 
          } else {
            setHeight(devRef.current.scrollHeight);
          }
          setIsOpen(!isOpen); 
        }
      };
  return (
    <div className="bg-white py-5 px-5 grid gap-y-5 ">
      <div className="grid gap-y-4">
        <h1 className="text-greenColor font-semibold text-[20px]">
          Online Sports Nutrition and Natural Dietetics.
        </h1>
        <p className="text-base text-testColor">
          Chances are there wasnt collaboration, communication, and checkpoints,
          there wasn&apos;t a process agreed upon or specified with the
          granularity required. It&apos;s content strategy gone awry right from
          the start. Forswearing the use of Lorem Ipsum wouldn&apos;t have
          helped, won&apos;t help now. It&apos;s like saying you&apos;re a bad
          designer, use less bold text, don&apos;t use italics in every other
          paragraph. True enough, but that&apos;s not all that it takes to get
          things back on track. The villagers are out there with a vengeance to
          get that Frankenstein You made all the required mock ups for
          commissioned layout, got all the approvals, built a tested code base
          or had them built, you decided on a content management system, got a
          license for it or adapted: The toppings you may chose for that TV
          dinner pizza slice when you forgot to shop for foods, the paint you
          may slap on your face to impress the new boss is your business. But
          what about your daily bread? Design comps, layouts, wireframes—will
          your clients accept that you go about things the facile way?
          Authorities in our business will tell in no uncertain terms that Lorem
          Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>
      <div className="grid gap-y-3">
      <div className="grid gap-y-1">
      <h1 className="text-[#000000] font-semibold text-[20px]">The villagers are out there with a vengeance to get that Frankenstein</h1>
      <p className="text-base text-testColor">You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted:</p>
      </div>
 <div ref={ devRef} className="grid gap-y-2  overflow-hidden duration-300 transition-all" style={{height:`${height}px`}}>  
 <div className="flex items-center justify-start gap-3">
  <span className="min-w-2 min-h-2 rounded-full bg-testColor"></span>
  <p className="text-base text-testColor">
    The toppings you may choose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business.
  </p>
</div>
 <div className="flex items-center justify-start gap-3">
  <span className="min-w-2 min-h-2 rounded-full bg-testColor"></span>
  <p className="text-base text-testColor">
    The toppings you may choose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business.
  </p>
</div>
 <div className="flex items-center justify-start gap-3">
  <span className="min-w-2 min-h-2 rounded-full bg-testColor"></span>
  <p className="text-base text-testColor">
    The toppings you may choose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business.
  </p>
</div>
 <div className="flex items-center justify-start gap-3">
  <span className="min-w-2 min-h-2 rounded-full bg-testColor"></span>
  <p className="text-base text-testColor">
    The toppings you may choose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business.
  </p>
</div>
 <div className="flex items-center justify-start gap-3">
  <span className="min-w-2 min-h-2 rounded-full bg-testColor"></span>
  <p className="text-base text-testColor">
    The toppings you may choose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business.
  </p>
</div>
 </div>
 <button onClick={handleToggle} type="button" className="text-white bg-gray-800 my-4 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 capitalize w-fit">show {isOpen?"Less":"More"} </button>
      </div>
    </div>
  );
};

export default Details;