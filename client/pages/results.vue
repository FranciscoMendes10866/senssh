<template>
  <c-flex>
    <c-box
      v-for="data in searchData"
      :key="data.index"
      mt="6"
      mb="6"
      ml="6"
      px="6"
      py="6"
      max-w="lg"
      border-width="1px"
      rounded="lg"
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
          ><b>{{ data.title }}</b></c-box
        >
      </a>
      <c-box as="span" color="gray.600" font-size="sm" ml="2">
        {{ data.description }}
      </c-box>
    </c-box>
  </c-flex>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { CBox, cFlex } from '@chakra-ui/vue'

export default Vue.extend({
  name: 'Results',
  components: {
    CBox,
    cFlex,
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      searchData: 'Data',
    }),
  },
})
</script>
