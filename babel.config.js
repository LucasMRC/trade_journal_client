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
						'@config': './src/config',
						'@utils': './src/utils',
						'@components': './src/components'
					}
				}
			],
			[
				"module:react-native-dotenv", {
					"moduleName": "@env",
					"path": "./.env",
					"blocklist": null,
					"allowlist": null,
					"safe": false,
					"allowUndefined": false,
					"verbose": false
				}
			]
		]
	};
};
