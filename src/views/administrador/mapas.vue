<template>
  <v-container fluid>
          <v-sheet width="100%" :height="HeightViewport()">
            <v-row style="height:50%;">
                <v-col cols="6">
                    <v-card height="100%">
                         <v-card-title>Nuevos hallazgos en Morelos</v-card-title>
                         <v-card-text>
                            <v-card id="map1" height="320" flat></v-card>
                         </v-card-text>
                    </v-card>
                </v-col>

                 <v-col cols="6">
                    <v-card height="100%">
                        <v-card height="100%">
                         <v-card-title>Felinos en Morelos</v-card-title>
                         <v-card-text>
                            <v-card id="map2" height="320" flat></v-card>
                         </v-card-text>
                        </v-card>
                      </v-card>
                </v-col>
              
            </v-row>

            <v-row style="height:50%;">
            
                <v-col cols="6">
                    <v-card height="100%">
                        <v-card height="100%">
                         <v-card-title>Zonas con especies</v-card-title>
                         <v-card-text>
                            <v-card id="map3" height="320" flat></v-card>
                         </v-card-text>
                        </v-card>
                     </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card height="100%">
                        <v-card height="100%">
                         <v-card-title>Geo Notificaciones</v-card-title>
                         <v-card-text>
                            <v-card id="map4" height="250" flat></v-card>
                            <v-text-field label="Mensaje" required></v-text-field>
                            <v-btn color="primary">Enviar</v-btn>

                         </v-card-text>
                         
                        </v-card>
                        
                     </v-card>
                </v-col>

            </v-row>
          </v-sheet>
  </v-container>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

export default {
  name: 'mapas',
  mounted: function () {

    var map1 = L.map('map1').setView([18.750699, -99.004498], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);
    L.marker([ 18.845212881450536, -98.90716552734375 ]).addTo(map1)
    L.marker([ 18.69568383707862,   -99.0472412109375]).addTo(map1)
    L.marker([ 18.725600248588997, -99.26010131835938]).addTo(map1)
    L.marker([ 18.89199466680617, -99.11178588867188]).addTo(map1)
    L.marker([ 18.599395202198725,  -98.97857666015624]).addTo(map1)

    var map2 = L.map('map2').setView([18.750699, -99.004498], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);
    L.marker([ 18.845212881450536, -98.90716552734375 ]).addTo(map1)
    L.marker([ 18.69568383707862,   -99.0472412109375]).addTo(map1)
    
    



    var map3 = L.map('map3').setView([18.750699, -99.004498], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map3);
    L.polygon(this.areas.huautla, {color: 'red'}).addTo(map3);
    L.polygon(this.areas.cuautla, {color: 'red'}).addTo(map3);
    L.polygon(this.areas.tepoztlan, {color: 'red'}).addTo(map3);

    var map4 = L.map('map4').setView([18.750699, -99.004498], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map4);
    map4.pm.addControls({
    position: 'topleft',
    drawCircle: false,
    });
    

  },
  data: () => ({
      areas: {
          huautla:   [
            [
        
              18.61110889734033,
              -98.80691528320311
            ],
            [
              
              18.63583516062285,
              -98.97994995117188
            ],
            [
             
              18.544720641988363,
               -99.03762817382812
            ],
            [
             
              18.548626548857854,
               -99.15573120117188
            ],
            [
              
              18.579870586157117,
              -99.239501953125
            ],
            [
              
              18.526491895773912,
              -99.26559448242188
            ],
            [
              
              18.595490458028085,
              -99.41253662109375
            ],
            [
              
              18.549928497961417,
              -99.45098876953125
            ],
            [
              
              18.3858049312974,
              -99.26971435546875
            ],
            [
              
              18.34540130240112,
              -99.14749145507812
            ],
            [
              
              18.33106225839585,
              -99.02389526367188
            ],
            [
              
              18.398836341154734,
              -98.84536743164061
            ],
            [
              
              18.539512627214105,
              -98.77395629882812
            ],
            [
              
              18.61110889734033,
              -98.80691528320311
            ]
          ] ,
          cuautla:  [
            [
              
              18.902388845383545,
              -99.00604248046875
            ],
            [
              
              18.77501576082191,
              -99.04449462890625
            ],
            [
              
              18.754210992809277,
              -98.89755249023438
            ],
            [
             
              18.897191836781605,
               -98.87832641601562
            ],
            [
             
              18.902388845383545,
               -99.00604248046875
            ]
          ],
          tepoztlan: [
            [
              
              18.891669838325456,
              -99.11075592041014
            ],
            [
              
              18.915380660631584,
              -99.08397674560547
            ],
            [
              
              18.95370063230706,
              -99.08706665039061
            ],
            [
              
              18.9929857024871,
              -99.1680908203125
            ],
            [
              
              18.93746442964186,
              -99.18937683105469
            ],
            [
              
              18.89231949465665,
              -99.13753509521484
            ],
            [
              
              18.891669838325456,
              -99.11075592041014

            ]
          ]
      }
    
  }),
  methods: {
    HeightViewport: function () {
      return window.innerHeight - 120
    }
  }
}
</script>