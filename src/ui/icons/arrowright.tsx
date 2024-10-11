import { IconProps } from "../iconType";

export default function ArrowRight({ color, size }: IconProps) {
  return (
<svg 
width={size}
height={size}
viewBox="0 0 24 24" fill={"transparent"}  xmlns="http://www.w3.org/2000/svg">
<path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke={color}  stroke-opacity="0.01" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  );
}