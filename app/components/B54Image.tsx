import Image from "next/image";
import React from "react";
import PhoneIcon from "./svgs/PhoneIcon";
import Blob from "./svgs/Blob";
import EyeIcon from "./svgs/EyeIcon";
import ChevronIcon from "./svgs/ChevronIcon";

const InfoCard = ({
  title,
  description,
  className,
  icon: Icon,
}: {
  title: string;
  description: string;
  className?: string;
  icon?: React.FC;
}) => {
  return (
    <div
      className={`flex px-3 bg-b54-gray-1 py-[18px] justify-between gap-1.5 rounded-lg ${className}`}
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-b54-gray-3 text-[10px] font-medium">{title}</span>
        <p className="text-xs font-bold text-b54-gray-4">{description}</p>
      </div>
      {Icon && (
        <div className="flex items-center justify-center bg-b54-gray-2 w-[35px] h-[35px] rounded-full">
          <Icon />
        </div>
      )}
    </div>
  );
};

const B54Image = () => {
  const businessInfo = [
    {
      title: "BUSINESS MODEL",
      description: "MARKETPLACE",
    },
    {
      title: "SECTOR",
      description: "AGRICULTURE",
    },
  ];

  return (
    <div className="relative w-full bg-red-s400 font-dm-sans">
      <Blob
        className="absolute w-fit right-12 bottom-13"
        blobClassName="fill-blob"
      />
      <span className="absolute p-1.5 bg-b54-yellow rounded-sm text-base font-bold text-black rotate-3 bottom-[406.5px] right-[65px]">
        Data driven
      </span>
      <span className="absolute p-1.5 bg-b54-green rounded-sm text-base font-bold text-black rotate-[85deg] bottom-[40px] -right-[19px]">
        Scalable
      </span>
      <span className="absolute p-1.5 bg-b54-blue rounded-sm text-base font-bold text-black -rotate-[86deg] bottom-[240px] right-[347px]">
        Transparent
      </span>
      <div className="flex absolute flex-col p-6 bg-b54-background gap-2.5 w-[365px] font-dm-sans rounded-2xl right-[26px] bottom-0">
        <div className="flex gap-2 mb-1.5 items-center">
          <Image
            src="/nigeria-flag.png"
            alt="Flag of Nigeria"
            width={17}
            height={12}
          />
          <span className="text-base font-bold text-b54-primary">
            Thando Textiles
          </span>
        </div>
        <div className="flex flex-col gap-3 p-3 rounded-lg bg-b54-gray-1">
          <span className=" text-[10px] text-b54-secondary">TEAM</span>
          <div className="flex justify-between">
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <div className="relative" key={n}>
                  <Image
                    src="/avatar.png"
                    alt="Female Bit-emoji avatar image"
                    width={30}
                    height={30}
                  />
                  <div className="absolute right w-[5px] h-[5px] bg-[#41AE7C;] rounded-full bottom-[1px] right-[2px]"></div>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-3">
              <div className="relative mb-[2.5px]">
                <EyeIcon className="stroke-b54-secondary" />
                <div className="absolute w-[6px] h-[6px] border rounded-full top-[3.4px] left-[5px] border-b54-secondary"></div>
              </div>
              <ChevronIcon className=" stroke-b54-secondary" />
            </div>
          </div>
        </div>
        <InfoCard
          title="PHONE NUMBER"
          description="+243 908 9023 321"
          icon={PhoneIcon}
        />
        <div className="flex gap-[7px]">
          {businessInfo.map((info, key) => (
            <InfoCard
              key={key}
              className="flex-grow"
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
        <InfoCard
          title="DESCRIPTION"
          description="We provide textile and textile manufacturing..."
        />
      </div>
    </div>
  );
};

export default B54Image;
