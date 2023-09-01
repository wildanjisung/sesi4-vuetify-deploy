<template>
  <div class="about">
    <h1>Daftar nama nama Pokemon</h1>

    <v-layout>
      <v-flex>
        <v-btn color="#1976D2" outlined @click="changeTheme('#1976D2')">Biru</v-btn>
      </v-flex>
      <v-flex>
        <v-btn color="#39AC37" outlined @click="changeTheme('#39AC37')">Hijau</v-btn>
      </v-flex>
      <v-flex>
        <v-btn color="#DB9600" outlined @click="changeTheme('#DB9600')">Orange</v-btn>
      </v-flex>
      <v-flex>
        <v-btn outlined @click="changeKecerahan()">Gelap Terang</v-btn>
      </v-flex>

    </v-layout>
    <ul>
      <li v-for="item in listDariStore" :key="item.name">
        {{ item.name }}
      </li>
    </ul>

    <v-btn color="primary" @click="getPokemon">get Pokemon</v-btn>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    getPokemon() {
      this.$store.dispatch("fetchList")
    },
    changeTheme(color) {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color
      } else {
        this.$vuetify.theme.themes.light.primary = color
      }
      this.$vuetify.theme.themes.light.primary = color;
    },
    changeKecerahan() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary = this.$vuetify.theme.themes.dark.primary
      } else {
        this.$vuetify.theme.themes.dark.primary = this.$vuetify.theme.themes.light.primary
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  computed: {
    listDariStore() {
      return this.$store.state.list;
    }
  },
  mounted() {
    this.getPokemon();
  }
}
</script>
