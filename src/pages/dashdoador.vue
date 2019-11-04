<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="brand">

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          <q-icon name="favorite" />
          SGBS
        </q-toolbar-title>
     <q-space />

     <q-btn-dropdown
      icon="person_outline"
      color="red-5"
    >
      <div class="row no-wrap q-pa-md">

        <div class="column items-center">
      
        <q-btn color="red-5" label="Terminar Sessão"/>
        </div>
      </div>

    </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="brand"
    >
      <q-list bordered class="rounded-borders">
        <q-item-label header class="caption">Menu</q-item-label>
        <q-item clickable to="/paginainicial">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section > 
            <q-item-label text-color="white" >Página Inicial</q-item-label>
          </q-item-section>
        </q-item>


      <q-item disable to="/perfil">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Perfil</q-item-label>
          </q-item-section>
        </q-item>
  
        <q-item clickable tag="a" to="/agendamentos">
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Agendamentos</q-item-label>
          </q-item-section>
        </q-item>

          
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass">

.brand

    background-color:(#D11E19)
    color: white
    font-size : 16px;
</style>

<style lang="sass">

.caption
    pading-top: 2px;
    color: white
    font-size : 11px;
 

</style>

<script>
export default {
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
