// import React, { useState } from "react";
// import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
// import { AlignJustify } from "lucide-react";
// import Nav from "./Nav";
// import Image from "next/image";

// type Props = {};

// const MobileNav = (props: Props) =>
// {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleNavClick = () =>
//   {
//     setIsOpen(false); // Automatically close the nav when an item is clicked
//   };

//   return (
//     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//       <SheetTrigger asChild>
//         <AlignJustify className="cursor-pointer text-gray-600 hover:text-black focus:text-black transition-colors" />
//       </SheetTrigger>
//       <SheetContent aria-describedby="mobile-nav-description">
//         <SheetTitle className="text-3xl font-bold text-center text-gray-800">
//           Selwel
//         </SheetTitle>
//         <p id="mobile-nav-description" className="sr-only">
//           The navbar for mobile display
//         </p>
//         <div className="flex flex-col items-center justify-between h-full py-8">
//           <div className="flex flex-col items-center gap-y-16">
//             <Image
//               src={"/logos/logo1.jpeg"}
//               width={144}
//               height={80}
//               alt="Selwel logo"
//               className="w-36 h-20 pt-5"
//             />
//             {/* Styled Nav */}
//             <Nav
//               containerStyles="flex flex-col items-center gap-y-8"
//               linkStyles="text-lg font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600 transition-colors duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
//               onLinkClick={handleNavClick} // Close on click
//             />
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { AlignJustify, X } from "lucide-react";
import Nav from "./Nav";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const AdvancedMobileNav = () =>
{
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () =>
  {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
        >
          <AlignJustify className="text-gray-600 hover:text-black focus:text-black transition-colors" />
        </motion.div>
      </SheetTrigger>
      <SheetContent
        className="bg-gradient-to-br from-white to-gray-100 backdrop-blur-lg"
        aria-describedby="mobile-nav-description"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <SheetTitle className="text-3xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Selwel
                </SheetTitle>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                >
                  <X className="text-gray-600" />
                </motion.button>
              </div>
              <p id="mobile-nav-description" className="sr-only">
                The navbar for mobile display
              </p>
              <div className="flex flex-col items-center justify-between flex-grow py-8">
                <div className="flex flex-col items-center gap-y-16 w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/logos/logo1.jpeg"
                      width={144}
                      height={80}
                      alt="Selwel logo"
                      className="w-36 h-20 rounded-lg shadow-md"
                    />
                  </motion.div>
                  <Nav
                    containerStyles="flex flex-col items-center gap-y-8 w-full"
                    linkStyles="text-lg font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600 transition-colors duration-300 hover:scale-105 focus:scale-105 focus:outline-none w-full text-center py-2 px-4 rounded-md hover:bg-gray-200 focus:bg-gray-200"
                    onLinkClick={handleNavClick}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};

export default AdvancedMobileNav;

