<template>
    <div class="character-list">
        <Collapsable v-for="(characters, type) in groupedCharacters" :key="type" :title="type">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="character in characters" :key="character.name">
                    <CharacterListEntry :character="character" />
                </li>
            </ul>
        </Collapsable>
    </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {RfCharacter, RfSettings} from '@/_data/_classes';
import {_characters} from '@/_data/_characters';
import CharacterListEntry from '@/components/CharacterList/CharacterListEntry.vue';
import {groupBy} from 'lodash';
import {RfCharacterTypes} from '@/_data/_enums';
import Collapsable from '@/components/Collapsable.vue';
import {Inject} from 'vue-property-decorator';

@Options({
    name: 'CharacterList',
    components: {Collapsable, CharacterListEntry}
})
export default class CharacterList extends Vue {
    @Inject() readonly settings!: RfSettings;

    get groupedCharacters (): Record<string, RfCharacter[]> {
        console.log(_characters.filter(e => e.enabled));
        console.log(groupBy(_characters, 'type'));
        return groupBy(_characters.filter(e => e.enabled), e =>
            [RfCharacterTypes.Player, RfCharacterTypes.Children].includes(e.type)
                ? 'Player & Children'
                : e.type
        ) as Record<string, RfCharacter[]>
    }
}
</script>
<style lang="scss" scoped>
.character-list {
    padding: map-get($spacers, 3);
    display: grid;
    grid-gap: map-get($spacers, 2);
}
</style>
