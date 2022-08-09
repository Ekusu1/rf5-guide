import {GiftList} from '@/_data/_interfaces';
import {CharacterGender, CharacterTypes, FestivalTypes, RfEventType, Seasons} from '@/_data/_enums';

export class RfDate {
	season: Seasons;
	day: number;

	constructor(season: Seasons = Seasons.Winter, day = 99) {
		this.season = season;
		this.day = day;
	}
}

export class Character {
	type: CharacterTypes;
	name: string;
	gender: CharacterGender;
	birthday?: RfDate;
	gifts?: GiftList;

	constructor(data: Character) {
		this.type = data.type;
		this.name = data.name;
		this.gender = data.gender;
		this.birthday = data.birthday;
		this.gifts = data.gifts;
	}
}

export class Festival {
	name: string;
	date: RfDate;
	type: FestivalTypes;
	directive: boolean;
	making?: Seasons[];
	directiveCost?: number;
	replay?: boolean;

	constructor(data: Festival) {
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
	target: Character | Festival;

	get name(): string {
		return this.target.name;
	}

	get type(): RfEventType {
		if (this.target instanceof Festival) {
			return RfEventType.Festival;
		}
		return RfEventType.Birthday;
	}

	get date(): RfDate | undefined {
		if (this.target instanceof Festival) {
			return this.target.date;
		}
		return this.target.birthday;
	}

	get sortKey(): number {
		if (this.date?.season) {
			const {season, day} = this.date;

			return {
				[Seasons.Spring]: 100,
				[Seasons.Summer]: 200,
				[Seasons.Autumn]: 300,
				[Seasons.Winter]: 400
			}[season] + day;
		}

		return 999;
	}

	constructor(target: Festival | Character) {
		this.target = target;
	}
}
