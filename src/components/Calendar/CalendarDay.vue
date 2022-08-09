<template>
    <section class="calendar-day" :class="cssClasses">
        <header>
            <span class="day">{{ day }}</span>
            <span class="weekday">{{ weekDay }}</span>
        </header>
        <main>
            <EventCalender v-for="(event, i) in dayEvents" :key="i" :event="event" />
        </main>
    </section>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Inject, Prop} from 'vue-property-decorator';
import {Seasons} from '@/_data/_enums';
import {RfEvent} from '@/_data/_classes';
import EventCalender from '@/components/Event/EventCalender.vue';

@Options({
    name: 'CalendarDay',
    components: {EventCalender}
})
export default class CalendarDay extends Vue {
    @Prop(Seasons) readonly season!: Seasons;
    @Prop(Number) readonly day!: number;
    @Inject('events') readonly events!: RfEvent[];


    get dayEvents(): RfEvent[] {
        return this.events.filter(({date}) => date?.season === this.season && date.day === this.day);
    }

    get weekDay(): string {
        const hol = [1, 7, 13, 19, 25];
        const weekDay = ['Hol', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

        return weekDay.reduce((r, wd, i) =>
            hol.map(e => e + i).includes(this.day) ? wd : r
        )
    }


    get cssClasses() {
        return {
            holiday: [1, 7, 13, 19, 25].includes(this.day),
            empty: !this.dayEvents.length
        };
    }
}
</script>
<style lang="scss" scoped>
.calendar-day {
    width: 100%;
    height: 100%;
    padding: map-get($spacers, 1);
    background-color: $rf-calendar-day;
    border: 2px dashed $rf-calendar-day-border;
    border-radius: map-get($spacers, 2);

    @include media-breakpoint-down(sm) {
        &.empty {
            display: none;
        }
    }

    &.holiday {
        background-color: $rf-calendar-holiday;
    }

    &:hover {
        background-color: $rf-calendar-hover;
    }

    header {
        font-weight: bold;
        .weekday {
            display: none;
            padding-left: map-get($spacers, 2);

            @include media-breakpoint-down(sm) {
                display: inline;
            }
        }
    }

}
</style>
