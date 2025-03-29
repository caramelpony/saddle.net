// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeObsidian()],
			title: 'Saddle Network',
			social: {
				telegram: 'https://t.me/saddlenet',
				discord: 'https://discord.gg/EbqMaVB',
				blueSky: 'https://bsky.app/profile/saddle.network',
			},
			sidebar: [
				{
					label: 'Infrastructure',
					
					autogenerate: { directory: 'infra' },
				},
				{
					label: 'Commercial Services',
					autogenerate: { directory: 'ext-srv' },
				},
				{
					label: 'Internal Services',
					items: [
					  'srv/home',
					  // A nested group of links for seasonal constellations.
					  {
						label: 'Communications',
						autogenerate: { directory: 'srv/comms' },
					  },
					],
				},
			],
		}),
	],
});
