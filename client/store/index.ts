import { MutationTree, GetterTree, ActionTree } from 'vuex'

// Init states
export const state = () => ({
  searchData: [],
  inputSearch: '',
})

// Root State
export type RootState = ReturnType<typeof state>

// Mutations
export const mutations: MutationTree<RootState> = {
  SET_SEARCH_DATA: (state, searchData) => (state.searchData = searchData),
  SET_INPUT_SEARCH: (state, inputSearch) => (state.inputSearch = inputSearch),
}

// Getters
export const getters: GetterTree<RootState, RootState> = {
  Data: (state) => state.searchData,
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  async Fetch({ commit, state }) {
    const indexState = { search: state.inputSearch }
    await this.$axios
      .$post('http://localhost:3333/crawler', indexState)
      .then((res: any) => {
        // eslint-disable-next-line no-console
        commit('SET_SEARCH_DATA', res)
        commit('SET_INPUT_SEARCH', '')
        this.$router.push('/results')
      })
      // eslint-disable-next-line no-console
      .catch((error: Error) => console.log(error))
  },
  GoBack({ commit }) {
    commit('SET_SEARCH_DATA', [])
    this.$router.push('/')
  },
}
