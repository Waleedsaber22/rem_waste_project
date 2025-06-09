import React, { useState } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "../components/ui/Button";

const Sidebar = ({
  children,
  title = "Sidebar",
  className = "",
  titleClassName = "",
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = (
    <div
      className={`sidebar--content w-64 bg-white shadow-lg h-full ${className}`}
    >
      <div
        className={`flex justify-between items-center mb-4 ${titleClassName}`}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        {isMobile ? (
          <button onClick={() => setIsOpen(false)}>
            <X className="cursor-pointer" size={20} />
          </button>
        ) : null}
      </div>
      {children}
    </div>
  );

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && isMobile ? (
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed top-4 left-4 z-50 p-2 bg-white shadow-lg rounded-md"
        >
          <Menu size={20} />
        </Button>
      ) : null}

      {/* Mobile Overlay */}
      <Transition show={isMobile && isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => {}}>
          <TransitionChild
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30"
          />
          <div
            onClick={(e) => {
              if (
                !e.target.closest(".sidebar--content") ||
                e.target.closest(".enable-sidebar-close")
              ) {
                setIsOpen(false);
              }
            }}
            className="fixed inset-0 flex"
          >
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
      {!isMobile ? <div>{SidebarContent}</div> : null}
    </>
  );
};

export default Sidebar;
