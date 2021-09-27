import * as React from "react";

export const BadgeEdge = React.memo(({
	fill = "#f55760",
	svgProps,
}:{
	fill?: string;
	svgProps?: any;
	}) => {
  return (
	<svg
	  data-name="badge-edge"
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 59.26 32"
	  {...svgProps}
	>
	 <path
			d="M47.23 32.3h3.56a3.7 3.7 0 003.62-2.94l4.78-23a4 4 0 00-3.94-4.84h-2.84z"
			transform="translate(-47.23 -1.54)"
			fill={fill}
		/>
	</svg>
  )
});