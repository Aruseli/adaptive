import * as React from "react";

export const GridView = React.memo<any>(({
	fill = "#f55760",
	svgProps,
}:{
	fill?: any;
	svgProps?: any;
	}) => {
  return (
	<svg
	  data-name="grid-view"
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 20 20"
		fill="none"
		width={20}
		height={19}
	  {...svgProps}
	>
	 <path
			d="M8 11H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1zm-1 7H2v-5h5v5zM19 0h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1zm-1 7h-5V2h5v5zm1 4h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1zm-1 7h-5v-5h5v5zM8 0H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1zM7 7H2V2h5v5z"
			fill={fill}
		/>
	</svg>
  )
});
