<template>
    <div class="crop-list-entry">
        <div style="grid-area: name">
            <strong class="fs-5">{{ crop.name }}</strong>
            <span class="d-sm-none">
                <span class="badge ms-1 bg-green" v-if="crop.tree">Tree</span>
                <span class="badge ms-1 bg-red" v-if="crop.regrows">Regrows</span>
            </span>
        </div>
        <div class="grid-row d-none d-sm-block">
            <span style="grid-column: 2">{{ crop.seedBuyPrice || '---' }}</span>
            <span style="grid-column: 3">{{ crop.seedSellPrice || '---' }}</span>
            <span style="grid-column: 4">{{ crop.buyPrice || '---' }}</span>
            <span style="grid-column: 5">{{ crop.sellPrice || '---' }}</span>
        </div>
<!--        class="grid-col d-sm-none"-->
        <div class="grid-col" >
            <div style="grid-area: seed">
                <strong class="fs-5">Seed</strong>
                <DlGrid :entries="seedData" />
            </div>
            <div style="grid-area: crop">
                <strong class="fs-5">Crop</strong>
                <DlGrid :entries="cropData" />
            </div>
            <div style="grid-area: seasons" v-if="[...crop.goodSeasons, ...crop.badSeasons].length">
                <strong class="me-2">Seasons:</strong>
                <span class="badge bg-success text-white" v-for="s in crop.goodSeasons" :key="s">{{ s }}</span>
                <span class="badge bg-danger text-white" v-for="s in crop.badSeasons" :key="s">{{ s }}</span>

            </div>

            <DlGrid style="grid-area: locations" v-if="crop.locations.length" :entries="locations">
                <template #entry="{entry: values}">
                    <template v-for="(value, i) in values" :key="i">
                        <span class="badge">{{ value }}</span>
                        <br class="d-none d-sm-block" v-if="!((i+1) % 5)" />
                    </template>
                </template>
            </DlGrid>
        </div>
    </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import DlGrid from '@/components/DlGrid.vue';
import {Prop} from 'vue-property-decorator';
import {RfCrop} from '@/_data/_classes';
import {mapKeys} from 'lodash';

@Options({
    name: 'CropListEntry',
    components: {DlGrid}
})
export default class CropListEntry extends Vue {
    @Prop(RfCrop) readonly crop!: RfCrop;

    get seedData(): Record<string, any> {
        return {
            'Buy Price': this.crop.seedBuyPrice || '---',
            'Sell Price': this.crop.seedSellPrice || '---'
        };
    }

    get cropData(): Record<any, any> {
        return {
            'Buy Price': this.crop.buyPrice || '---',
            'Sell Price': this.crop.sellPrice || '---'
        };
    }

    get locations(): Record<string, string[]> {
        const {locations} = this.crop;
        return {Locations: locations};
    }
}
</script>
<style lang="scss" scoped>
.crop-list-entry {
    display: grid;
    grid-template: 'name name'
                   'seed crop'
                   'seasons seasons'
                   'locations locations'
                   / auto 1fr;
    grid-gap: map-get($spacers, 1) map-get($spacers, 5);

    .badge {
        background-color: $gray-400;
        color: $black;
        font-size: 1rem;
        font-weight: normal;
        padding: map-get($spacers, 1)/2 map-get($spacers, 1);
        margin-right: map-get($spacers, 1);
    }

    .area-seed {
        grid-area: seed;
    }

    .area-crop {
        grid-area: crop;
    }

    @include media-breakpoint-up(sm) {
        //grid-template: "name";
        //grid-auto-columns: auto;
    }
}
</style>
