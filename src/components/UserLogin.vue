<template>
  <VWindowItem value="one">
  <VRow>
  <VCol cols="12">
      <VForm :disabled="isSubmitting" @submit.prevent="submit">
        <VTextField
        label="帳號"
        minlength="4" maxlength="20" counter
        prepend-inner-icon="mdi-account"
        v-model="account.value.value"
        :error-messages="account.errorMessage.value"
        ></VTextField>
        <VTextField
        label="密碼" :type="show3 ? 'text' : 'password'"
        :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="show3 = !show3"
        minlength="4" maxlength="20" counter
        prepend-inner-icon="mdi-lock"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        ></VTextField>
        <VBtn type="submit" color="orange-darken-4">登入</VBtn>
      </VForm>
    </VCol>
  </VRow>
  </VWindowItem>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useApi } from '@/composables/axios'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref } from 'vue'
import { useUserStore } from '@/store/user'

const router = useRouter()
const createSnackbar = useSnackbar()
const { api } = useApi()
const user = useUserStore()

const show3 = ref(false)

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login(data.result)
    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
</script>
