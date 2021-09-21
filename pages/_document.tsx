import React from 'react';
import _ from 'lodash';

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

import autoprefixer from "autoprefixer";
import postcss from 'postcss';


export default class MyDocument extends Document {
  render() {
	return (
	  <Html lang="ru">
		<Head>
		  <meta charSet="utf-8" />
		  {/* Use minimum-scale=1 to enable GPU rasterization */}
		  <meta
				name="viewport"
				content="maximum-scale=5, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
				key='viewport'
		  />
		  <meta name='description' content='Сеть винных магазинов. 60 000 наименований вин и алкоголя. Отзывы и рейтинги. Высокие стандарты сервиса для частных и корпоративных клиентов.
' />
		  {/* PWA primary color */}
		  <meta
				name="theme-color"
				content={''}
		  />
		</Head>
		<body>
		  <Main />
		  <NextScript />
		</body>
	  </Html>
	);
  }
}

if (!_.get(process, 'browser')) {
  MyDocument.getInitialProps = async ctx => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
	  originalRenderPage({
		/* eslint-disable react/display-name */
		enhanceApp: App => props => sheets.collect(<App {...props} />),
	  });

	const initialProps = await Document.getInitialProps(ctx);

	const css = sheets.toString();
	const _prefixedCss = await postcss([
	  autoprefixer({ overrideBrowserslist: ['last 100 version'] }),
	]).process(css, { from: 'css.css', to: 'prefixedCss.css' });

	let prefixedCss = _prefixedCss.css;
	_prefixedCss.warnings().forEach(warn => {
	  prefixedCss = css;
	  console.warn(warn.toString());
	});

	return {
	  ...initialProps,
	  styles: [
		<React.Fragment key="styles">
		  {initialProps.styles}
		  <style id="jss-server-size" dangerouslySetInnerHTML={{ __html: prefixedCss }}/>
		</React.Fragment>,
	  ],
	};
  };
}