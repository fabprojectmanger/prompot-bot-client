import "./ServicesOptions.css";
import SERVICES from "../../constants/services-provider.js";
import { useEffect, useState } from "react";
import { useChatContext } from "../../context/ChatContext.jsx";
import useTimeout from "../../hooks/useTimeout.jsx";

const ServicesOptions = () => {
  const { setOptionsSelected, setIsInputDisabled, setIsTyping, aiResponse } =
    useChatContext();

  const [selectedService, setSelectedService] = useState();
  const [categoryIndexToShow, setCategoryIndexToShow] = useState(0);
  const [animatedCategoryIndexes, setAnimatedCategoryIndexes] = useState([]);
  const [subCategoryIndexToShow, setSubCategoryIndexToShow] = useState(0);
  const [animatedSubCategoryIndexes, setAnimatedSubCategoryIndexes] = useState(
    []
  );

  // Animation may glitch depending on the following delay and delay in the css
  const DELAY_FOR_OPTIONS_SLIDE_IN = 300;

  useTimeout(updateCategoryIndexes, DELAY_FOR_OPTIONS_SLIDE_IN, [
    categoryIndexToShow,
    setIsTyping,
  ]);

  useTimeout(updateSubCategoryIndexes, DELAY_FOR_OPTIONS_SLIDE_IN, [
    selectedService,
    subCategoryIndexToShow,
  ]);

  useTimeout(
    () => {
      const index = categoryIndexToShow - 1;
      if (!animatedCategoryIndexes.includes(index) && categoryIndexToShow) {
        setAnimatedCategoryIndexes((prevIndexes) => [...prevIndexes, index]);
      }
    },
    DELAY_FOR_OPTIONS_SLIDE_IN - 200,
    [categoryIndexToShow]
  );

  useTimeout(
    () => {
      const index = subCategoryIndexToShow - 1;
      if (
        !animatedSubCategoryIndexes.includes(index) &&
        subCategoryIndexToShow
      ) {
        setAnimatedSubCategoryIndexes((prevIndexes) => [...prevIndexes, index]);
      }
    },
    DELAY_FOR_OPTIONS_SLIDE_IN - 200,
    [subCategoryIndexToShow]
  );

  function updateCategoryIndexes() {
    if (categoryIndexToShow <= SERVICES.length) {
      setIsTyping(true);
      setCategoryIndexToShow((prevIndex) => prevIndex + 1);
      if (categoryIndexToShow >= SERVICES.length) {
        setIsTyping(false);
      }
    }
  }

  function updateSubCategoryIndexes() {
    if (
      selectedService &&
      subCategoryIndexToShow <= selectedService?.options?.length
    ) {
      setIsTyping(true);
      setSubCategoryIndexToShow((prevIndex) => prevIndex + 1);
      if (subCategoryIndexToShow >= selectedService.options.length) {
        setIsTyping(false);
      }
    }
  }

  const handleServiceCategorySelection = (selectedOptionIndex) => {
    setIsTyping(true);
    const selectedService = SERVICES.find((s) => s.id === selectedOptionIndex);
    setSelectedService(selectedService);
    if (selectedService.id === 5) {
      setIsInputDisabled(false);
      setIsTyping(false);
      setOptionsSelected({ category: selectedService.category });
    }
  };

  const ServiceCategory = () => {
    return (
      <>
        {SERVICES.slice(0, categoryIndexToShow).map((service, index) => (
          <div
            className={`prompot__service-option 
            ${
              categoryIndexToShow >= index &&
              !animatedCategoryIndexes.includes(index)
                ? "show "
                : ""
            }
            ${animatedCategoryIndexes.includes(index) ? "animated" : ""}`}
            onClick={() => handleServiceCategorySelection(index)}
            key={index}
          >
            <img width="33px" src={service?.imageUrl} alt={service?.name} />
            {service.category}
          </div>
        ))}
      </>
    );
  };

  const handleServiceSubCategorySelection = (selectedOptionIndex) => {
    const selectedOption = selectedService.options.find(
      (service) => service?.id === selectedOptionIndex
    );
    setOptionsSelected({
      category: selectedService.category,
      subCategory: selectedOption.subCategory,
    });
    setIsInputDisabled(false);
    setIsTyping(false);
  };

  const ServiceSubCategory = () => {
    return (
      <>
        {selectedService.options
          ?.slice(0, subCategoryIndexToShow)
          .map((service, index) => (
            <div
              className={`prompot__service-option 
            ${
              subCategoryIndexToShow >= index &&
              !animatedSubCategoryIndexes.includes(index)
                ? "show "
                : ""
            }
            ${animatedSubCategoryIndexes.includes(index) ? "animated" : ""}`}
              onClick={() => handleServiceSubCategorySelection(index)}
              key={index}
              style={{ justifyContent: "center" }}
            >
              {service.subCategory}
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="prompot__services">
      {!selectedService && <ServiceCategory />}
      {selectedService && <ServiceSubCategory />}
    </div>
  );
};

export default ServicesOptions;
