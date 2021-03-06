import React from 'react';
import Image from 'next/image';

const DeliveryDetail: React.FC = () => {
  return (
    <div className="flex sm:hidden xl:flex flex-col sm:max-w-xs py-5 sm:py-0 lg:px-10 border-b sm:border-b-0 sm:border-l border-dashed">
      <h3 className="mb-5 text-lg font-bold">Delivery Details.</h3>
      <p className="text-base mb-5">
        Free delivery, to capital cities on orders over $100
      </p>
      <div className="flex gap-2.5 items-center">
        <span className="flex items-center justify-center rounded-full w-8 h-8 border duration-150 text-white bg-transparent hover:bg-white hover:text-blue-500">
          <svg
            className="w-4 h-4 fill-current"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2854 12.2658V14.5885C16.2863 14.8041 16.242 15.0175 16.1555 15.2151C16.0689 15.4126 15.942 15.59 15.7828 15.7357C15.6236 15.8815 15.4356 15.9925 15.231 16.0616C15.0263 16.1306 14.8094 16.1563 14.5943 16.1369C12.2072 15.878 9.9142 15.0639 7.8996 13.7601C6.02527 12.5714 4.43616 10.9854 3.24513 9.11482C1.93411 7.09508 1.11823 4.79552 0.863596 2.40245C0.844211 2.18835 0.869705 1.97258 0.938456 1.76885C1.00721 1.56513 1.11771 1.37793 1.26292 1.21916C1.40814 1.0604 1.58489 0.93355 1.78192 0.846694C1.97894 0.759838 2.19193 0.714877 2.40733 0.714675H4.73456C5.11103 0.710977 5.47601 0.844028 5.76146 1.08903C6.04691 1.33403 6.23336 1.67426 6.28605 2.04631C6.38428 2.7896 6.56644 3.51942 6.82907 4.22183C6.93344 4.49894 6.95603 4.8001 6.89416 5.08963C6.83229 5.37915 6.68855 5.64491 6.47998 5.85541L5.49479 6.83865C6.5991 8.77692 8.20714 10.3818 10.1493 11.4839L11.1344 10.5007C11.3454 10.2925 11.6117 10.149 11.9018 10.0873C12.1919 10.0256 12.4936 10.0481 12.7713 10.1523C13.4751 10.4144 14.2063 10.5962 14.9511 10.6942C15.3279 10.7473 15.6721 10.9367 15.9181 11.2265C16.1641 11.5162 16.2948 11.8862 16.2854 12.2658Z"
              fill="currentColor"
            />
            <path
              d="M12.8567 6.71474C12.8567 6.27392 12.5138 5.55147 11.9996 5.00045C11.5294 4.49351 10.9024 4.14331 10.2853 4.14331"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4281 6.71463C15.4281 3.87137 13.1285 1.57178 10.2853 1.57178"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>{'(08) 8262 6890'}</span>
      </div>
    </div>
  );
};

export default DeliveryDetail;
