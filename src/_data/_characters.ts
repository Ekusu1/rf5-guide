import {RfSeasons, RfCharacterTypes, RfCharacterGender} from './_enums';
import {RfCharacter, RfDate, RfSettings} from '@/_data/_classes';


const settings = RfSettings.load();

export const _characters: RfCharacter[] = [
	new RfCharacter({
		...{
			type: RfCharacterTypes.Player,
			name: 'Ares',
			gender: RfCharacterGender.Male,
			birthday: new RfDate(RfSeasons.Spring, 1),
			searchKey: 'player'
		},
		...settings.getCharacterData('player', RfCharacterGender.Male)
	}),
	new RfCharacter({
		...{
			type: RfCharacterTypes.Player,
			name: 'Alice',
			gender: RfCharacterGender.Female,
			birthday: new RfDate(RfSeasons.Spring, 1),
			searchKey: 'player'
		},
		...settings.getCharacterData('player', RfCharacterGender.Female)
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelorettes,
		name: 'Beatrice',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Winter, 14),
		gifts: {
			love: ['Meteor Strawberry Jam', ' Strawberry Jam', ' Strawberry Milk', ' Gold Juice', ' Mixed Smoothie'],
			like: ['Strawberry', ' Sultan Strawberry', ' Meteor Strawberry', ' Jam Roll', ' Mixed Juice', ' Apple', ' Baked Apple', ' Apple Jam', ' Apple Pie', ' Cake', ' Fruit Sandwich', ' Flan', ' Pumpkin Flan', 'Bread'],
			dislike: ['Doria', ' Seafood Doria', ' Gratin', ' Seafood Gratin', ' Object X', 'Trash Items'],
			hate: ['Hot Milk', ' Hot Chocolate', ' Union Stew']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelorettes,
		name: 'Fuuka',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Summer, 29),
		gifts: {
			love: ['Golden Salmon', 'Golden Octopus', 'Marlin', 'Emerald'],
			like: ['Fish', 'Crystal Flowers', 'Platinum', 'Gold', 'Silver', 'Love Crystal', 'Ruby', 'Diamond', 'Aquamarine', 'Amethyst', 'Crystal Skull'],
			dislike: ['Carrot', 'Royal Carrot', 'Green Pepper', 'Green Pepper Rex', 'Pickles', 'Pickled Turnip', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Onion', 'Ultra Onion', 'Pickle Mix']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelorettes,
		name: 'Lucy',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Autumn, 16),
		gifts: {
			love: ['Glitter Snapper', 'Tuna', 'Salmon Onigiri', 'Sacred Pole', 'Famous Pole'],
			like: ['Fish', 'Fishing Poles', 'Milk', 'Fruit', 'Monkey Plush'],
			dislike: ['Spider\'s Thread', 'Ghost Hood', 'Object X', 'Scrap Metal', 'Trash'],
			hate: ['Devil Horn', 'Devil Blood', 'Skull']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelorettes,
		name: 'Ludmila',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Winter, 5),
		gifts: {
			love: ['Emery Flower', 'Giant Emery Flower', 'White Crystal', 'Giant White Crystal', 'Salted R. Trout'],
			like: ['Non grass Flowers', 'Flower Seeds', 'R. Trout', 'Rainbow Sashimi', 'Handknit Scarf', 'Fluffy Scarf', 'Thread', 'Rings', 'Love Scale', 'Prelude to Love'],
			dislike: ['All other Furs and Downs', 'Object X', 'Trash'],
			hate: ['Crimson Fur', 'Quality Fur']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelorettes,
		name: 'Priscilla',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Spring, 27),
		gifts: {
			love: ['Cake', 'Chocolate Cake', 'Chocolate Cookie', 'Steamed Chocolate Cake', 'Yam of the Ages'],
			like: ['Apple Pie', 'Big Charm Blue', 'Charm Blue', 'Cheesecake', 'Chocolate', 'Feathers', 'Fireflower', 'Flan', 'French Toast', 'Giant Fireflower', 'Hot Chocolate', 'Hot Milk', 'King Pink Cat', 'Pancake', 'Pink Cat'],
			dislike: ['Fish (except Squid)', 'Liquid (All)', 'Mushrooms', 'Object X', 'Trash Items'],
			hate: ['Squid (All)']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelorettes,
		name: 'Scarlett',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Summer, 18),
		gifts: {
			love: ['Tempura Bowl', 'Golden Squid Rice', 'Tempura Udon', 'Rock Fish Sashimi'],
			like: ['All other Rice dishes', 'Vegetable Fry', 'Boiled Spinach'],
			dislike: ['Yosenabe', 'Okonomiyaki', 'Union Stew', 'Cabbage Cakes', 'Object X', 'Trash Items'],
			hate: ['Leek', 'Big Leek', 'Onion', 'Ultra Onion']
		}
	}),


	new RfCharacter({
		type: RfCharacterTypes.Bachelors,
		name: 'Cecil',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Spring, 12),
		gifts: {
			love: ['Pink Melon', 'Relax Tea', 'Fruit Sandwich', 'Ammonite'],
			like: ['Crystal Skull', 'Brooches', 'Fruits', 'Fish Fossil', 'Ancient Fish Fin', 'Dragon Bones', 'Unbroken Ivory Tusk', 'Conqueror Melon'],
			dislike: ['Cheese', 'Milk', 'Yogurt', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Hot Milk', 'Milk Porridge']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelors,
		name: 'Lucas',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Spring, 1),
		gifts: {
			love: ['Tempura', 'Fried Udon', 'Tempura Udon', 'Curry Udon'],
			like: ['Crystals', 'Liquids', 'Udon', 'Curry Rice', 'Mysterious Powder', 'Can', 'Rare Can'],
			dislike: ['Object X', 'All other trash items']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelors,
		name: 'Martin',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Autumn, 8),
		gifts: {
			love: ['Draconic Stone', 'Orichalcum', 'Fruit Sandwich'],
			like: ['Ores', 'Fruits', 'Scrap Metal', 'Scrap Metal+', 'Ammonite', 'Pink Melon', 'Conqueror Melon'],
			dislike: ['Mushrooms', 'Abalone', 'Blowfish', 'Object X', 'Dry Grass', 'Weeds', 'Failed Dish', 'Super Failed Dish', 'Stone', 'Branch', 'Empty Can', 'Boot'],
			hate: ['Awabi butter', 'Blowfish Sashimi', 'Grilled Blowfish']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelors,
		name: 'Murakumo',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Summer, 2),
		gifts: {
			love: ['Power Gloves', 'Champion Belt', 'Hero\'s Proof', 'Grilled Skipjack', 'Union Stew'],
			like: ['Golem stones', 'Big Giant\'s Nail', 'Dragon Fang', 'Blue Giant\'s Glove', 'Pizza', 'Seafood Pizza', 'Dumplings', 'Meat Dumpling', 'Chinese Manju', 'Gyoza', 'Steamed Gyoza', 'Boiled Gyoza'],
			dislike: ['Cake', 'Cheesecake', 'Pancakes', 'French Toast', 'Chocolate', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Chocolate Cake', 'Chocolate Cookies', 'Chocolate Sponge']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelors,
		name: 'Reinhard',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Autumn, 30),
		gifts: {
			love: ['Farm tools over level 45', 'Sandwich', 'Toast', 'Jam Roll'],
			like: ['Formuade', 'Invinciroid', 'Cold Medicine', 'Object X', 'Silver Boots', 'Iron Shield', 'Mail', 'Turnip Seeds', 'Pink Turnip Seeds', 'Strawberry Seeds', 'Yam Seeds', 'Potato Seeds', 'Failed Dish', 'Disgusting Food'],
			dislike: ['Crystals', 'Gems', 'All other Trash items'],
			hate: ['Cores']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Bachelors,
		name: 'Ryker',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Winter, 27),
		gifts: {
			love: ['Devil Horn', 'Devil Blood', 'Mermaid Scales', 'Ice Cream', 'Croquettes'],
			like: ['Fairy Elixir', 'Great Hammer Shard', 'Ancient Fish Fin', 'Poison King', 'Wind Crystal', 'Popcorn', 'Roasted Yam', 'Glazed Yam', 'French Fries', 'Toast', 'Jam Roll', 'Baked Onigiri', 'Baked Apple', 'Sweet Potato'],
			dislike: ['Curry Rice', 'Curry Manju', 'Curry Bread', 'Dry Curry', 'Curry Udon', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Ultimate Curry', 'Royal Curry']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Elsje',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Winter, 29),
		gifts: {
			love: ['Cheesecake', 'Chocolate Sponge', 'Chocolate Cake', 'Pancakes'],
			like: ['Apple Pie', 'Bread', 'Chocolate', 'Chocolate Cookies', 'Flan', 'French Toast', 'Fruit Sandwich', 'Grape Liqueur', 'Hot Chocolate', 'Onigiri', 'Salad', 'Salmon Onigiri', 'Sandwich', 'Toast', 'Yam', 'Yam of the Ages'],
			dislike: ['Object X', 'Seeds (except Gold Cabbage Seeds and Gold Turnip Seeds)', 'Trash'],
			hate: ['Gold Cabbage Seeds', 'Gold Turnip Seeds']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Darroch',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Summer, 13),
		gifts: {
			love: ['Splash Star', 'Gravity Hammer', 'Dragonic Stone', 'Orichalcum', 'Emerald'],
			like: ['Crystals', 'Minerals', 'Scrap Metal', 'Fried Fish dishes', 'Double Steel', 'Light Ore', 'White Stone', 'Glitter Stone', 'Rune Stone Fragment'],
			dislike: ['Pendants', 'Earrings', 'Annette\'s Necklace', 'Object X', 'Trash'],
			hate: ['Hand-Knit Scarf', 'Fluffy Scarf']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Livia',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Spring, 16),
		gifts: {
			love: ['Pancakes', 'Pumpkin Flan', 'Meteor Pumpkin Flan'],
			like: ['Cookie', 'Donuts', 'Flan', 'Ice Cream', 'Toyherb', 'Chocolate Cookies', 'Strawberry Jam', 'Grape Jam', 'Apple Jam', 'Rice Porridge', 'Milk Porridge', 'French Toast', 'Honey'],
			dislike: ['Horns', 'Dragon Fang', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Dragon Bones']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Hina',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Winter, 16),
		gifts: {
			love: ['Mixed Juice', 'Mixed Smoothie', 'Fruit Smoothie', 'Stew'],
			like: ['Juice', 'Ice Cream', 'Omelet Rice', 'Hot Chocolate', 'Strawberry Milk', 'Hot Milk', 'Seafood Doria', 'Seafood Gratin', 'Doria', 'Gratin'],
			dislike: ['Green Pepper', 'Tomato', 'Titan Tomato', 'Green Pepper Rex', 'Object X', 'Trash'],
			hate: ['Mushroom', 'Monarch Mushroom']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Simone',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Summer, 5),
		gifts: {
			love: ['Invinciroid', 'Levelizer', 'Sandwich', 'Syringe'],
			like: ['Brooches', 'Mushroom', 'Relax Tea', 'Medicines', 'Wine', 'Grape Liqueur', 'Vegetable Juice', 'Rice Porridge', 'Monarch Mushroom'],
			dislike: ['Apple', 'Tomato', 'Tomato Seeds', 'Mealy Apple', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Titan Tomato']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Terry',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Summer, 24),
		gifts: {
			love: ['Star Pendant', 'Sun Pendant', 'Field Pendant', 'Dew Pendant', 'Earth Pendant'],
			like: ['Donuts', 'Milk', 'Toast', 'Work Gloves', 'Gloves', 'Leather Belt', 'Proof of Wisdom', 'Raisin Bread', 'Jam Roll', 'Popcorn', 'Apple', 'Baked Apple', 'Mealy Apple'],
			dislike: ['Fruit Smoothie', 'Mixed Juice', 'Orange Juice', 'Mixed Smoothie', 'Strawberry Milk', 'Object X', 'Trash'],
			hate: ['Relax Tea']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Julian',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Winter, 27),
		gifts: {
			love: ['Ultimate Curry', 'Supreme Curry', 'Curry Rice', 'Omelet'],
			like: ['Curry Manju', 'Curry Udon', 'French Fries', 'Ice Cream', 'Curry Bread', 'Dry Curry', 'Pancakes', 'Orange Juice', 'Grape Juice', 'Apple Juice', 'Pineapple Juice', 'Fruit Juice', 'Strawberry Milk', 'Fruit Smoothie'],
			dislike: ['Green Pepper', 'Vegetable Juice', 'Veggie Smoothie', 'Green Pepper Rex', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Stew']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Randolph',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Autumn, 4),
		gifts: {
			love: ['Curry Bread', 'Curry Manju', 'Jam Roll'],
			like: ['Butter Roll', 'Bread', 'Raisin Bread', 'Steamed Bread', 'Toast', 'Pancakes', 'Cake', 'Chocolate Cake', 'Chocolate Sponge', 'Cheesecake', 'Dumplings', 'Basilisk Scale', 'Stone Dragon Scale'],
			dislike: ['Onigiri', 'Rice', 'Rice Porridge', 'Salmon Onigiri', 'Baked Onigiri', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Tempura Bowl', 'Egg Bowl', 'Milk Porridge']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Misasagi',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Summer, 14),
		gifts: {
			love: ['Tempura', 'Tempura Udon'],
			like: ['Wine', 'Grape Liqueur', 'Stew', 'Grilled Skipjack', 'Miso Eggplant', 'Grilled Miso', 'Boiled Rockfish', 'Egg Bowl', 'Magic Charm', 'Boiled Spinach', 'Rice Porridge', 'Udon', 'Baked Onigiri', 'Salmon Onigiri', 'Charm'],
			dislike: ['Seafood Doria', 'Doria', 'Seafood Gratin', 'Gratin', 'Cheese Fondue', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Pizza', 'Seafood Pizza']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Yuki',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Summer, 10),
		gifts: {
			love: ['Butter Roll'],
			like: ['Flour', 'Jam Roll', 'Raisin Bread', 'Risotto', 'Vegetable Juice', 'Seafood Gratin', 'Apple Pie', 'Sour Drop', 'Sweet Powder', 'Heavy Spice', 'Mixed Herbs'],
			dislike: ['Dumplings', 'Insect Carapace', 'Spider\'s Thread', 'Pretty Thread', 'Insect Horn', 'Object X', 'Trash'],
			hate: ['Viscous Liquid']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Heinz',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Spring, 7),
		gifts: {
			love: ['Crystal Skull'],
			like: ['Grilled Needlefish', 'Tuna Teriyaki', 'Gems', 'Ores', 'Frying Pan fish dishes'],
			dislike: ['All other medicines', 'Object X', 'Trash'],
			hate: ['Cold Medicine', 'Antidote Potion']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Palmo',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Spring, 9),
		gifts: {
			love: ['Fairy Elixir', 'Thunderbird Feather', 'Devil Horn'],
			like: ['Unbroken Ivory Tusk', 'Materials', 'Moving Branch', 'Thick Stick', 'Ancient Fish Feather Fins', 'Tablet of Truth', 'Quality Worn Cloth', 'Grimoire Scale', 'Big Bird\'s Comb', 'Wine'],
			dislike: ['Octopus', 'Squid', 'Sunsquid', 'Lamp Squid', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Octopus and squid dishes']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Villagers,
		name: 'Radea',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Summer, 26),
		gifts: {
			love: ['Dragon Fang', 'Dragon Scale', 'Basilisk Scale', 'Stone Dragon Scale', 'Grimoire Scale'],
			like: ['Pudding All other scales', 'Flan', 'Pumpkin Flan', 'Meteor Pumpkin Flan', 'Strawberry Jam', 'Grape Jam', 'Apple Jam', 'Grapes', 'Strawberry', 'Apple', 'Mealy Apple'],
			dislike: ['Devil Blood', 'Poison King', 'Paralysis Poison', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Dragon Bones', 'Viscous Liquid']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Guests,
		name: 'Margaret',
		gender: RfCharacterGender.Female,
		birthday: new RfDate(RfSeasons.Spring, 21),
		gifts: {
			love: ['Prelude to Love', 'Pineapple Juice'],
			like: ['All flowers', 'all fruits', 'Rainbow Waterpot', 'Honey', 'Sweets', 'Breads', 'Salad', 'Baked Apple', 'Dumplings', 'Strawberry Milk', 'Fruit Juice', 'Fruit Smoothie', 'Grape Juice', 'Relax Tea'],
			dislike: ['Skull', 'Squids', 'object X', 'Trash'],
			hate: ['Squid Dishes']
		}
	}),
	new RfCharacter({
		type: RfCharacterTypes.Guests,
		name: 'Doug',
		gender: RfCharacterGender.Male,
		birthday: new RfDate(RfSeasons.Autumn, 6),
		gifts: {
			love: ['Tempura Bowl'],
			like: ['Onigiri', 'Baked Onigiri', 'Salmon Onigiri', 'Rice', 'Bamboo Rice', 'Omelet Rice', 'Fried Rice', 'Risotto', 'Rice Porridge', 'Milk Porridge', 'Steamed Bread', 'Doria', 'Seafood Doria', 'Egg Bowl', 'French Toast'],
			dislike: ['Bread', 'Toast', 'Raisin Bread', 'Jam Roll', 'Butter Roll', 'Object X', 'Scrap Metal', 'Weeds', 'Withered Grass', 'Failed Dish', 'Disgusting Food', 'Rock', 'Branch', 'Can', 'Rare Can', 'Boot'],
			hate: ['Curry Bread', 'Cheese Bread']
		}
	}),
	new RfCharacter({
		...{
			type: RfCharacterTypes.Children,
			name: 'Elias',
			gender: RfCharacterGender.Male,
			birthday: new RfDate(RfSeasons.Spring, 1),
			gifts: {
				like: ['Cake', 'Doria', 'Gratin', 'Pizza'],
				dislike: ['Cake', 'Doria', 'Gratin', 'Pizza']
			},
			searchKey: 'child1'
		},
		...settings.getCharacterData('child1', RfCharacterGender.Male)
	}),
	new RfCharacter({
		...{
			type: RfCharacterTypes.Children,
			name: 'Ivan',
			gender: RfCharacterGender.Male,
			birthday: new RfDate(RfSeasons.Spring, 1),
			gifts: {
				like: ['Cake', 'Doria', 'Gratin', 'Pizza'],
				dislike: ['Cake', 'Doria', 'Gratin', 'Pizza']
			},
			searchKey: 'child2'
		},
		...settings.getCharacterData('child2', RfCharacterGender.Male)
	}),
	new RfCharacter({
		...{
			type: RfCharacterTypes.Children,
			name: 'Conan',
			gender: RfCharacterGender.Male,
			birthday: new RfDate(RfSeasons.Spring, 1),
			gifts: {
				like: ['Cake', 'Doria', 'Gratin', 'Pizza'],
				dislike: ['Cake', 'Doria', 'Gratin', 'Pizza']
			},
			searchKey: 'child3'
		},
		...settings.getCharacterData('child3', RfCharacterGender.Male)
	}),
	new RfCharacter({
		...{
			type: RfCharacterTypes.Children,
			name: 'Erica',
			gender: RfCharacterGender.Female,
			birthday: new RfDate(RfSeasons.Spring, 1),
			gifts: {
				like: ['Cake', 'Doria', 'Gratin', 'Pizza'],
				dislike: ['Cake', 'Doria', 'Gratin', 'Pizza']
			},
			searchKey: 'child1'
		},
		...settings.getCharacterData('child1', RfCharacterGender.Female)
	}),
	new RfCharacter({
		...{
			type: RfCharacterTypes.Children,
			name: 'Iris',
			gender: RfCharacterGender.Female,
			birthday: new RfDate(RfSeasons.Spring, 1),
			gifts: {
				like: ['Cake', 'Doria', 'Gratin', 'Pizza'],
				dislike: ['Cake', 'Doria', 'Gratin', 'Pizza']
			},
			searchKey: 'child2'
		},
		...settings.getCharacterData('child2', RfCharacterGender.Female)
	}),
	new RfCharacter({
		...{
			type: RfCharacterTypes.Children,
			name: 'Collette',
			gender: RfCharacterGender.Female,
			birthday: new RfDate(RfSeasons.Spring, 1),
			gifts: {
				like: ['Cake', 'Doria', 'Gratin', 'Pizza'],
				dislike: ['Cake', 'Doria', 'Gratin', 'Pizza']
			},
			searchKey: 'child3'
		},
		...settings.getCharacterData('child3', RfCharacterGender.Female)
	})
];
