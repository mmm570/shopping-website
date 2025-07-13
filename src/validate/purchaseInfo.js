// validate.js
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string, ref } from 'yup'

export default () =>
  useForm({
    validationSchema: toTypedSchema(
      object({
        purchaserName: string().required('請輸入購買人姓名'),
        purchaserPhone: string()
          .required('請輸入購買人電話')
          .matches(/^09\d{8}$/, '手機號碼格式錯誤'),
        purchaserEmail: string().required('請輸入購買人 Email').email('Email 格式錯誤'),
        recipientName: string().required('請輸入收件人姓名'),
        recipientPhone: string()
          .required('請輸入收件人電話')
          .matches(/^09\d{8}$/, '手機號碼格式錯誤'),
        city: string().required('請輸入收件縣市'),
        addressDetail: string().required('請輸入收件詳細地址'),
        remark: string().default(null).notRequired(),
      }),
    ),
    initialValues: {
      purchaserName: null,
      purchaserPhone: null,
      purchaserEmail: null,
      recipientName: null,
      recipientPhone: null,
      city: null,
      addressDetail: null,
      remark: null,
    },
  })
