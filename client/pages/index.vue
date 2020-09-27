<template>
  <div>
    <c-flex justify="center" bg="index.bg">
      <c-flex align="center" max-width="950px" height="100vh">
        <c-input
          v-model="localInputSearch"
          focus-border-color="index.brd"
          is-required
          variant="outline"
          px="150px"
          margin-right="6"
          placeholder="What you want to search for?"
          text-align="center"
          bg="index.inp"
          size="lg"
          @input="handleInputSearch"
          @keyup.enter="Search"
        />
        <c-button bg="index.btn" color="index.txt" size="lg" @click="Search"
          >Search</c-button
        >
      </c-flex>
    </c-flex>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CFlex, CInput, CButton } from '@chakra-ui/vue'
import { mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Home',
  components: {
    CFlex,
    CInput,
    CButton,
  },
  data: () => ({
    localInputSearch: '',
  }),
  methods: {
    ...mapMutations({
      setInputSearch: 'SET_INPUT_SEARCH',
    }),
    ...mapActions({
      Search: 'Fetch',
    }),
    handleInputSearch() {
      this.setInputSearch(this.localInputSearch)
    },
  },
})
</script>
