<template>
    <nav class="nav nav-tabs sticky-top bg-light">
        <a v-for="(tab, i) in tabs" :key="i"
           class="nav-link"
           :class="{[tab]: true, active: tab === selectedTab}"
           href="#"
           @click="selectedTab=tab"
        >
            {{ tab }}
        </a>
    </nav>
    <section v-if="selectedTab === 'Settings'">
        settings
    </section>
    <section v-else>
        <Calendar :season="selectedTab" :events="events" />
    </section>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Calendar from '@/components/Calendar/Calendar.vue';
import {Seasons} from '@/_data/_enums';
import {_festivals} from '@/_data/_festivals';
import {_characters} from '@/_data/_characters';
import {RfEvent} from '@/_data/_classes';
import {sortBy} from 'lodash';

@Options({
    components: {
        Calendar
    },
    provide () {
        return {
            events: this.events
        }
    }
})
export default class App extends Vue {
    tabs: string[] = [...Object.values(Seasons), 'Settings'];
    selectedTab: string | Seasons = Seasons.Spring;

    get events(): RfEvent[] {
        return sortBy(
            [
                ..._characters.map(e => new RfEvent(e)),
                ..._festivals.map(e => new RfEvent(e))
            ].filter(e => !!e.date),
            ['sortKey']
        )
    }
}
</script>

<style lang="scss">
.nav {
    .Spring {
        background-color: $rf-spring-light;

        &.active {
            background-color: $rf-spring-dark;
            border-bottom-color: $rf-spring-dark;
        }
    }

    .Summer {
        background-color: $rf-summer-light;

        &.active {
            background-color: $rf-summer-dark;
            border-bottom-color: $rf-summer-dark;
        }
    }

    .Autumn {
        background-color: $rf-autumn-light;

        &.active {
            background-color: $rf-autumn-dark;
            border-bottom-color: $rf-autumn-dark;
        }
    }

    .Winter {
        background-color: $rf-winter-light;

        &.active {
            background-color: $rf-winter-dark;
            border-bottom-color: $rf-winter-dark;
        }
    }

    .Settings {
        margin-left: auto;
    }
}

.nav-link {
    border-radius: 0 !important;

    &:first-child { margin-left: map-get($spacers, 3) }
    &:last-child { margin-right: map-get($spacers, 3) }
}
</style>
