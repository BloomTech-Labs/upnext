<template>
<div>
  <mask id="masking" maskUnits="objectBoundingBox"
  maskContentUnits="objectBoundingBox">
  <rect y="0" width="1" height="1" fill="url(#gradient)" />
  <circle cx=".5" cy=".5" r=".4" fill="gray" />
  <circle cx=".5" cy=".5" r=".3" fill="white" />
  ...
</mask>



    <v-container grid-list-md>
      <div v-for="i in 2">
        <v-layout  class="dual" row wrap>
          <v-flex>
            <v-card>
              <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg"></v-parallax>
            </v-card>
          </v-flex>

          <v-flex v-for="i in 1">
            <v-card class="second">
              <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg"></v-parallax>
            </v-card>
          </v-flex>
        </v-layout>

          <v-flex>
            <v-card>
              <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg"></v-parallax>
            </v-card>
          </v-flex>

          <v-flex v-for="i in 3">
            <v-card class="second">
              <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg"></v-parallax>
            </v-card>
          </v-flex>

      </div>
    </v-container>


</div>
</template>

<style>
.dual {
  width: 100%;
  filter: grayscale(100%);
  mask: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/stampTiles.svg);
}

.second {
  width: 100%;
  height: 100%;
}
</style>
