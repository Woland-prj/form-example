import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			brand: '#009C4D',
			darkGreen: '#00733A',
			black: '#000000',
			white: '#FFFFFF',
			gray: '#AFAFAF',
			expiredRed: '#FF5B5B',
			freeBlue: '#52ADFF',
			deadlineRed: '#FFE0E0',
			deadlineYellow: '#FFE0E0',
			deadlineGreen: '#FFE0E0',
		},
	},
	plugins: [],
}
export default config
