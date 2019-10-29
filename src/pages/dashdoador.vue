<template>

    <q-layout view="hHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-red-9"
      >

        

        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="profile" />
              </q-item-section>

              <q-item-section>
                Perfil
              </q-item-section>
            </q-item>

        

           <q-separator v-if="menuItem.separator" />

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <p>
            <div class="q-pa-md">

    <div class="row">
      <div class="col">
       <q-card style="max-width: 200px ">
        <q-card-section>
          <div class="text">Agendamentos</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
       <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
     
    />
        </q-card-section>
      </q-card>
      </div>
      <div class="col">
        <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text">Doações Feitas</div>
       
        </q-card-section>

        <q-separator inset />

        <q-card-section>
           <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
     color="red"
      track-color="red-3"
     
    />
        </q-card-section>
      </q-card>
      </div>

<div class="col">
      <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text justify-center">Litros Doados</div>
         
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="lime"
      track-color="lime-3"
     
     
    />
        </q-card-section>
      </q-card>
      </div>
      <div class="col">
       <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text ">Próxima Doação</div>
          
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="orange"
      track-color="orange-3"
    />
        </q-card-section>
      </q-card>
      </div>
    </div>

  </div>
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
</template>