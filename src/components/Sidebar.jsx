import React, { useState } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ children, title = "Sidebar", className = "" }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = (
    <div className={`w-64 bg-white shadow-lg p-6 h-full ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={() => setIsOpen(false)} className="md:hidden">
          <X size={20} />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );

  return (
    <>
      {/* Toggle Button */}
      {!isOpen || !isMobile ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed top-4 left-4 z-50 p-2 bg-white shadow-lg rounded-md md:relative md:z-auto md:top-0 md:left-0"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      ) : null}

      {/* Mobile Overlay */}
      <Transition show={isMobile && isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          onClose={() => setIsOpen(false)}
        >
          <TransitionChild
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30"
          />
          <div className="fixed inset-0 flex">
            <TransitionChild
              as={motion.div}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {SidebarContent}
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Desktop Collapsible */}
      {!isMobile && isOpen && (
        <motion.aside
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {SidebarContent}
        </motion.aside>
      )}
    </>
  );
};

export default Sidebar;
