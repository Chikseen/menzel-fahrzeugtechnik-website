<template>
    <svg class="arrowIcon" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <path class="arrowIcon_ring" d="M5 1A1 1 0 005 9 1 1 0 005 1" />
        <path class="arrowIcon_arrow"
            d="M4.5 2.5 4.5 5 4.5 6.3 3.219 5.429C2.656 5.073 2.231 5.753 2.76 6.106L4.5 7.3A1 1 0 005.5 7.3L7.164 6.168C7.698 5.81 7.195 5.151 6.752 5.459L5.5 6.3 5.494 2.5Q5.5 2 5 2 4.5 2.003 4.5 2.5" />
    </svg>
</template>

<style lang="scss">
.arrowIcon {
    &_ring {
        fill: #ffffff00;
        stroke: $icon_base_grey;
        stroke-width: 0.5px;
        transition: all 0.5s;
    }

    &_arrow {
        fill: $icon_base_grey;
        transition: all 0.5s;
    }

    &:hover .arrowIcon_ring {
        fill: $icon_base_grey;
        stroke: $icon_active_grey;
    }

    &:hover .arrowIcon_arrow {
        fill: $icon_active_grey;
    }
}
</style>
