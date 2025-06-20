import * as yup from 'yup'

export const formSchema = yup.object({
  name: yup.string().required('請輸入姓名'),
  email: yup.string().email('Email 格式錯誤').required('請輸入 Email'),
})
