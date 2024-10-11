import { IconProps } from "../iconType";

export default function Shoe({ color, size }: IconProps) {
  return (
<svg 
 width={size}
 height={size}
viewBox="0 0 29 29" fill={"transparent"} xmlns="http://www.w3.org/2000/svg">
<path d="M22.8636 21.5454H9.53145C6.01971 21.5454 4.26385 21.5454 3.1936 20.2081C1.16217 17.67 3.47683 10.9209 4.87898 8.37873C5.35433 11.2515 10.2479 11.1717 12.0304 10.7727C10.8428 8.38016 12.4283 7.58171 13.2209 7.18247L13.2223 7.18176C16.7576 11.3712 24.3163 13.6502 26.1686 18.2164C26.9688 20.1889 24.6889 21.5454 22.8636 21.5454Z"  stroke={color} stroke-width="1.79545" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.39394 16.7576C7.37892 18.4685 10.4507 18.965 14.3896 17.7198C15.5831 17.3425 16.1799 17.1539 16.5518 17.1795C16.9238 17.2051 17.6827 17.5589 19.2003 18.2667C21.0958 19.1506 23.6965 19.6594 26.3333 18.3834"  stroke={color} stroke-width="1.79545" stroke-linejoin="round"/>
<path d="M16.1591 11.3713L17.9545 9.57581"  stroke={color} stroke-width="1.79545" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.553 13.1667L20.3485 11.3712"  stroke={color} stroke-width="1.79545" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  );
}