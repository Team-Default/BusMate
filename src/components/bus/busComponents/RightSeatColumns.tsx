import React from "react";
import { cn } from "@/lib/utils";
import Seat from "../seats/Seat";
import SeatsRow from "../seats/SeatsRow";

interface RightSeatColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  noOfSeatsInRow?: number;
  noOfRows?: number;
  /** Optional height in px */
  height?: number;
}
export default function RightSeatColumns({
  noOfSeatsInRow = 3,
  noOfRows = 10,
  height,
  id,
  className,
  ...divProps
}: RightSeatColumnsProps) {
  return (
    <div
      id={id}
      style={{height} }
      className={cn("flex flex-col justify-around flex-grow", className)}
      {...divProps}
    >
      {Array.from({ length: noOfRows }).map((_, rowIndex) => (
        <SeatsRow key={rowIndex} noOfSeatsInRow={noOfSeatsInRow} />
      ))}
    </div>
  );
}
