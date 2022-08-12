<template>
    <button class="btn w-100 event-calender mb-1"
            :class="'btn-event-'+typePrefix"
            @click="showDetails = true">
        {{ event.name }}
        <BsModal :is-open="showDetails" @close="showDetails = false"
                 :header-class="'bg-event-'+typePrefix"
                 dialog-class="modal-fullscreen-sm-down"
                 dialog-centered
        >
            <template #header>
                <strong class="modal-title">
                    {{event.date.season.slice(0, 2)}} {{event.date.day}} ({{event.date.weekday}})<br>
                    {{event.type}}: {{event.name}}
                </strong>
            </template>
            <template #body>
                <div class="event-calender-details" v-if="Object.keys(details).length">
                    <dl v-for="(values, label) in details" :key="label">
                        <dt>{{label}}:</dt>
                        <dd><span v-for="(value, i) in values" :key="i">{{ value }}</span></dd>
                    </dl>
                </div>
            </template>
        </BsModal>
    </button>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {RfCharacter, RfFestival, RfEvent} from '@/_data/_classes';
import {RfEventType} from '@/_data/_enums';
import DlGrid from '@/components/DlGrid.vue';
import BsModal from '@/components/BsModal.vue';

@Options({
    name: 'EventCalender',
    components: {BsModal, DlGrid}
})
export default class EventCalender extends Vue {
    @Prop(RfEvent) readonly event!: RfEvent;

    showDetails = false;

    get target (): RfFestival | RfCharacter {
        return this.event.target;
    }

    get typePrefix (): string {
        switch (this.event.type) {
            case RfEventType.Birthday: return 'birthday';
            case RfEventType.Festival: return 'directive' in this.target && this.target.directive ? 'directive' : 'festival';
            case RfEventType.Other:
            default: return 'other';
        }
    }

    get details (): object {
        const details: any = {};

        if (this.event.type === RfEventType.Festival) {
            if ('directive' in this.target && this.target.directive) {
                details['Seed Points'] = [this.target.directiveCost];
            }
            details['Festival Type'] = [this.target.type];
        }
        if (this.event.type === RfEventType.Birthday) {
            if ('gifts' in this.target) {
                Object.assign(
                    details,
                    Object.entries(this.target?.gifts || {}).reduce((acc, [k, v])=>({
                        ...acc,
                        [k]: v
                    }), {})
                );
            }
        }

        return details;
    }

}
</script>
<style lang="scss" scoped>
.B { background-color: $green-300; }
.F { background-color: $red-300; }
.D { background-color: $blue-300; }
.O { background-color: $black; }

.event-calender {
    margin-bottom: map-get($spacers, 2);
    padding: 0 map-get($spacers, 2);
    border-radius: map-get($spacers, 2);
    text-align: left;
    &:last-child {
        margin-bottom: 0;
    }
}

dl,dt,dd {
    margin: 0;
}
.event-calender-details {
    //max-width: calc(100vw - map-get($spacers, 4));
    //border-radius: map-get($spacers, 2);
    //padding: map-get($spacers, 2);
    //box-shadow: 0 0 map-get($spacers, 1) 2px $dark;

    display: grid;
    grid-gap: map-get($spacers, 1);
    grid-template-columns: auto 1fr;

    dl {
        display: contents;
    }
    dt {
        text-transform: capitalize;
    }

    dd {
        white-space: pre-wrap;
        span {
            display: inline-block;
            white-space: nowrap;
            //border: 1px solid $black;
            background-color: $gray-300;
            margin-bottom: map-get($spacers, 1);
            padding: 0 map-get($spacers, 1);
            border-radius: map-get($spacers, 2);
            &:not(:last-child) {
                margin-right: map-get($spacers, 2);
            }
        }
    }
}
</style>
