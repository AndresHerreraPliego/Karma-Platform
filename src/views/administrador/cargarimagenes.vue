<template>

    <v-bottom-sheet v-model="sheet" inset>
                        <template v-slot:activator="{ on, attrs }">
                                <v-sheet class="d-flex justify-center align-center flex-column select" height="100%" v-bind="attrs" v-on="on">
                                    <v-btn class="mx-2" fab dark color="red">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                                    <br>
                                    <p class="text-center">Cargar imagenes</p>
                                </v-sheet>
                        </template>
                        <v-sheet height="500px" class="d-flex justify-center align-center">
                            <v-sheet  height="95%" width="95%">
                                <v-container fluid>
                                    <v-row no-gutters>
                                        <v-col cols="12">
                                                    <h2 class="primary--text">Selecciona imagenes para analizar</h2>
                                                    <br>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-file-input label="Seleccionar" multiple></v-file-input>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-row no-gutters>
                                              

                                                <v-col cols="6">
                                                    <v-text-field label="Camara" required ></v-text-field>
                                                </v-col>

                                                <v-col cols="6">
                                                    <v-text-field label="Numero de estacion" required  class="ml-10"></v-text-field>
                                                </v-col>

                                                <v-col cols="6">
                                                    <v-text-field label="Collector" required></v-text-field>
                                                </v-col>

                                                <v-col cols="6">
                                                    <v-text-field label="Lugar de captura" required class="ml-10"></v-text-field>
                                                </v-col>

                              

                                               

                                            </v-row>
                                        </v-col>

                                         <v-col cols="12">
                                                    <v-btn dark color="primary" @click="sheet=!sheet">
                                                        Iniciar
                                                    </v-btn>
                                        </v-col>

                                       


                             

                                    </v-row>
                                </v-container>
                            </v-sheet>
                        </v-sheet>
    </v-bottom-sheet>
</template>
<script>

export default {
    name: 'cargarimagenes',
    data: () => ({
        sheet: false
    }),
    methods: {
    
    }
}
</script>