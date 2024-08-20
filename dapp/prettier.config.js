const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
	...styleguide,
	semi: false,
	printWidth: 120,
	jsxSingleQuote: true,
	plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
