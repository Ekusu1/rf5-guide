<template>
    <nav class="nav nav-tabs sticky-top pt-1 pt-sm-3 bg-light">
        <template v-for="(entries, group) in groupedEntries" :key="group">
            <RfNavTab v-for="entry in entries" :key="entry.tab"
                      v-bind="{entry, selected}"
                      class="d-none d-md-block"
                      @clicked="select"
            />
            <RfNavTab v-if="entries.length < 2"
                      v-bind="{entry: entries[0], selected}"
                      class="d-md-none"
                      @clicked="select"
            />
            <RfNavDropdown v-else
                           class="d-md-none"
                           label-is-selected
                           v-bind="{group, entries, selected}" @clicked="select" />
        </template>
    </nav>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {enumValues, RfSeasons} from '@/_data/_enums';
import {Emit} from 'vue-property-decorator';
import {groupBy} from 'lodash';
import {RfNavEntry} from '@/_data/_interfaces';
import RfNavTab from '@/components/RfNav/RfNavTab.vue';
import RfNavDropdown from '@/components/RfNav/RfNavDropdown.vue';

@Options({
    name: 'RfNav',
    components: {RfNavDropdown, RfNavTab},
})
export default class RfNav extends Vue {
    entries: RfNavEntry[] = [
        ...enumValues(RfSeasons).map(tab => ({tab, group: 'Calendar'})),
        {
            tab: 'Characters',
            classes: 'ms-3'
        },
        {
            tab: 'Settings',
            label: '⛭',
            classes: 'ms-auto'
        }
    ];
    selected: string = RfSeasons.Spring;

    get groupedEntries() {
        return groupBy(this.entries, ({tab, group}) => group || tab);
    }

    @Emit('selected')
    select(selected: string) {
        this.selected = selected;
    }
}
</script>
<style lang="scss" scoped>
.nav {
    //z-index: 1000;

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
}

.nav-link {
    border-radius: 0 !important;
    padding-left: map-get($spacers, 2);
    padding-right: map-get($spacers, 2);

    &:first-child { margin-left: map-get($spacers, 3) }

    &:last-child { margin-right: map-get($spacers, 3) }
}
</style>
