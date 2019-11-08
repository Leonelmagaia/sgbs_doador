<template>

<div class="q-pa-lg q-ma-lg">

<ul>

</ul>

    <q-table
      title="Doacoes "
      :data="data"
      :columns="columns"
      row-key="name"
      binary-state-sort
       :filter="filter"
      
    >

   <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

     
    </q-table>

  <br>
  <br>
  <br>

    <q-btn size="lg" round push color="red"  label="+">
      
        <q-popup-edit v-model="label" content-class="bg-white text-white">
            <q-input filled v-model="date" mask="date" :rules="['date']" @click="$refs.qDateProxy.show()"  hint="Data"  style="width: 250px" >
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date title= "Aniversario" v-model="date" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
                </q-icon>
            </template>
            </q-input>

            <q-input filled v-model="time" mask="time" :rules="['time']"  hint="Hora">
            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy :breakpoint="800">
                    <q-time
                        v-model="time"
                        format24h
                    />
                </q-popup-proxy>
                </q-icon>
            </template>
            </q-input>

        </q-popup-edit>
      
    </q-btn>
  </div>
</template>


<style lang="sass">
.my-sticky-header-table

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th 
    background-color: #f5f5dc

  thead tr:first-child th
    position: sticky
    top: 0
    opacity: 1
    z-index: 1
</style>


<script>

import axios from 'axios';

export default {

mounted()  { 
    
  axios.get(`https://sanguemozapi.herokuapp.com/api/agendamento`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
      console.log(response.data
      )
      console.log("--------------")
    })
    .catch(e => {
      this.errors.push(e)
    })
    

 },



  data () {
    return {

         filter: '',

         data:[],



      columns: [
        {
          
          name: 'Dador',
          required: true,
          label: 'Data ',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
          
        },
         { name: 'data_coletada', align: 'center', label: 'Data Coletada', field: 'data_coletada', sortable: true , },
        { name: 'hora_coletada', label: 'Hora Coletada', field: 'hora_coletada' },
        { name: 'volume_coletado', label: 'Volume Coletado', field: 'volume_coletado' },
      ],
    }
  }
}

</script>