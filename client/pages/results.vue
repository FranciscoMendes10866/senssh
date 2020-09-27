<template>
  <div>
    <c-flex bg="results.bg" justify="left">
      <c-flex direction="column" px="5">
        <c-button mt="6" bg="results.btn" @click="GoBack"
          ><c-text color="results.btx">Go Back To Search</c-text></c-button
        >
        <c-box
          v-for="data in searchData"
          :key="data.index"
          mt="4"
          mb="4"
          bg="results.crd"
          px="6"
          py="6"
          max-w="600px"
          border-width="1px"
          rounded="md"
          overflow="hidden"
        >
          <a :href="data.url" target="blank">
            <c-box
              d="flex"
              align-items="baseline"
              mt="1"
              font-weight="semibold"
              as="h4"
              line-height="tight"
              is-truncated
              ml="2"
              ><c-text font-size="xl" color="results.txt">{{
                data.title
              }}</c-text></c-box
            >
          </a>
          <c-box as="span" color="gray.600" font-size="sm" ml="2">
            <c-text font-size="sm" color="results.txt">{{
              data.description
            }}</c-text>
          </c-box>
        </c-box>
      </c-flex>
    </c-flex>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { CBox, CFlex, CText, CButton } from '@chakra-ui/vue'

export default Vue.extend({
  name: 'Results',
  components: {
    CBox,
    CFlex,
    CText,
    CButton,
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      searchData: 'Data',
    }),
  },
  methods: {
    ...mapActions({
      GoBack: 'GoBack',
    }),
  },
})
</script>
