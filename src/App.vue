<script setup>
import { watch, ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const i18n = useI18n();

const changeLang = ref('en')


function onChangeRoute () {
  i18n.locale.value = changeLang.value
  router.push({ path: `/${changeLang.value.replace(/r/g, '')}${route.name}`})

  let changePath = changeLang.value === 'en' ? `/${route.name}` : `/${changeLang.value}/${route.name}`

  router.push(changePath)
}


watch(
      () => route.params,
      async ({lang}) => {
        i18n.locale.value = lang
        changeLang.value = lang
      }
    )

</script>

<template>
<div class="locale-switcher">
  <select v-model="changeLang" @change="onChangeRoute">
    <option value="en">English</option>
    <option value="es">Español</option>
  </select>
</div>
<nav>
    <router-link :to="{ path: changeLang == 'es' ? `/${changeLang}/` : '/'}">Home</router-link>&nbsp;
    <router-link :to="{ path: changeLang == 'es' ? `/${changeLang}/about` : '/about'}">About</router-link>
  </nav>

  <router-view />
</template>
