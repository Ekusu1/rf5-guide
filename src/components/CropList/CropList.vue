<template>
    <div class="crop-list">
        <Collapsable v-for="(crops, type) in groupedCrops" :key="type" :title="type">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="crop in crops" :key="crop.name">
                    <CropListEntry :crop="crop" />
                </li>
            </ul>
        </Collapsable>

    </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {RfCrop} from '@/_data/_classes';
import {groupBy} from 'lodash';
import {_crops} from '@/_data/_crops';
import {RfCropType} from '@/_data/_enums';
import CropListEntry from '@/components/CropList/CropListEntry.vue';
import Collapsable from '@/components/Collapsable.vue';

@Options({
    name: 'CropList',
    components: {Collapsable, CropListEntry}
})
export default class CropList extends Vue {
    get groupedCrops (): Record<RfCropType, RfCrop[]> {
        return groupBy(_crops, 'cropType') as Record<string, RfCrop[]>
    }
}
</script>
<style lang="scss" scoped>
.crop-list {

}
</style>
