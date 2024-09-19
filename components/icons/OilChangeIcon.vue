<template>
    <svg class="oil" viewBox="0 0 26 18" xmlns="http://www.w3.org/2000/svg" fill="#00000000" li>
        <path class="oil_newoil"
            d="M3 15 20 15M20 15 4 15M3 15 3 15M3 15 3 15 3 15A1 1 0 013 15 1 1 0 004 15 1 1 0 014 15L20 15A1 1 0 0120 15 1 1 0 0020 15 1 1 0 0120 15L20 13 22 13 22 13 25 13 25 13 25 13 24 15 22 15 22 13 20 13 20 16A1 1 0 0119 17L10 17 6 15 4 15A1 1 0 013 15L3 15" />
        <path class="oil_engine"
            d="M5 1 15 1M10 1 10 3M1 5 1 15M1 10 3 10 3 6A1 1 0 014 5 1 1 0 005 4 1 1 0 016 3L17 3A1 1 0 0118 4 1 1 0 0019 5 1 1 0 0120 6L20 7 22 7 22 5 24 5 25 7 25 13 24 15 22 15 22 13 20 13 20 16A1 1 0 0119 17L10 17 6 15 4 15A1 1 0 013 14L3 10" />
    </svg>
</template>

<style lang="scss">
.oil {
    max-height: 120px;

    &_engine {
        stroke: $icon_base_grey;
        stroke-width: 1px;
        transition: all 1s;
    }

    &_newoil {
        fill: $icon_active_grey;
        transition: 1s;
    }

    &:hover .oil_engine {
        stroke: $icon_active_grey;
    }

    &:hover .oil_newoil {
        d: path("M5 1 15 1M10 1 10 3M1 5 1 15M1 10 3 10 3 6A1 1 0 014 5 1 1 0 005 4 1 1 0 016 3L17 3A1 1 0 0118 4 1 1 0 0019 5 1 1 0 0120 6L20 7 22 7 22 5 24 5 25 7 25 13 24 15 22 15 22 13 20 13 20 16A1 1 0 0119 17L10 17 6 15 4 15A1 1 0 013 14L3 10");
        fill: #9b6829;

    }

}
</style>
