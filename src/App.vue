<template>
  <!-- v-app 반드시 필요 -->
  <v-app id="main">
    <!-- 상단 APP BAR -->
    <v-app-bar
      app
      dense
      color="light-blue accent-3"
    >
      <!-- 네비게이션 아이콘 -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="flex-grow-1"></div>

      <!-- 검색 아이콘 -->
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 네비게이션 -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list 
        shaped
        dense 
        color="grey lighten-4"
      > 
        <template v-for="(category, i) in categorys">
          <v-row 
            v-if="category.heading"
            :key="i"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="category.heading">
                {{ category.heading }}
              </v-subheader>
            </v-col>
          </v-row>

          <v-divider
            v-else-if="category.divider"
            :key="i"
            dark
            class="my-4"
          > </v-divider>

          <v-list-item
            v-else
            :key="i"
          >
            <v-list-item-action>
              <v-icon> {{ category.icon }} </v-icon>
            </v-list-item-action> 
            <v-content>
              <v-list-item-title class="grey--text">
                {{ category.text }}
              </v-list-item-title>
            </v-content>
          </v-list-item>

        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>

    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    categorys : [
      { icon: 'notice', text: '공지사항' },
      { icon: 'calendar', text: '일정' },
    ]
  }),
}
</script>

<style>
#main .v-navigation-drawer__border {
  display: none
}
</style>
