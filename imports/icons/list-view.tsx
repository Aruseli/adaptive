import * as React from "react";

export const ListView = React.memo<any>(({
	fill = "#f55760",
	svgProps,
}:{
	fill?: string;
	svgProps?: any;
	}) => {
  return (
	<svg
	  data-name="list-view"
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 20 19"
		fill="none"
		width={20}
		height={19}
	  {...svgProps}
	>
	 <path
			d="M0 8.333a1 1 0 011-1h1.448a1 1 0 011 1V10a1 1 0 01-1 1H1a1 1 0 01-1-1V8.333zM0 1a1 1 0 011-1h1.448a1 1 0 011 1v1.667a1 1 0 01-1 1H1a1 1 0 01-1-1V1zM0 15.667a1 1 0 011-1h1.448a1 1 0 011 1v1.666a1 1 0 01-1 1H1a1 1 0 01-1-1v-1.666zM6.897 1.733a1 1 0 011-1H19a1 1 0 011 1v.2a1 1 0 01-1 1H7.897a1 1 0 01-1-1v-.2zM6.897 9.067a1 1 0 011-1H19a1 1 0 011 1v.2a1 1 0 01-1 1H7.897a1 1 0 01-1-1v-.2zM6.897 16.4a1 1 0 011-1H19a1 1 0 011 1v.2a1 1 0 01-1 1H7.897a1 1 0 01-1-1v-.2z"
			fill={fill}
		/>
	</svg>
  )
});
