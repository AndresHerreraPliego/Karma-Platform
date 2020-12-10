<template>
   <v-sheet height="100%">
      <v-app-bar color="orange" app dark>
            <img  src="@/assets/karma.png" height="40">
            <v-tabs align-with-title >
                <v-tab link to="/administrador">Inicio</v-tab>
                <v-tab link to="/administrador/datos">Datos</v-tab>
                <v-tab link to="/administrador/mapas">Mapas</v-tab>
                <v-tab link to="/administrador/estadisticas">Estadisticas</v-tab>
            </v-tabs>
<!--             <v-text-field flat hide-details label="Buscar" solo prepend-inner-icon="mdi-magnify" dense light style="width:400px; margin-right:10px;"></v-text-field>
-->

            <v-btn icon link to="/">
          
                <v-icon  > mdi-exit-to-app</v-icon>
            </v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-sheet>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
