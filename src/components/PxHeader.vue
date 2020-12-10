    <!--
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#"
        ><img src="../assets/img/logo.png" alt="" style="width:130px;"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/administrador">Administrador </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Nosotros </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Iniciar Sesión
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  
  </header>
</template>

    -->

    <template>
   <v-sheet height="100%">
      <v-app-bar color="orange" app dark>  
            <img src="@/assets/karma.png" height="40">
            <v-tabs align-with-title >
                <v-tab link to="/">Inicio</v-tab>
                <v-tab link to="about">Nosotros</v-tab>
                <v-tab link to="administrador">App</v-tab>
                <v-tab link to="login">login</v-tab>
            </v-tabs>
           <!--  <v-text-field flat hide-details label="Buscar" solo prepend-inner-icon="mdi-magnify" dense light style="width:400px; margin-right:10px;"></v-text-field>-->

          <!-- 
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn> -->
      </v-app-bar>
      <router-view></router-view>
    </v-sheet>
</template>
