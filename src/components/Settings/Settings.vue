<template>
    <div class="rf-settings p-3">
        <CharacterSettings searchKey="player" />
        <CharacterSettings searchKey="child1" />
        <CharacterSettings searchKey="child2" />
        <CharacterSettings searchKey="child3" />

        <button class="btn w-100 btn-success mt-3" @click="save">Save</button>
        <button class="btn w-100 btn-danger mt-3" @click="reset">Reset</button>
    </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Collapsable from '@/components/Collapsable.vue';
import {Inject} from 'vue-property-decorator';
import {RfSettings} from '@/_data/_classes';
import CharacterSettings from '@/components/Settings/CharacterSettings.vue';

@Options({
    name: 'Settings',
    components: {CharacterSettings, Collapsable}
})
export default class Settings extends Vue {
    @Inject('settings') readonly settings!: RfSettings;

    save() {
        this.settings.save();
    }

    reset() {
        this.settings.reset();
        window.location.reload();
    }

    beforeUnmount() {
        this.save();
    }
}
</script>
<style lang="scss" scoped>
.rf-settings {

    .character-settings:not(:first-child) {
        margin-top: map-get($spacers, 3);
    }
}
</style>
