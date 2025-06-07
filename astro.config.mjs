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
	      	social: [
        		{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/saddlenet' },
        		{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/EbqMaVB' },
        		{ icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/saddle.network' },
			],
			sidebar: [
				{
					label: 'Infrastructure',
					items: [
						'infra/hosts',
						'infra/asns',
						'infra/ips',
						'infra/peering',
						'infra/pops',
						{
							label: 'Anycast Infrastructure',
							autogenerate: { directory: 'infra/anycast' },
					  	},
					  ],
				},
				{
					label: 'Networks',
					autogenerate: { directory: 'infra/nets' },
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
