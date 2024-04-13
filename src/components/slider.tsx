"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ onValueChange, ...props }, ref) => {
  const [value, setValue] = React.useState(props.defaultValue ?? props.value);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
    onValueChange && onValueChange(newValue);
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={"relative flex w-full touch-none select-none items-center"}
      {...props}
      onValueChange={handleChange}
      value={value}
    >
      <SliderPrimitive.Track className="bg-mwWhite relative h-4 w-full grow overflow-hidden rounded-full">
        <SliderPrimitive.Range className="bg-yellow absolute h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="ring-offset-background focus-visible:ring-ring bg-yellow block h-7 w-7 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        style={{
          boxShadow: "0 4px 10px 5px rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        <div
          className="absolute -top-[45px] left-[50%] m-auto h-[35px] w-[43px] -translate-x-1/2
              bg-[url('/img/value-box.webp')] text-lg"
        >
          <p className="relative text-lg font-medium text-black">{value}</p>
        </div>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
