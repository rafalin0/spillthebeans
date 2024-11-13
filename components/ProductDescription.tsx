import React, { useState, useEffect } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

interface ProductDescriptionProps {
  description: string;
  classes: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
  classes,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  // Set a character limit for the "Show More" preview
  const characterLimit = 120;
  const isLongDescription = description.length > characterLimit;

  // Update `isSmallScreen` based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // 640px is typically the breakpoint for "small" screens
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener("resize", handleResize); // Listen for resize events
    return () => window.removeEventListener("resize", handleResize); // Clean up listener
  }, []);

  return (
    <div>
      <p className={classes}>
        {isSmallScreen
          ? isExpanded || !isLongDescription
            ? description
            : `${description.slice(0, characterLimit)}...`
          : description}
      </p>

      {isLongDescription && isSmallScreen && (
        <button
          onClick={toggleDescription}
          className="w-full flex justify-center align-middle items-center gap-2 text-xs p-2 mt-3"
        >
          {isExpanded ? (
            <>
              See Less <AiOutlineUp />
            </>
          ) : (
            <>
              See More <AiOutlineDown />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ProductDescription;
