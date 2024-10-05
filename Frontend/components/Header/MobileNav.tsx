import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Image from "next/image";

type Props = {};

const MobileNav = (props: Props) =>
{
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () =>
  {
    setIsOpen(false); // Automatically close the nav when an item is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer text-gray-600 hover:text-black focus:text-black transition-colors" />
      </SheetTrigger>
      <SheetContent aria-describedby="mobile-nav-description">
        <SheetTitle className="text-3xl font-bold text-center text-gray-800">
          Selwel
        </SheetTitle>
        <p id="mobile-nav-description" className="sr-only">
          The navbar for mobile display
        </p>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-16">
            <Image
              src={"/logos/logo1.jpeg"}
              width={144}
              height={80}
              alt="Selwel logo"
              className="w-36 h-20 pt-5"
            />
            {/* Styled Nav */}
            <Nav
              containerStyles="flex flex-col items-center gap-y-8"
              linkStyles="text-lg font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600 transition-colors duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
              onLinkClick={handleNavClick} // Close on click
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;



// import React from "react";
// import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
// import { AlignJustify } from "lucide-react";
// import Nav from "./Nav";
// import Image from "next/image";

// type Props = {};

// const MobileNav = (props: Props) =>
// {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <AlignJustify className="cursor-pointer" />
//       </SheetTrigger>
//       <SheetContent aria-describedby="mobile-nav-description">
//         <SheetTitle>Selwel</SheetTitle>
//         <p id="mobile-nav-description" className="sr-only">
//           The navbar for mobile display
//         </p>
//         <div className="flex flex-col items-center justify-between h-full py-8">
//           <div className="flex flex-col items-center gap-y-32">
//             <Image
//               src={"/logos/logo1.jpeg"}
//               width={144}
//               height={80}
//               alt="selwel"
//               className="w-36 h-20 pt-5 p-2 px-7"
//             />
//             <Nav
//               containerStyles="flex flex-col items-center gap-y-6"
//               linkStyles="text-2xl"
//             />
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;
