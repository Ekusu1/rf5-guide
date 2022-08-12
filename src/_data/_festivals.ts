import {RfSeasons, RfFestivalTypes} from './_enums';
import {RfFestival, RfDate} from '@/_data/_classes';

export const _festivals: RfFestival[] = [
	new RfFestival({
		name: 'New Year\'s Day',
		date: new RfDate(RfSeasons.Spring, 1),
		type: RfFestivalTypes.Dialogue,
		directive: false,
		making: [],
		directiveCost: 0,
		replay: false
	}),
	new RfFestival({
		name: 'Cooking Contest',
		date: new RfDate(RfSeasons.Spring, 6),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Winter, RfSeasons.Spring],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'Bean Toss Contest',
		date: new RfDate(RfSeasons.Spring, 10),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Spring],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'Fish Variety Contest',
		date: new RfDate(RfSeasons.Spring, 15),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Spring],
		directiveCost: 1000,
		replay: true
	}),
	new RfFestival({
		name: 'Flower Festival',
		date: new RfDate(RfSeasons.Spring, 19),
		type: RfFestivalTypes.Dialogue,
		directive: true,
		making: [RfSeasons.Spring],
		directiveCost: 1500,
		replay: false
	}),
	new RfFestival({
		name: 'Harvest Festival',
		date: new RfDate(RfSeasons.Spring, 28),
		type: RfFestivalTypes.Contest,
		directive: false,
		making: [RfSeasons.Spring],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'Beach Day',
		date: new RfDate(RfSeasons.Summer, 1),
		type: RfFestivalTypes.Dialogue,
		directive: false,
		making: [],
		directiveCost: 0,
		replay: false
	}),
	new RfFestival({
		name: 'Buff-a-Move',
		date: new RfDate(RfSeasons.Summer, 11),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Spring, RfSeasons.Summer],
		directiveCost: 1000,
		replay: true
	}),
	new RfFestival({
		name: 'Buddy Battle',
		date: new RfDate(RfSeasons.Summer, 15),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Summer],
		directiveCost: 1000,
		replay: true
	}),
	new RfFestival({
		name: 'Seaside Lights Festival',
		date: new RfDate(RfSeasons.Summer, 19),
		type: RfFestivalTypes.Dialogue,
		directive: false,
		making: [RfSeasons.Summer],
		directiveCost: 1500,
		replay: false
	}),
	new RfFestival({
		name: 'Harvest Festival',
		date: new RfDate(RfSeasons.Summer, 28),
		type: RfFestivalTypes.Contest,
		directive: false,
		making: [RfSeasons.Summer],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'Handicraft Contest',
		date: new RfDate(RfSeasons.Autumn, 3),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Summer, RfSeasons.Autumn],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'Valentine\'s Day',
		date: new RfDate(RfSeasons.Autumn, 12),
		type: RfFestivalTypes.Dialogue,
		directive: false,
		making: [RfSeasons.Autumn],
		directiveCost: 1500,
		replay: false
	}),
	new RfFestival({
		name: 'Eating Contest',
		date: new RfDate(RfSeasons.Autumn, 15),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Autumn],
		directiveCost: 1000,
		replay: true
	}),
	new RfFestival({
		name: 'Tricky Treats',
		date: new RfDate(RfSeasons.Autumn, 19),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Autumn],
		directiveCost: 1500,
		replay: false
	}),
	new RfFestival({
		name: 'White Day',
		date: new RfDate(RfSeasons.Autumn, 25),
		type: RfFestivalTypes.Dialogue,
		directive: false,
		making: [RfSeasons.Autumn],
		directiveCost: 1500,
		replay: false
	}),
	new RfFestival({
		name: 'Harvest Contest',
		date: new RfDate(RfSeasons.Autumn, 28),
		type: RfFestivalTypes.Contest,
		directive: false,
		making: [RfSeasons.Autumn],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'Snow Brawl',
		date: new RfDate(RfSeasons.Winter, 3),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Autumn, RfSeasons.Winter],
		directiveCost: 1000,
		replay: true
	}),
	new RfFestival({
		name: 'Squid Catch Contest',
		date: new RfDate(RfSeasons.Winter, 13),
		type: RfFestivalTypes.Contest,
		directive: true,
		making: [RfSeasons.Winter],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'Christmas',
		date: new RfDate(RfSeasons.Winter, 25),
		type: RfFestivalTypes.Dialogue,
		directive: false,
		making: [RfSeasons.Winter],
		directiveCost: 1500,
		replay: false
	}),
	new RfFestival({
		name: 'Harvest Festival',
		date: new RfDate(RfSeasons.Winter, 28),
		type: RfFestivalTypes.Contest,
		directive: false,
		making: [RfSeasons.Winter],
		directiveCost: 1000,
		replay: false
	}),
	new RfFestival({
		name: 'New Year\'s Eve',
		date: new RfDate(RfSeasons.Winter, 30),
		type: RfFestivalTypes.Dialogue,
		directive: false,
		making: [],
		directiveCost: 0,
		replay: false
	})
];
