module.exports = function (eleventyConfig) {
	// Pass through static files directly
	eleventyConfig.addPassthroughCopy('src/images')
	eleventyConfig.addPassthroughCopy('src/style.css')
	eleventyConfig.addPassthroughCopy('src/assets')

	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	}
}

