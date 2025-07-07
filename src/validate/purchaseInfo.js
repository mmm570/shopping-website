// validate.js
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

// Yup 驗證 schema
const schema = yup.object({
  purchaserName: yup.string().required('請輸入購買人姓名'),
  purchaserPhone: yup
    .string()
    .required('請輸入購買人電話')
    .matches(/^09\d{8}$/, '手機號碼格式錯誤'),
  purchaserEmail: yup.string().required('請輸入購買人 Email').email('Email 格式錯誤'),
  recipientName: yup.string().required('請輸入收件人姓名'),
  recipientPhone: yup
    .string()
    .required('請輸入收件人電話')
    .matches(/^09\d{8}$/, '手機號碼格式錯誤'),
  recipientEmail: yup.string().required('請輸入收件人 Email').email('Email 格式錯誤'),
  city: yup.string().required('請輸入收件縣市'),
  detail: yup.string().required('請輸入收件詳細地址'),
})

// 封裝 useForm 與欄位
export function usepurchaseInfoForm(initialValues = {}) {
  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema),
    initialValues, //設定初始值
  })

  const formData = {
    purchaserName: (() => {
      const { value, errorMessage } = useField('purchaserName')
      return { value, errorMessage }
    })(),
    purchaserPhone: (() => {
      const { value, errorMessage } = useField('purchaserPhone')
      return { value, errorMessage }
    })(),
    purchaserEmail: (() => {
      const { value, errorMessage } = useField('purchaserEmail')
      return { value, errorMessage }
    })(),
    recipientName: (() => {
      const { value, errorMessage } = useField('recipientName')
      return { value, errorMessage }
    })(),
    recipientPhone: (() => {
      const { value, errorMessage } = useField('recipientPhone')
      return { value, errorMessage }
    })(),
    recipientEmail: (() => {
      const { value, errorMessage } = useField('recipientEmail')
      return { value, errorMessage }
    })(),
    city: (() => {
      const { value, errorMessage } = useField('city')
      return { value, errorMessage }
    })(),
    detail: (() => {
      const { value, errorMessage } = useField('detail')
      return { value, errorMessage }
    })(),
  }

  return {
    formData,
    handleSubmit,
  }
}
