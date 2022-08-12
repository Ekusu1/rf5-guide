<template>
    <teleport to="body">
        <div class="bs-modal modal fade" :class="finalModalClasses" tabindex="-1">
            <div class="modal-backdrop fade show" @click="close" />
            <div class="modal-dialog" :class="finalDialogClasses">
                <div class="modal-content" >
                    <div class="modal-header" :class="headerClass">
                        <slot name="header" />
                        <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
                    </div>
                    <div class="modal-body" :class="bodyClass">
                        <slot name="body" />
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Emit, Prop} from 'vue-property-decorator';

enum BsModalSize {
    small = 'sm',
    default = '',
    large = 'lg',
    extraLarge = 'xl',
    fullscreen = 'fullscreen',
    fullscreenSm = 'fullscreen-sm-down',
    fullscreenMd = 'fullscreen-md-down',
    fullscreenLg = 'fullscreen-lg-down',
    fullscreenXl = 'fullscreen-xl-down',
    fullscreenXxl = 'fullscreen-xxl-down',
}

@Options({
    name: 'BsModal',
    emits: ['close']
})
export default class BsModal extends Vue {
    @Prop(Boolean) readonly isOpen?: boolean;

    @Prop(String) readonly headerClass?: string;
    @Prop(String) readonly dialogClass?: string;
    @Prop(String) readonly bodyClass?: string;

    @Prop(Boolean) readonly dialogScrollable?: boolean;
    @Prop(Boolean) readonly dialogCentered?: boolean;
    @Prop(BsModalSize) readonly size: BsModalSize = BsModalSize.default;

    get finalModalClasses (): Record<string, boolean> {
        const isOpen = this.isOpen || false;
        return {
            show: isOpen,
            'd-block': isOpen,
            'd-none': !isOpen,
        }
    }

    get finalDialogClasses (): Record<string, boolean> {
        return {
            'modal-dialog-scrollable': this.dialogScrollable || false,
            'modal-dialog-centered': this.dialogCentered || false,
            ['modal-'+this.size]: !!this.size,
            [this.dialogClass || '']: true
        }
    }

    @Emit()
    close () {
        return 'close';
    }
}
</script>
<style lang="scss" scoped>
.bs-modal {
    z-index: 3050;
    .modal-dialog {
        z-index: 3055;
    }
}
</style>
