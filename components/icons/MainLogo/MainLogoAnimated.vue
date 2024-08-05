<template>
  <div class="MainLogoA_wrapper">
    <a href="https://mfzt-cdn.azureedge.net/images/master_certificate.webp">
      <NuxtImg src="https://mfzt-cdn.azureedge.net/images/master_certificate.webp" class="MainLogoA_img" alt="Image of master certificate" format="webp"
        sizes="xxs:100px" densities="x1" width="330" height="500" />
    </a>
    <svg class="MainLogoA" viewBox="-1 -1 12 12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      fill="#00000000" li>
      <path stroke="#d3d7df" stroke-width="0.5"
        d="M3 2 5 2 5 0A1 1 0 015 10L5 8 3 8M5 8 5 7 4 7 4 3 5 3 5 2A1 1 0 015 8" />
      <path class="MainLogoA_openPath" stroke="#d3d7df" stroke-width="0.5" d="M4 10 4 9 2 9 2 1 4 1 4 0" />
    </svg>
  </div>
</template>

<style lang="scss">
.MainLogoA {
  max-width: 100%;
  max-height: 100%;
  overflow: visible;

  &_wrapper {
    max-width: 100%;
    max-height: 100%;
    min-width: 100px;
    position: relative;
    transition: all ease-in-out 1s;

    &:hover {
      transform: rotate(270deg);
      stroke: #c0c0c0;

      .MainLogoA {
        &_openPath {
          transform: translateX(-17px);
          stroke: #c0c0c0;
        }

        &_master {
          transform: translateX(3px) rotate(90deg) rotateX(0);
          stroke: #c0c0c0;
        }

        &_img {
          width: 100%;
        }
      }
    }

  }

  &_img {
    cursor: pointer;
    position: absolute;
    top: -10px;
    left: -4.5rem;
    width: 0;
    height: 100px;
    transform: rotate(90deg);
    transition: width ease-in-out 1s;
  }

  &_openPath {
    transition: all ease-in-out 1s;
  }

  &_master {
    transform: translateX(3px) rotate(90deg) rotateX(90deg);
    transition: all ease-in-out 1s;
  }
}
</style>
