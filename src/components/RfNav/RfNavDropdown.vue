<template>
    <tippy
        ref="tippyElement"
        trigger="click"
        tag="div"
        content-tag="div"
        content-class="dropdown-menu show"
        class="nav-item dropdown"
        placement="bottom-start"
        :offset="[0,0]"
        :delay="[0,0]"
        interactive
    >
        <a class="nav-link dropdown-toggle" href="#">{{ groupLabel }}</a>
        <template #content="{ hide }">
            <li v-for="entry in entries" :key="entry.tab">
                <a class="dropdown-item"
                   :class="{
                     [entry.tab]: true,
                     active: selected === entry.tab,
                     [entry.classes]: !!entry.classes
                   }"
                   href="#"
                   @click="clicked(entry.tab) && hide()"
                >
                    {{ entry.label || entry.tab }}
                </a>
            </li>
        </template>
    </tippy>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Emit, Prop} from 'vue-property-decorator';
import {RfNavEntry} from '@/_data/_interfaces';
import {Tippy} from 'vue-tippy';

@Options({
    name: 'RfNavDropdown',
    components: {Tippy}

})
export default class RfNavDropdown extends Vue {
    @Prop(String) readonly group!: string;
    @Prop(Array) readonly entries!: RfNavEntry[];
    @Prop(String) readonly selected!: string;
    @Prop(Boolean) readonly labelIsSelected!: boolean;

    get groupLabel () {
        if (this.labelIsSelected) {
            const selectedEntry = this.entries.find(({tab}) => tab === this.selected);
            return selectedEntry ? selectedEntry.label || selectedEntry.tab : this.group;
        }
        return this.group;
    }

    @Emit()
    clicked(selected: string) {
        return selected;
    }
}
</script>
<style lang="scss" scoped>

</style>
