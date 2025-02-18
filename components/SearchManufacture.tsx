"use client";
import { SearchManufacturerProps } from "@/type";
import { Fragment, useState } from "react";
import { Combobox, ComboboxButton, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";
export const SearchManufacture = ({
  selected,
  setSelected,
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
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(e) => setquary(e.target.value)}
            placeholder="Volkswagen"
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquary("")}
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufacturer.length === 0 && quary !== "" ? (
                <Combobox.Option
                  value={quary}
                  className="search-manufacturer__option"
                >
                  Create "{quary}"
                </Combobox.Option>
              ) : (
                filteredManufacturer.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
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
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
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
