<template>
  <v-container fluid>
          <v-sheet width="100%" :height="HeightViewport()">
            <v-row style="height:50%;">
                <v-col cols="3">
                    <v-card height="100%">
                      <v-card-title>Cantidad de especies</v-card-title>
                      <br>
                      <v-card-text>
                      <apexchart type="area" :options="options" :series="series"></apexchart>
                    </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card height="100%">
                      <v-card-title>Imagenes capturadas esta semana</v-card-title>
                      <br>
                      <v-card-text>
                      <apexchart type="area" :options="options" :series="series"></apexchart>
                   </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card height="100%">
                      <v-card-title>Imagenes capturadas este mes</v-card-title>
                      <br>
                      <v-card-text>
                      <apexchart type="area" :options="options" :series="series"></apexchart>                     
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card height="100%">
                      <v-card-title>Frecuencia de Hallazgos</v-card-title>
                      <br>
                      <v-card-text>
                      <apexchart type="line" :options="options" :series="series"></apexchart>                     

                      </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row style="height:50%;">
            
                <v-col cols="6">
                    <v-card height="100%">
                        <v-card-title>Hallazgos esta semana</v-card-title>
                        <apexchart height="80%" type="bar" :options="options" :series="seriesuso"></apexchart>
                    </v-card>
                </v-col>

                 <v-col cols="6">
                    <v-card height="100%">
                        <v-card-title>Hallazgos este mes</v-card-title>
                        <apexchart height="80%" type="bar" :options="options" :series="seriesuso"></apexchart>
                    </v-card>
                </v-col>
            </v-row>
          </v-sheet>
  </v-container>
</template>
<script>
export default {
  name: 'estadisticas',
  created: function () {

  },
  data: () => ({
     options: {
        chart: {
          id: 'frecuencia-uso',
           toolbar: {
              show: false
            }
        },
      },
      series: [{
        name: 'Equipo usado',
        data: [10, 20, 50, 100]
      }],
      seriesuso: [{
        name: 'Equipo usado',
        data: [10, 20, 50, 40,90,39,92,93,90,30,30,40,50,90]
      }]
  }),
  methods: {
    HeightViewport: function () {
      return window.innerHeight - 120
    }
  }
}
</script>