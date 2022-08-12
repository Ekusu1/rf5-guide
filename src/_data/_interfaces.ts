import {RfCharacterGender} from '@/_data/_enums';
import {RfCharacter} from '@/_data/_classes';

export interface GiftList {
	love?: string[],
	like?: string[],
	neutral?: string[],
	dislike?: string[],
	hate?: string[],
}

export interface RfNavEntry {
	tab: string,
	label?: string,
	classes?: string,
	group?: string
}

export interface RfCharacterSettings {
	enabled?: boolean,
	gender: RfCharacterGender,
	character: Omit<Partial<RfCharacter>, 'gifts'> | Record<string, never>,
	marriedTo?: string
}
