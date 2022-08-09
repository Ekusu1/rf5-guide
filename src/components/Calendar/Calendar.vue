<template>
    <div class="calendar" :class="season">
        <header class="grid-row">
            <strong v-for="(weekday, i) in weekdays" :key="i" class="grid-cell">{{ weekday }}</strong>
        </header>
        <div class="grid-cell" v-for="day in days" :key="day">
            <CalendarDay class="grid-cell" :season="season" :day="day" />
        </div>
    </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import CalendarDay from '@/components/Calendar/CalendarDay.vue';
import {Seasons} from '@/_data/_enums';

@Options({
    name: 'Calendar',
    components: {CalendarDay}

})
export default class Calendar extends Vue {
    @Prop(Seasons) readonly season!: Seasons;

    weekdays = ['Hol', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    days = Array(30).fill('').map((v, k) => k + 1);
}
</script>
<style lang="scss" scoped>
.calendar {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto repeat(5, minmax(3rem, 1fr));
    padding: map-get($spacers, 2);

    @include media-breakpoint-down(sm) {
        grid-template-columns: 1fr 1fr;
    }

    .grid-cell {
        padding: map-get($spacers, 1);
    }

    header {
        margin-bottom: map-get($spacers, 2);
        font-weight: bold;
        text-align: center;
        @include media-breakpoint-down(sm) {
            display: none;
        }
    }

    &.Spring {
        background: linear-gradient(180deg, $rf-spring-dark 0, $rf-spring-dark 2.5rem, $rf-spring-light 3rem, $rf-spring-light 100%);
    }

    &.Summer {
        background: linear-gradient(180deg, $rf-summer-dark 0, $rf-summer-dark 2.5rem, $rf-summer-light 3rem, $rf-summer-light 100%);
    }

    &.Autumn {
        background: linear-gradient(180deg, $rf-autumn-dark 0, $rf-autumn-dark 2.5rem, $rf-autumn-light 3rem, $rf-autumn-light 100%);
    }

    &.Winter {
        background: linear-gradient(180deg, $rf-winter-dark 0, $rf-winter-dark 2.5rem, $rf-winter-light 3rem, $rf-winter-light 100%);
    }
}
</style>
