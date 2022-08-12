<template>
    <dl class="dl-grid">
        <template v-for="(entry, label) in entries" :key="label">
            <dt>{{label}}:</dt>
            <dd>
                <slot name="entry" v-bind="{entry}">
                    {{ entry }}
                </slot>
            </dd>
        </template>
    </dl>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Options({
    name: 'DlGrid'
})
export default class DlGrid extends Vue {
    @Prop(Object) readonly entries!: Record<string, string|[]>;

}
</script>
<style lang="scss" scoped>
dl, dt, dd {
    margin: 0;
}
.dl-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: map-get($spacers, 2);

    dt {
        text-transform: capitalize;
    }
}
</style>
