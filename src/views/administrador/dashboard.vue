<template>
    <v-sheet width="100%" :height="HeightViewport()">
            <v-row style="height:50%;">
                <v-col cols="3">
                    <v-card height="100%" class="v-step-0" id="v-step-0">
                       <v-card-title>Especies</v-card-title>
                        <apexchart height="80%" type="donut" :options="donutoptions" :series="donutseries"></apexchart>
                    </v-card>
                </v-col>

                <v-col cols="3">
                    <v-card height="100%">
                        <v-card-title>Especies mas vistas </v-card-title>
                        <br>
                        <apexchart type="area" :options="lineoptions" :series="lineseries"></apexchart>
                    </v-card>
                </v-col>

                <v-col cols="3">
                    <v-row style="height:100%;">
                        <v-col cols="12">
                            <v-card height="100%" link to="/administrador/personal">
                                <v-sheet class="d-flex justify-space-around align-center select" height="100%">
                                    <p class="text-center">Administrar datos</p>
                                    <v-btn class="mx-2" fab dark color="indigo">
                                        <v-icon dark>mdi-account-group</v-icon>
                                    </v-btn>
                                </v-sheet>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card height="100%" link to="/administrador/equipo">
                                <v-sheet class="d-flex justify-space-around align-center select" height="100%">
                                    <p class="text-center">Administrar mapas</p>
                                    <v-btn class="mx-2" fab dark color="indigo">
                                        <v-icon dark>mdi-laptop-mac</v-icon>
                                    </v-btn>
                                </v-sheet>
                            </v-card>
                        </v-col>
                        <v-col cols="12">
                            <v-card height="100%" link to="/administrador/reportes"> 
                                <v-sheet class="d-flex justify-space-around align-center select" height="100%">
                                    <p class="text-center">Visualizar estadisticas</p>
                                    <v-btn class="mx-2" fab dark color="indigo">
                                        <v-icon dark>mdi-file-document-outline</v-icon>
                                    </v-btn>
                                </v-sheet>                            
                                          
                            </v-card>
                        </v-col>                      
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <v-row style="height:100%;">
                        <v-col cols="6">
                            <v-card height="100%">
                                <cargarimagenes/>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card height="100%">
                                <v-sheet class="d-flex justify-center align-center flex-column select" height="100%" v-bind="attrs" v-on="on">
                                    <v-btn class="mx-2" fab dark color="red">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                                    <br>
                                    <p class="text-center">Cargar excel</p>
                                </v-sheet>
                            </v-card>
                        </v-col>
                       
                                            
                    </v-row>
                </v-col>
            </v-row>

        <v-row style="height:50%;">
                <v-col cols="3">
                    <v-row style="height:100%;">
                        <v-col cols="6">
                            <v-card height="100%">
                                <v-sheet class="d-flex justify-center align-center flex-column" height="100%">
                                    <h1>20</h1>
                                    <br>
                                    <p class="text-center">Camaras</p>
                                </v-sheet>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card height="100%">
                                <v-sheet class="d-flex justify-center align-center flex-column" height="100%">
                                    <h1>3400</h1>
                                    <br>
                                    <p class="text-center">Fotos</p>
                                </v-sheet>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card height="100%">   
                                <v-sheet class="d-flex justify-center align-center flex-column" height="100%">
                                    <h1>10</h1>
                                    <br>
                                    <p class="text-center">Collectores</p>
                                </v-sheet>                                                     
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card height="100%">   
                                <v-sheet class="d-flex justify-center align-center flex-column" height="100%">
                                    <h1>120</h1>
                                    <br>
                                    <p class="text-center">Especies</p>
                                </v-sheet>                      
                            </v-card>
                        </v-col>                       
                    </v-row>
                </v-col>

                <v-col cols="9">
                    <v-card height="100%">
                        <v-card-title>Hallazgos este mes</v-card-title>
                        <apexchart height="80%" type="bar" :options="options" :series="series"></apexchart>
                    </v-card>
                </v-col>
        </v-row>

        <v-tour name="administradordashboard" :steps="steps"></v-tour>
    </v-sheet>
</template>
<script>
import cargarimagenes from '@/views/administrador/cargarimagenes.vue'


export default {
  name: 'dashboard',
  components: {
      cargarimagenes

  },
  created: function () {

  },
  data: () => ({

     donutoptions:{
      legend:{
        show: true
      },
      labels: ['Jaguar', 'Leopardo', 'Puma', 'Tigre']

     },
     donutseries: [2, 8,5,5]

     ,
     options: {
        chart: {
          id: 'frecuencia-uso'
        },
        xaxis: {
          categories: ['ene', 'feb', 'mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
        }
      },
      series: [{
        name: 'Equipo usado',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      lineoptions: {
        chart: {
          id: 'frecuencia-uso',
           toolbar: {
              show: false
            }
        },
        xaxis: {
          categories: ['Puma', 'Jaguar', 'Leopardo']
        }
      },
      lineseries: [{
        name: 'Equipo usado',
        data: [30, 40, 45]
      }],
      steps: [
          {
            target: '#v-step-0',  
            content: `Discover <strong>Vue Tour</strong>!`
          }
      ]

  }),
  methods: {
    HeightViewport: function () {
      return window.innerHeight - 120
    }

  }
}
</script>