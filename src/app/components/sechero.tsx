// import { Great_Vibes } from "next/font/google";
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const InterFont = Inter({ subsets: ["latin"] });

// const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

// const Categories = () => {
//   return (
//     <div className='bg-black h-803px w-17921px container mx-auto text-center] '>
//       <p className={`${VibeFont.className} text-[#FF9F0D] md:ml-[630px] leading-[40px] md:w-[177px] font-normal text-[32px] md:h-[40px]  ml-[130px]`}>Food Category</p>
//       <p className="md:w-[446px] md:h-[56px] font-bold md:text-[48px] text-[40px] ml-[30px] md:mb-[40px]  md:ml-[500px] leading-[56px] text-[#FFFFFF] md:my-0 my-[40px]"><span className="text-[#FF9F0D]">Ch</span>oose Food Iteam</p>
//       <div className="flex ml-[60px] flex-col md:flex-row text-white gap-[30px] md:ml-[100px] ">
//        <div className="relative">
//   <Image src="/categ1.png" width={305} height={328} alt="categ1" />
//   <div className={` ${InterFont.className} font-bold absolute top-2 left-2 text-[18px] leading-[26px] md:ml-[100px] md:mt-[130px] mt-[140px] ml-[90px] text-[#FF9F0D] bg-[#FFFFFF]  text-sm px-2 py-1 rounded-[6px]`}>
//     save 30%
//   </div>
//   <div className={` ${InterFont.className} font-bold absolute top-2 left-2 text-[18px] leading-[26px]  md:mt-[170px] mt-[180px] text-[#FFFFFF] bg-[#FF9F0D]  text-sm px-14 py-1 rounded-[6px]`}>
//     save 30%
//   </div>
// </div>
//        <div><Image src='/categ2.png' width={305} height={328} alt="categ1"/></div>
//        <div><Image src='/categ3.png' width={305} height={328} alt="categ1"/></div>
//        <div><Image src='/categ4.png' width={305} height={328} alt="categ1"/></div>
//       </div>


//        {/* Why Choose Us Section  */}

//        <div className=" w-full bg-cover bg-center relative flex flex-col  md:ml-[100px] justify-cter it-center md:flex-row text-white md:mt-[120px]"  style={{ backgroundImage: "url('assets/background.svg')" }} 
//        >
//         <div>
//             <div className="flex md:mr-[100px] flex-col gap-3">
//              <div className="flex flex-col md:flex-row gap-3">
//                 <div><Image src='/paratha.png' alt="paratha" width={362} height={356}/></div>
//                 <div><Image src='/burger.png' alt="burger" width={281} height={231} className="md:mt-[120px]"/></div>
//              </div>
//              <div className="flex gap-3">
//                 <div><Image src='/kabab.png' width={244} height={306} alt="burger"/></div>
//                 <div><Image src='/cheezburger.png' alt="burger2" width={221} height={226}/></div>
//                 <div className="flex flex-col gap-3">
//                     <div><Image src='/raita.png' alt="raita-pic" width={161} height={168}/></div>
//                     <div><Image src='/lastpic.png' alt="raita-pic" width={161} height={168}/></div>
//                 </div>
//              </div>
//             </div>
//         </div>
//         <div className="flex flex-col md:mt-[70px]">
//         <p className={` ${VibeFont.className} text-[#FF9F0D] md:w-[175px] md:h-[40px] font-normal md:text-[32px] leading-[40px]`}>Why Choose us</p>
//         <h2 className="font-bold text-[48px] leading-[56px] md:w-[433px] md:h-[112px]"><span>Ex</span>ta ordinary taste And Experienced</h2>
//         <p className={`${InterFont.className} font-normal text-[16px] leading-[24px] text-[#FFFFFF] md:w-[526px] md:h-[120px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
//         <div className="flex md:my-[40px]">
//             <div className="flex flex-col ">
//         <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]"><Image src='/Hamburger.png' alt="humberger-icon" width={56} height={56} className="md:m-[20px] "/></p>
//         <p className={`${InterFont.className} font-normal text-[18px] leading-[26px]  md:ml-2`}>Fast Food</p>
//         </div>
//             <div className="flex flex-col ">
//         <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]"><Image src='/Cookie.png' alt="humberger-icon" width={56} height={56} className="md:m-[20px]"/></p>
//         <p className={`${InterFont.className} font-normal md:ml-6 text-[18px] leading-[26px]`}>Lunch</p>
//         </div>
//             <div className="flex flex-col">
//         <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]"><Image src='/Wine.png' alt="humberger-icon" width={56} height={56} className="md:m-[20px]"/></p>
//         <p className={`${InterFont.className} font-normal text-[18px] leading-[26px] md:ml-6`}>Dinner</p>
//         </div>
//         </div>
//         <div className="relative w-[374px] h-[92px]">
//   <Image src="/rect.png" alt="rectangle" width={374} height={92} className="border-l-8 border-[#FF9F0D] rounded-2xl" />
//   <div className="absolute inset-0 flex gap-[30px] items-center justify-center">
//     <span className="text-[48px] leading-[56px] font-[700] text-[#FF9F0D]">
//       30+
//     </span>
//     <span className="text-black ">
//       <span className={` ${InterFont.className} text-[20px] leading-[28px] font-[400]`}>
//         Years of
//       </span>{' '} <br />
//       <span className="text-[24px] leading-[32px] font-[700]">
//         Experienced
//       </span>
//     </span>
//   </div>
// </div>


//         </div>
        
//        </div>
//        <div className="text-white flex flex-col md:flex-row md:m-[80px] md:mt-[160px]">
//         <div className="flex flex-col">
//          <div className="md:ml-[135px]">
//           <Image src='/cap.png' alt="cap-pic" height={120} width={120}/>
//          </div>
//          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
//          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
//         </div>
//         <div className="flex flex-col">
//          <div className="md:ml-[135px]">
//           <Image src='/juice.png' alt="cap-pic" height={120} width={120}/>
//          </div>
//          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
//          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
//         </div>
//         <div className="flex flex-col">
//          <div className="md:ml-[135px]">
//           <Image src='/spoon.png' alt="cap-pic" height={120} width={120}/>
//          </div>
//          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
//          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
//         </div>
//         <div className="flex flex-col ">
//          <div className="md:ml-[135px]">
//           <Image src='/pizza.png' alt="cap-pic" height={120} width={120}/>
//          </div>
//          <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
//          <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
//         </div>
       
//        </div>
//     </div>
//   )
// }

// export default Categories

import React from 'react';
import Image from 'next/image';

const items = [
  { id: 1, Image: "/on1.jpeg", label: "Save 50% on Fast Food" },
  { id: 2, Image: "/n2.jpeg", label: "Delicious Burgers" },
  { id: 3, Image: "/on3.jpeg", label: "Healthy Salads" },
  { id: 4, Image: "/n3.jpeg", label: "Desserts" },
];

const Food_carigery = () => {
  return (
    <section className="bg-black text-white py-16 px-20">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <div
                className="relative w-full max-w-full h-auto"
                style={{
                  borderRadius: '6px 0px 0px 0px',
                  overflow: 'hidden', // Prevents overflow of images
                  opacity: 1, // Ensures visibility
                }}
              >
                <Image
                  src={item.Image} // Correct path to images
                  alt={item.label}
                  className="object-cover rounded-lg"
                  layout="responsive"  // Ensures it maintains aspect ratio
                  width={300} // Adjust width for responsiveness
                  height={300} // Adjust height for responsiveness
                />
              </div>

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food_carigery;