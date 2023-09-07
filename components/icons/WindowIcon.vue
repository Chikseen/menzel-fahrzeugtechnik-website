<template>
    <span class="windowIcon">
        <svg class="windowIcon_wrapper" viewBox="-1 0 22 12" xmlns="http://www.w3.org/2000/svg">
            <path class="windowIcon_frame" d="M0 2C5 0 15 0 20 2L18 11C15 9 5 9 2 11L0 2" />
            <path class="windowIcon_clean"
                d="M3.118 9.996 4.968 2.924M9.016 8.012 10.584 1.756M13.992 6.044 15.223 1.389" />
        </svg>
        <svg class="windowIcon_crack windowIcon_crack_1" viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.541 2.587 2.714 2.011 3.128 2.054 3.028 1.254 3.613.997 4.113 1.211 4.642.34M2.542 2.583 1.799 2.511 1.414 2.983 1.457 3.668.842 3.825.357 3.425-.257 3.868M2.542 2.597 2.799 2.954 3.242 3.168 3.599 2.811 3.856 3.283 4.371 3.368 4.942 3.54 4.899 4.297M2.556 2.583 2.057 2.097 2.371 1.683 1.457 1.626 1.557.969 1.285.569.428.226M2.571 2.597 2.871 2.497 3.285 2.697 3.571 2.369 4.242 2.454 4.028 1.683 4.499 1.454 5.356 1.897M2.556 2.611 2.471 3.068 1.899 3.368 2.014 3.825 1.3 4.197 1.285 4.768M2.571 2.626 1.714 2.254 1.3 1.94 1 2.683.428 2.754.085 1.983.642 1.44M2.556 2.597 2.385 1.926 2.714 1.597 2.014.912 2.099.355 2.842.112M2.556 2.626 2.685 3.054 3.214 3.254 2.514 3.64 2.357 4.14 2.485 4.64 3.071 4.768" />
        </svg>
        <svg class="windowIcon_crack windowIcon_crack_2" viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.541 2.587 2.714 2.011 3.128 2.054 3.028 1.254 3.613.997 4.113 1.211 4.642.34M2.542 2.583 1.799 2.511 1.414 2.983 1.457 3.668.842 3.825.357 3.425-.257 3.868M2.542 2.597 2.799 2.954 3.242 3.168 3.599 2.811 3.856 3.283 4.371 3.368 4.942 3.54 4.899 4.297M2.556 2.583 2.057 2.097 2.371 1.683 1.457 1.626 1.557.969 1.285.569.428.226M2.571 2.597 2.871 2.497 3.285 2.697 3.571 2.369 4.242 2.454 4.028 1.683 4.499 1.454 5.356 1.897M2.556 2.611 2.471 3.068 1.899 3.368 2.014 3.825 1.3 4.197 1.285 4.768M2.571 2.626 1.714 2.254 1.3 1.94 1 2.683.428 2.754.085 1.983.642 1.44M2.556 2.597 2.385 1.926 2.714 1.597 2.014.912 2.099.355 2.842.112M2.556 2.626 2.685 3.054 3.214 3.254 2.514 3.64 2.357 4.14 2.485 4.64 3.071 4.768" />
        </svg>
    </span>
</template>

<style lang="scss">
.windowIcon {
    position: relative;
    height: 100%;
    width: 100%;


    &_wrapper {
        height: 100%;
        width: 100%;
        max-height: 120px;
    }

    &_frame {
        fill: #ffffff00;
        stroke: $icon_base_grey;
        stroke-width: 0.2px;
        transition: all 1s;
    }

    &_clean {
        opacity: 0;
        stroke: $icon_base_grey;
        stroke-width: 0.2px;
        transition: all 1s;
    }

    &_crack {
        position: absolute;
        fill: #ffffff00;
        stroke: $icon_base_grey;
        stroke-width: 0.2px;
        transition: all 1s;
        stroke-dasharray: 5px;
        stroke-dashoffset: 0;

        &_1 {
            top: 20px;
            left: 30%;
            width: 40px;
        }

        &_2 {
            top: 45px;
            left: 55%;
            width: 20px;
            transform: rotateX(160deg) rotateZ(255deg);
        }
    }
}

.windowIcon:hover .windowIcon_frame {
    stroke: $icon_active_grey;
}

.windowIcon:hover .windowIcon_crack {
    stroke: $icon_active_grey;
    opacity: 0;
    stroke-dashoffset: 5px;
}

.windowIcon:hover .windowIcon_clean {
    stroke: $icon_active_grey;
    opacity: 1;
}
</style>
