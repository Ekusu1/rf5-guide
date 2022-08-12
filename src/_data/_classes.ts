import {GiftList, RfCharacterSettings} from '@/_data/_interfaces';
import {
	RfCharacterGender,
	RfCharacterTypes,
	RfCropType,
	RfEventType,
	RfFestivalTypes,
	RfItemCategory,
	RfSeasons
} from '@/_data/_enums';

export class RfDate {
	season: RfSeasons;
	day: number;

	get seasonShort(): string {
		return this.season.slice(0, 2);
	}

	get weekday() {
		const hol = [1, 7, 13, 19, 25];
		const weekDay = ['Hol', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

		return weekDay.reduce((r, wd, i) =>
			hol.map(e => e + i).includes(this.day) ? wd : r
		);
	}

	get sortKey(): number {
		const {season, day} = this;

		return {
			[RfSeasons.Spring]: 100,
			[RfSeasons.Summer]: 200,
			[RfSeasons.Autumn]: 300,
			[RfSeasons.Winter]: 400
		}[season] + day;
	}

	constructor(season: RfSeasons = RfSeasons.Winter, day = 99) {
		this.season = season;
		this.day = day;
	}
}

export class RfCharacter {
	type: RfCharacterTypes;
	name: string;
	gender: RfCharacterGender;
	birthday: RfDate | { season: RfSeasons, day: number };
	gifts?: GiftList;
	enabled?: boolean = true;
	searchKey?: string = '';

	constructor(data: RfCharacter) {
		this.type = data.type;
		this.name = data.name;
		this.gender = data.gender;
		this.birthday = data.birthday instanceof RfDate ? data.birthday : new RfDate(data.birthday.season, data.birthday.day);
		this.gifts = data.gifts;
		this.enabled = 'enabled' in data ? data.enabled : true;
		this.searchKey = data?.searchKey || '';
	}
}

export class RfFestival {
	name: string;
	date: RfDate;
	type: RfFestivalTypes;
	directive: boolean;
	making?: RfSeasons[];
	directiveCost?: number;
	replay?: boolean;

	constructor(data: RfFestival) {
		this.name = data.name;
		this.date = data.date;
		this.type = data.type;
		this.directive = data.directive;
		this.making = data.making;
		this.directiveCost = data.directiveCost;
		this.making = data.making;
	}
}

export class RfEvent {
	target: RfCharacter | RfFestival;

	get name(): string {
		return this.target.name;
	}

	get type(): RfEventType {
		if (this.target instanceof RfFestival) {
			return RfEventType.Festival;
		}
		return RfEventType.Birthday;
	}

	get date(): RfDate | undefined {
		if (this.target instanceof RfFestival) {
			return this.target.date;
		}
		return this.target.birthday as RfDate;
	}

	get sortKey(): number {
		return this.date?.sortKey || 999;
	}

	constructor(target: RfFestival | RfCharacter) {
		this.target = target;
	}
}

export class RfItem {
	category?: RfItemCategory = RfItemCategory.Other;
	name: string;
	buyPrice: number | null = null;
	sellPrice: number | null = null;
	description?: string = '';

	constructor(data: RfItem) {
		this.name = data.name;
		this.buyPrice = data?.buyPrice || null;
		this.sellPrice = data?.sellPrice || null;
		this.description = data?.description || '';
	}
}

export class RfCrop extends RfItem {
	cropType: RfCropType;
	goodSeasons: RfSeasons[];
	badSeasons: RfSeasons[];
	growTime: number | null = null;
	tree = false;
	regrows = false;
	seedBuyPrice: number | null = null;
	seedSellPrice: number | null = null;
	locations: string[] = [];


	constructor(data: RfCrop) {
		super(data);
		this.cropType = data.cropType;
		this.goodSeasons = data.goodSeasons;
		this.badSeasons = data.badSeasons;
		this.growTime = data?.growTime || null;
		this.tree = data.tree;
		this.regrows = data.regrows;
		this.seedBuyPrice = data?.seedBuyPrice || null;
		this.seedSellPrice = data?.seedSellPrice || null;
		this.locations = data.locations;
	}
}

export class RfSettings {
	player: RfCharacterSettings = {
		gender: RfCharacterGender.Female,
		character: {},
		marriedTo: ''
	}
	child1: RfCharacterSettings = {
		enabled: false,
		gender: RfCharacterGender.Female,
		character: {},
	}
	child2: RfCharacterSettings = {
		enabled: false,
		gender: RfCharacterGender.Female,
		character: {},
	}
	child3: RfCharacterSettings = {
		enabled: false,
		gender: RfCharacterGender.Female,
		character: {},
	}

	// playerGender: RfCharacterGender = RfCharacterGender.Female;
	// player: Omit<Partial<RfCharacter>, 'gifts'> = {gender: RfCharacterGender.Female};
	// marriedTo = '';
	//
	// child1Enabled = false;
	// child1Gender: RfCharacterGender = RfCharacterGender.Female;
	// child1: Omit<RfCharacter, 'gifts'> | Record<string, never> = {};
	//
	// child2Enabled = false;
	// child2Gender: RfCharacterGender = RfCharacterGender.Female;
	// child2: Omit<RfCharacter, 'gifts'> | Record<string, never> = {};
	//
	// child3Enabled = false;
	// child3Gender: RfCharacterGender = RfCharacterGender.Female;
	// child3: Omit<RfCharacter, 'gifts'> | Record<string, never> = {};

	getCharacterData (searchKey: keyof RfSettings, gender: RfCharacterGender): Record<string, any> {
		const data = this[searchKey] as RfCharacterSettings
		return {
			...{enabled: ('enabled' in data ? data.enabled : true) && data.gender === gender},
			...(data.gender === gender ? data.character : {})
		}
	}

	static load(): RfSettings {
		const instance = new RfSettings();
		const data = localStorage.getItem(RfSettings.name);
		data && Object.assign(instance, JSON.parse(data));
		return instance;
	}

	save() {
		localStorage.setItem(RfSettings.name, JSON.stringify(this));
	}
	reset() {
		localStorage.removeItem(RfSettings.name);
	}
}
