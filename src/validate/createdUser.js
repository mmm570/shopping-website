// validate.js
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

// Yup 驗證 schema
const schema = yup.object({
  name: yup.string().required('請輸入姓名'),
  email: yup.string().email('Email 格式錯誤').required('請輸入 Email'),
})

// 封裝 useForm 與欄位
export function useCreatedUserForm(initialValues = {}) {
  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema),
    initialValues, //設定初始值
  })

  const formData = {
    name: (() => {
      const { value, errorMessage } = useField('name')
      return { value, errorMessage }
    })(),
    email: (() => {
      const { value, errorMessage } = useField('email')
      return { value, errorMessage }
    })(),
  }

  return {
    formData,
    handleSubmit,
  }
}
