<template>
    <a class="nav-link"
       :class="{
             [entry.tab]: true,
             active: selected === entry.tab,
             [entry.classes]: !!entry.classes
           }"
       href="#"
       @click="clicked(entry.tab)"
    >
        {{ entry.label || entry.tab }}
    </a>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Emit, Prop} from 'vue-property-decorator';
import {RfNavEntry} from '@/_data/_interfaces';

@Options({
    name: 'RfNavTab'
})
export default class RfNavTab extends Vue {
    @Prop(Object) readonly entry!: RfNavEntry;
    @Prop(String) readonly selected!: string;

    @Emit()
    clicked(selected: string) { return selected; }
}
</script>
<style lang="scss" scoped>

</style>
