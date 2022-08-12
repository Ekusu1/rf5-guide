<template>
    <section class="character-list-entry">
        <strong class="fs-5" style="grid-area: name">
            {{character.name}}
        </strong>
        <strong class="mb-3" style="grid-area: birthday" v-if="character.birthday">
            {{character.birthday.seasonShort}}
            {{character.birthday.day}}
            ({{character.birthday.weekday}})
        </strong>

        <section style="grid-area: gifts">
            <DlGrid :entries="character.gifts">
                <template #entry="{entry: values}">
                    <template v-for="(value, i) in values" :key="i">
                        <span class="badge">{{ value }}</span>
                        <br class="d-none d-sm-block" v-if="!((i+1) % 5)" />
                    </template>
                </template>
            </DlGrid>
        </section>
    </section>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {RfCharacter} from '@/_data/_classes';
import DlGrid from '@/components/DlGrid.vue';

@Options({
    name: 'CharacterListEntry',
    components: {DlGrid}
})
export default class CharacterListEntry extends Vue {
    @Prop(RfCharacter) readonly character!: RfCharacter;

}
</script>
<style lang="scss" scoped>
.character-list-entry {
    display: grid;
    grid-template: "name" auto
                   "birthday" auto
                   "gifts" auto
                   / auto;

    .badge {
        background-color: $gray-400;
        color: $black;
        font-size: 1rem;
        font-weight: normal;
        padding: map-get($spacers, 1)/2 map-get($spacers, 1);
        margin-right: map-get($spacers, 1);
    }
}
</style>
