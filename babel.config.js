module.exports = function(api) {
	api.cache(true);
	return {
    	presets: ['babel-preset-expo'],
    	plugins: [
      		[
				'module-resolver',
				{
					alias: {
						'@': './src',
						'@assets': './assets',
						'@screens': './src/screens',
						'@redux': './src/redux',
						'@api': './src/api',
						'@utils': './src/utils',
						'@components': './src/components'
					}
				}
			]
		]
	};
};
