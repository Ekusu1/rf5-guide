import {Seasons, FestivalTypes} from './_enums';
import {Festival} from '@/_data/_classes';

export const _festivals: Festival[] = [
	new Festival({
		name: 'New Year\'s Day',
		date: {season: Seasons.Spring, day: 1},
		type: FestivalTypes.Dialogue,
		directive: false,
		making: [],
		directiveCost: 0,
		replay: false
	}),
	new Festival({
		name: 'Cooking Contest',
		date: {season: Seasons.Spring, day: 6},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Winter, Seasons.Spring],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'Bean Toss Contest',
		date: {season: Seasons.Spring, day: 10},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Spring],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'Fish Variety Contest',
		date: {season: Seasons.Spring, day: 15},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Spring],
		directiveCost: 1000,
		replay: true
	}),
	new Festival({
		name: 'Flower Festival',
		date: {season: Seasons.Spring, day: 19},
		type: FestivalTypes.Dialogue,
		directive: true,
		making: [Seasons.Spring],
		directiveCost: 1500,
		replay: false
	}),
	new Festival({
		name: 'Harvest Festival',
		date: {season: Seasons.Spring, day: 28},
		type: FestivalTypes.Contest,
		directive: false,
		making: [Seasons.Spring],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'Beach Day',
		date: {season: Seasons.Summer, day: 1},
		type: FestivalTypes.Dialogue,
		directive: false,
		making: [],
		directiveCost: 0,
		replay: false
	}),
	new Festival({
		name: 'Buff-a-Move',
		date: {season: Seasons.Summer, day: 11},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Spring, Seasons.Summer],
		directiveCost: 1000,
		replay: true
	}),
	new Festival({
		name: 'Buddy Battle',
		date: {season: Seasons.Summer, day: 15},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Summer],
		directiveCost: 1000,
		replay: true
	}),
	new Festival({
		name: 'Seaside Lights Festival',
		date: {season: Seasons.Summer, day: 19},
		type: FestivalTypes.Dialogue,
		directive: false,
		making: [Seasons.Summer],
		directiveCost: 1500,
		replay: false
	}),
	new Festival({
		name: 'Harvest Festival',
		date: {season: Seasons.Summer, day: 28},
		type: FestivalTypes.Contest,
		directive: false,
		making: [Seasons.Summer],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'Handicraft Contest',
		date: {season: Seasons.Autumn, day: 3},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Summer, Seasons.Autumn],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'Valentine\'s Day',
		date: {season: Seasons.Autumn, day: 12},
		type: FestivalTypes.Dialogue,
		directive: false,
		making: [Seasons.Autumn],
		directiveCost: 1500,
		replay: false
	}),
	new Festival({
		name: 'Eating Contest',
		date: {season: Seasons.Autumn, day: 15},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Autumn],
		directiveCost: 1000,
		replay: true
	}),
	new Festival({
		name: 'Tricky Treats',
		date: {season: Seasons.Autumn, day: 19},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Autumn],
		directiveCost: 1500,
		replay: false
	}),
	new Festival({
		name: 'White Day',
		date: {season: Seasons.Autumn, day: 25},
		type: FestivalTypes.Dialogue,
		directive: false,
		making: [Seasons.Autumn],
		directiveCost: 1500,
		replay: false
	}),
	new Festival({
		name: 'Harvest Contest',
		date: {season: Seasons.Autumn, day: 28},
		type: FestivalTypes.Contest,
		directive: false,
		making: [Seasons.Autumn],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'Snow Brawl',
		date: {season: Seasons.Winter, day: 3},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Autumn, Seasons.Winter],
		directiveCost: 1000,
		replay: true
	}),
	new Festival({
		name: 'Squid Catch Contest',
		date: {season: Seasons.Winter, day: 13},
		type: FestivalTypes.Contest,
		directive: true,
		making: [Seasons.Winter],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'Christmas',
		date: {season: Seasons.Winter, day: 25},
		type: FestivalTypes.Dialogue,
		directive: false,
		making: [Seasons.Winter],
		directiveCost: 1500,
		replay: false
	}),
	new Festival({
		name: 'Harvest Festival',
		date: {season: Seasons.Winter, day: 28},
		type: FestivalTypes.Contest,
		directive: false,
		making: [Seasons.Winter],
		directiveCost: 1000,
		replay: false
	}),
	new Festival({
		name: 'New Year\'s Eve',
		date: {season: Seasons.Winter, day: 30},
		type: FestivalTypes.Dialogue,
		directive: false,
		making: [],
		directiveCost: 0,
		replay: false
	})
];
