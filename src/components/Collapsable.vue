<template>
    <div class="collapsable card" :class="{isOpen}">
        <div class="card-header sticky-top" @click="isOpen = !isOpen">
            <slot name="header" v-bind="{title, isOpen}">
                <strong>{{ title }}</strong>
            </slot>
        </div>
        <slot v-if="isOpen" />
    </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Options({
    name: 'Collapsable'
})
export default class Collapsable extends Vue {
    @Prop(String) readonly title!: string;
    @Prop(Boolean) readonly startClosed!: boolean;

    isOpen = !this.startClosed;
}
</script>
<style lang="scss" scoped>
.card-header {
    background-color: $gray-300;

    &:before {
        transition: transform .25s;
        display: inline-block;
        content: '▼';
        transform: rotate(-90deg);
        margin-right: map-get($spacers, 2);
    }

    .isOpen & {
        &:before {
            transform: rotate(0);
        }
    }
}
</style>
