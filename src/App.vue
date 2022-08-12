<template>
    <div id="main-grid">
        <RfNav @selected="selected = $event" />
        <main>
            <CharacterList v-if="selected === 'Characters'" />
            <Settings v-else-if="selected === 'Settings'" />
            <Calendar v-else :season="selected" :events="events" />
        </main>
    </div>
    <div id="modals" />
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Calendar from '@/components/Calendar/Calendar.vue';
import {RfSeasons} from '@/_data/_enums';
import {_festivals} from '@/_data/_festivals';
import {_characters} from '@/_data/_characters';
import {RfEvent, RfSettings} from '@/_data/_classes';
import {sortBy} from 'lodash';
import RfNav from '@/components/RfNav/RfNav.vue';
import CharacterList from '@/components/CharacterList/CharacterList.vue';
import Settings from '@/components/Settings/Settings.vue';

@Options({
    components: {
        Settings,
        CharacterList,
        RfNav,
        Calendar
    },
    provide () {
        return {
            events: this.events,
            settings: this.settings
        }
    }
})
export default class App extends Vue {
    selected: string = RfSeasons.Spring;

    settings = RfSettings.load();

    get events(): RfEvent[] {
        console.log(_characters.filter(e => e.enabled));
        return sortBy(
            [
                ..._characters.filter(e => e.enabled).map(e => new RfEvent(e)),
                ..._festivals.map(e => new RfEvent(e))
            ].filter(e => !!e.date),
            ['sortKey']
        )
    }
}
</script>

<style lang="scss">
#app, #main-grid {
    height: 100vh;
}
#main-grid {
    display: grid;
    grid-template-rows: auto 1fr;

    main {
        overflow-y: auto;
    }
}
</style>
