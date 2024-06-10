"use client"

import { products } from '@wix/stores';
import React, { useState } from 'react'

export default function CustomizeProducts({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) {
  
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string; }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  }

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return Object.entries(choices).every(
        ([key, value]) => variantChoices[key] === value
      ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0;
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = () => {
                if (!disabled) {
                  handleOptionSelect(option.name!, choice.description!);
                }
              }

              return (
                <li
                  key={choice.value}
                  className={`${
                    option.name === "Color"
                      ? "w-8 h-8 rounded-full ring-gray-300 relative"
                      : "ring-1 ring-orange text-orange rounded-md py-1 px-4 text-sm"
                  } ${
                    selected ? "ring-2 ring-orange" : ""
                  } ${
                    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                  }`}
                  style={option.name === "Color" ? { backgroundColor: choice.value } : {}}
                  onClick={clickHandler}
                >
                  {selected && option.name === "Color" && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 ring-orange top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && option.name === "Color" && (
                    <div className="absolute w-10 h-[2px] bg-orange rotate-45 cursor-not-allowed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {option.name !== "Color" && choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
