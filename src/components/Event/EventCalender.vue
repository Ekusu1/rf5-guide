<template>
    <Tippy
        trigger="click"
        tag="div"
        content-tag="div"
        placement="bottom-start"
        :offset="[0,0]"
        class="event-calender mb-1"
        :class="typePrefix"
    >
        <div>{{ event.name }}</div>
        <template #content>
            <div class="event-calender-details" :class="typePrefix" v-if="Object.keys(details).length">
                <dl class="grid-row pb-3 text-center">
                    <dt class="grid-cell fw-bold">{{event.type}}<br />{{event.date.season.slice(0, 2)}} {{event.date.day}}</dt>
                    <dd class="grid-cell fw-bold">{{event.name}}</dd>
                </dl>

                <dl v-for="(values, label) in details" :key="label">
                    <dt>{{label}}:</dt>
                    <dd><span v-for="(value, i) in values" :key="i">{{ value }}</span></dd>
                </dl>
            </div>
        </template>
    </Tippy>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {Character, Festival, RfEvent} from '@/_data/_classes';
import {Tippy} from 'vue-tippy';
import {RfEventType} from '@/_data/_enums';
import {GiftList} from '@/_data/_interfaces';

@Options({
    name: 'EventCalender',
    components: {Tippy}

})
export default class EventCalender extends Vue {
    @Prop(RfEvent) readonly event!: RfEvent;

    get target (): Festival | Character {
        return this.event.target;
    }

    get typePrefix (): string {
        switch (this.event.type) {
            case RfEventType.Birthday: return 'B';
            case RfEventType.Festival: return 'directive' in this.target && this.target.directive ? 'D' : 'F';
            case RfEventType.Other:
            default: return 'O';
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
                    Object.entries(this.target.gifts as GiftList).reduce((acc, [k, v])=>({
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
dl,dt,dd {
    margin: 0;
}


.B { background-color: $blue-300; }
.F { background-color: $red-300; }
.D { background-color: $green-300; }
.O { background-color: $black; }

.event-calender {
    display: flex;

    margin-bottom: map-get($spacers, 2);
    padding: 0 map-get($spacers, 2);
    &:last-child {
        margin-bottom: 0;
    }

    border-radius: map-get($spacers, 2);
}

.event-calender-details {
    max-width: calc(100vw - map-get($spacers, 4));
    border-radius: map-get($spacers, 2);
    padding: map-get($spacers, 2);
    box-shadow: 0 0 map-get($spacers, 1) 2px $dark;

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
