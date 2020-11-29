<template>
    <v-container fluid>

        <v-row>
            <v-col cols="12" style="background-color: white;">
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  class="elevation-1"
                  hide-default-footer
                >
                  <template v-slot:top>
                    <v-toolbar
                      flat
                    >
                      <v-toolbar-title>Fotografias</v-toolbar-title>
                      <v-spacer></v-spacer>

                      <v-bottom-sheet
                        v-model="dialog"
                        inset
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                          >
                            Imprimir
                          </v-btn>

                           <v-btn
                            color="primary"
                            dark
                            class="mb-2 mr-2"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Nuevo personal
                          </v-btn>
                        </template>

                                                <v-sheet height="500px">
                                        <v-sheet height="100%" class="d-flex justify-center align-center">

                                            <v-sheet  height="95%" width="95%">
                                              <v-form ref="personal">
                                                <v-container fluid>
                                                  <v-row no-gutters>
                                                    <v-col cols="12">
                                                      <h2 class="primary--text"> {{ formTitle }}</h2>
                                                      <br>
                                                    </v-col>
                                                    <v-col cols="12">
                                                      <v-text-field label="Nombre" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6">
                                                      <v-text-field label="Apellido Paterno" required ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6">
                                                      <v-text-field label="Apellido Materno" class="pl-10" required ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="3">
                                                      <v-text-field label="Edad" required ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="3">
                                                      <v-select :items="roles" label="Rol" class="pl-10" required> </v-select>
                                                    </v-col>

                                                    <v-col cols="6">
                                                      <v-text-field label="Telefono" class="pl-10" required></v-text-field>
                                                      <br>
                                                    </v-col>

                                                    <v-col cols="6">
                                                      <v-text-field label="Email" required></v-text-field>
                                                      <br>
                                                    </v-col>

                                                    <v-col cols="6">
                                                      <v-text-field label="Contraseña" class="pl-10" required></v-text-field>
                                                      <br>
                                                    </v-col>

                                                    <v-col cols="12">
                                                  <v-sheet class="d-flex align-center">
                                                    <v-btn color="primary">
                                                      Registrar
                                                    </v-btn>
                                                    <a class="ml-5" @click="sheet = !sheet">Cancelar</a>
                                                  </v-sheet>
                                                    </v-col>      
                                                  </v-row>
                                                </v-container>
                                                </v-form>
                                          
                                            </v-sheet>

                                          </v-sheet>
                        </v-sheet>
                       

                      </v-bottom-sheet>
                    </v-toolbar>
                  </template>

                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="deleteItem(item)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>

                  <template v-slot:no-data>
                    <v-btn
                      color="primary"
                      @click="initialize"
                    >
                      Reiniciar
                    </v-btn>
                  </template>

                </v-data-table>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
export default {
  // nombre, edad, sexo, telefono, correo, contraseña
  name: 'Materia',
  data: () => ({
    dialog: false,
    headers: [
      { text: 'Especie', value: 'nombre' },
      { text: 'Collector', value: 'edad' },
      { text: 'Fotografia', value: 'telefono' },
      { text: 'Fecha', value: 'correo' },
      { text: 'Hora', value: 'contraseña' },
      { text: 'Acciones', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      nombre: '',
      edad: '',
      telefono: '',
      correo: '',
      contraseña: ''
    },
    defaultItem: {
      nombre: '',
      edad: '',
      telefono: '',
      correo: '',
      contraseña: ''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Registrar nuevo personal' : 'Editar datos del personal'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.desserts = [
        {
          nombre: 'Puma',
          edad: 'Juan Perez Garcia',
          telefono: 'IMG_99339.JPG',
          correo: '02/12/2020',
          contraseña: '22:00'
        },
          {
          nombre: 'Jaguar',
          edad: 'Juan Perez Garcia',
          telefono: 'IMG_99339.JPG',
          correo: '01/12/2020',
          contraseña: '10:00'
        },
          {
          nombre: 'Jaguar',
          edad: 'Juan Perez Garcia',
          telefono: 'IMG_99339.JPG',
          correo: '08/12/2020',
          contraseña: '13:00'
        },
          {
          nombre: 'Puma',
          edad: 'Juan Perez Garcia',
          telefono: 'IMG_99339.JPG',
          correo: '07/12/2020',
          contraseña: '19:00'
        },
          {
          nombre: 'Tigre',
          edad: 'Juan Perez Garcia',
          telefono: 'IMG_99339.JPG',
          correo: '04/12/2020',
          contraseña: '23:00'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      this.$swal.fire({
        title: '¿Estas seguro que quieres eliminar este maestro?',
        text: 'La información se borrara definitivamente',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.desserts.splice(index, 1)
          this.$swal.fire({
            icon: 'success',
            title: 'Maestro eliminado',
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
        this.$swal.fire({
          icon: 'success',
          title: 'Informacion actualizada',
          showConfirmButton: false,
          timer: 1000
        })
      } else {
        this.desserts.push(this.editedItem)
        this.$swal.fire({
          icon: 'success',
          title: 'Maestro registrado',
          showConfirmButton: false,
          timer: 1000
        })
      }
      this.close()
    }
  }

}
</script>