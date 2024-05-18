"use client";
import { SearchManufacturerProps } from "@/type";
import { Fragment, useState } from "react";
import { Combobox, ComboboxButton, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";
export const SearchManufacture = ({
  manufacturer,
  setmanufacture,
}: SearchManufacturerProps) => {
  const [quary, setquary] = useState("");

 

  const filteredManufacturer =
    quary === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(quary.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-maufacturer">
      <Combobox value={manufacturer} onChange={setmanufacture}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" alt="Car logo" width={20} height={20} />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacurers: string) => manufacurers}
            onChange={(e) => setquary(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquary("")}
          >
            <Combobox.Options>
              {filteredManufacturer.length === 0 && quary !== "" ? (
                <Combobox.Option
                  value={quary}
                  className="search-manufacturer__option"
                >
                  create "{quary}"
                </Combobox.Option>
              ) : (
                filteredManufacturer.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `
                    relative search-manufacurer__option
                    ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                  `}
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
