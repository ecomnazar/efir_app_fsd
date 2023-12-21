import { Listbox } from "@headlessui/react";
import React from "react";

type Props = {
  selected: { name: string };
  setSelected: React.Dispatch<React.SetStateAction<{ name: string, id: string }>>;
  items: { name: string }[];
};

export const Selector = ({ selected, setSelected, items }: Props) => {
  return (
    <Listbox  value={selected} onChange={setSelected}>
      <div className="relative mb-2">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-primary text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none  sm:text-sm">
          <span className="block truncate">{selected?.name}</span>
        </Listbox.Button>

        <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {items.map((item, channelIdx) => (
            <Listbox.Option
              key={channelIdx}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4  ${
                  active ? "bg-white text-primary" : "bg-primary text-white"
                }`
              }
              value={item}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {item.name}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};