import { IconProps } from "../iconType";

export default function Menu({ color, size }: IconProps) {
  return (
    <svg 
    width={size}
    height={size}
    viewBox="0 0 21 15" fill={color} xmlns="http://www.w3.org/2000/svg">
<path d="M0.341461 14.0732H20.6585V11.8821H0.341461V14.0732ZM0.341461 8.59552H20.6585V6.40446H0.341461V8.59552ZM0.341461 0.926819V3.11788H20.6585V0.926819H0.341461Z" stroke={color} />
</svg>
  );
}