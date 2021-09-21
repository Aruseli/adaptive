import * as React from "react";

export const BadgeWithBorder = React.memo(({
	fill = "#fff",
	stroke = "#000",
	svgProps,
}:{
	fill?: string;
	stroke?: string;
	svgProps?: any;
	}) => {
  return (
	<svg
	  data-name="Layer 2"
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 59.26 32"
	  {...svgProps}
	>
	  <path
		d="M53.92 30.24l5.77-25.33a2.84 2.84 0 00-2.77-3.47H4.33A2.84 2.84 0 001.5 4.3l.23 25.34a2.83 2.83 0 002.83 2.8h46.6a2.83 2.83 0 002.76-2.2z"
		transform="translate(-1 -.94)"
		fill={fill}
		stroke={stroke}
		strokeMiterlimit={10}
	  />
	</svg>
  )
})