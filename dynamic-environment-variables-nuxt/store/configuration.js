// Store Vuex contenant l'état de la configuration de l'application

export const state = () => ({
  maVariable: ''
})

export const mutations = {
  fullfill(state, data) {
    state.maVariable = data.maVariable;
  }
}

export const actions = {
  async loadConfiguration ({ commit }) {
    // chargement des données de configuration
    let response = await fetch(`/config.json`);
    let data = await response.json();
    commit('fullfill', data);
  }
}