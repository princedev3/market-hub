import { IconProps } from "../iconType";

export default function Phone({ color, size }: IconProps) {
  return (
<svg
 width={size}
 height={size}
viewBox="0 0 29 29" fill={"transparent"} xmlns="http://www.w3.org/2000/svg">
<path d="M5.98485 11.0454C5.98485 7.09562 5.98485 5.12071 7.2119 3.89368C8.43894 2.66663 10.4138 2.66663 14.3636 2.66663C18.3134 2.66663 20.2883 2.66663 21.5154 3.89368C22.7424 5.12071 22.7424 7.09562 22.7424 11.0454V18.2272C22.7424 22.177 22.7424 24.1519 21.5154 25.379C20.2883 26.606 18.3134 26.606 14.3636 26.606C10.4138 26.606 8.43894 26.606 7.2119 25.379C5.98485 24.1519 5.98485 22.177 5.98485 18.2272V11.0454Z"  stroke={color} stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.1667 23.0151H15.5606"  stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7727 2.66663L10.8793 3.30583C11.1101 4.69105 11.2256 5.38366 11.7006 5.80513C12.1962 6.24477 12.8987 6.25753 14.3636 6.25753C15.8286 6.25753 16.5311 6.24477 17.0267 5.80513C17.5017 5.38366 17.6171 4.69105 17.848 3.30583L17.9545 2.66663"  stroke={color} stroke-width="1.5" stroke-linejoin="round"/>
</svg>
  );
}