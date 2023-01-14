import React, { ReactNode } from "react";

interface SitemapAccordionType {
  isActive: number | null;
  setActive: any;
  title: string;
  children: ReactNode;
}

const SitemapAccordion = (props: SitemapAccordionType) => {
  const { isActive, setActive, title } = props;
  return (
    <div className="px-4 w-full md:w-2/12 mb-4 md:mb-0 accordion">
      <h5 className="text-lg font-semibold mb-2 relative">
        {title}
        <button
          onClick={() => setActive(isActive)}
          className={[
            "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 top-1/2",
            isActive ? "rotate-0" : "rotate-180",
          ].join(" ")}
        >
          <img src="/images/accordion-ic.svg" alt="icon" />
        </button>
      </h5>
      <ul
        className={[
          "md:h-auto md:visible md:opacity-100 overflow-hidden transition duration-200",
          isActive ? "h-0 invisible opacity-0" : "opacity-100",
        ].join(" ")}
      >
        {props.children}
      </ul>
    </div>
  );
};

export default SitemapAccordion;
