<template>
    <Collapsable :title="title" class="character-settings">
        <div class="player-grid p-3">
            <div class="grid-row" v-if="showToggle">
                <label>Enabled</label>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" v-model="enabled">
                    <label class="form-check-label"></label>
                </div>
            </div>

            <label>Gender</label>
            <div class="btn-group" role="group">
                <template v-for="g in enumKeys(Genders)" :key="g">
                    <input type="radio" class="btn-check" :checked="gender === g">
                    <label class="btn" :class="'btn-outline-'+g.toLowerCase()"
                        @click="gender = g"
                    >
                        {{ g }}
                    </label>
                </template>
            </div>

            <label>Name</label>
            <input type="text" class="form-control" v-model="name">

            <label>Birthday</label>
            <div class="input-group">
                <select class="form-control" v-model="birthdaySeason">
                    <option v-for="season in enumKeys(Seasons)" :key="season"
                            :value="season"
                    >
                        {{ season }}
                    </option>
                </select>
                <select class="form-control" v-model="birthdayDay">
                    <option v-for="day in Days" :key="day" :value="day">{{ day }}</option>
                </select>
            </div>

            <div class="grid-row" v-if="showMarriedTo">
                <label>Married to</label>
                <select class="form-control" v-model="marriedTo">
                    <option value=""></option>
                    <optgroup v-for="(characters, label) in MarriageOptions" :key="label" :label="label">
                        <option v-for="({name}, i) in characters" :key="i"
                                :value="name"
                        >
                            {{ name }}
                        </option>
                    </optgroup>
                </select>
            </div>
        </div>
    </Collapsable>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Inject, Prop} from 'vue-property-decorator';
import {RfCharacter, RfDate, RfSettings} from '@/_data/_classes';
import {enumKeys, RfCharacterGender, RfCharacterTypes, RfSeasons} from '@/_data/_enums';
import Collapsable from '@/components/Collapsable.vue';
import {_characters} from '@/_data/_characters';
import {groupBy} from 'lodash';
import {RfCharacterSettings} from '@/_data/_interfaces';

@Options({
    name: 'CharacterSettings',
    components: {Collapsable}
})
export default class CharacterSettings extends Vue {
    @Inject('settings') readonly settings!: RfSettings;
    @Prop(String) readonly searchKey!: keyof RfSettings;

    get title(): string {
        return this.searchKey.slice(0, 1).toUpperCase() + this.searchKey.slice(1);
    }

    get characterSettings(): RfCharacterSettings {
        return this.settings[this.searchKey] as RfCharacterSettings;
    }

    get character(): RfCharacter {
        return _characters.find(e => e.searchKey === this.searchKey && e.gender === this.gender) as RfCharacter;
    }

    get characterOpposite(): RfCharacter {
        return _characters.find(e => e.searchKey === this.searchKey && e.gender !== this.gender) as RfCharacter;
    }

    get enabled(): boolean {
        return this.characterSettings.enabled as boolean;
    }

    set enabled(enabled: boolean) {
        this.characterSettings.enabled = enabled;
        this.character.enabled = enabled;
        this.characterOpposite.enabled = false;
    }

    get gender(): RfCharacterGender {
        return this.characterSettings.gender;
    }

    set gender(gender: RfCharacterGender) {
        this.characterSettings.gender = gender;
        this.character.enabled = this.enabled;
        this.characterOpposite.enabled = false;
    }

    get name(): string {
        return this.character.name;
    }

    set name(name: string) {
        this.character.name = name;
        this.characterSettings.character.name = name;
    }

    get birthdaySeason(): RfSeasons {
        return this.character.birthday.season;
    }

    set birthdaySeason(seasons: RfSeasons) {
        this.character.birthday = new RfDate(seasons, this.birthdayDay);
        this.characterSettings.character.birthday = new RfDate(seasons, this.birthdayDay);
    }

    get birthdayDay(): number {
        return this.character.birthday.day;
    }

    set birthdayDay(day: number) {
        this.character.birthday = new RfDate(this.birthdaySeason, day);
        this.characterSettings.character.birthday = new RfDate(this.birthdaySeason, day);
    }

    get marriedTo(): string {
        return this.characterSettings.marriedTo || '';
    }

    set marriedTo(marriedTo: string) {
        this.characterSettings.marriedTo = marriedTo;
    }

    get showToggle(): boolean {
        return this.character.type === RfCharacterTypes.Children;
    }

    get showMarriedTo(): boolean {
        return this.character.type === RfCharacterTypes.Player;
    }

    Genders = RfCharacterGender;
    Seasons = RfSeasons;
    Days = Array(30).fill('').map((v, i) => i + 1);

    MarriageOptions = groupBy(_characters
            .filter(e => [RfCharacterTypes.Bachelorettes, RfCharacterTypes.Bachelors].includes(e.type)),
        'gender'
    );

    enumKeys = enumKeys;
}
</script>
<style lang="scss" scoped>
.character-settings {
    .player-grid {
        display: grid;
        grid-template-columns: fit-content(100px) minmax(auto, 300px);
        grid-auto-rows: auto;
        grid-gap: map-get($spacers, 2);
        align-items: center;

        label {
            font-weight: bold;
        }
    }
}
</style>
