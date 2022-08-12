import {isBoolean} from 'lodash';

export function enumValues(inputEnum: object) {
	return Object.entries(inputEnum).filter(([,v])=>!isBoolean(v)).map(e => e[1])
}
export function enumKeys(inputEnum: object) {
	return Object.entries(inputEnum).filter(([,v])=>!isBoolean(v)).map(e => e[0])
}

export enum RfSeasons {
	Spring = 'Spring',
	Summer = 'Summer',
	Autumn = 'Autumn',
	Winter = 'Winter'
}

export enum RfFestivalTypes {
	Dialogue = 'Dialogue',
	Contest = 'Contest'
}

export enum RfCharacterTypes {
	Player = 'Player',
	Bachelorettes = 'Bachelorettes',
	Bachelors = 'Bachelors',
	Villagers = 'Villagers',
	Children = 'Children',
	Guests = 'Guests'
}

export enum RfCharacterGender {
	Male = 'Male',
	Female = 'Female'
}

export enum RfEventType {
	Festival = 'Festival',
	Birthday = 'Birthday',
	Other = 'Other',
}

export enum RfItemCategory {
	Other = 'Other'
}

export enum RfCropType {
	Crop = 'Crop',
	Wild = 'Wild',
	GiantCrop = 'Giant Crop',
	Flower = 'Flower',
	GiantFlower = 'Giant Flower',
	Other = 'Other'
}
