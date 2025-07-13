// validate.js
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string, ref } from 'yup'

export default () =>
  useForm({
    validationSchema: toTypedSchema(
      object({
        account: string().default(null).required('帳號為必填').matches(/^\S*$/, '不可包含空格'),
        familyName: string().default(null).required('姓為必填').matches(/^\S*$/, '不可包含空格'),
        lastName: string().default(null).required('名為必填').matches(/^\S*$/, '不可包含空格'),
        email: string().email('Email 格式錯誤').required('請輸入 Email'),
        password: string()
          .default(null)
          .required(`密碼為必填`)
          .matches(
            new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
            '密碼需要包含英文大小寫、數字與符號，且要超過 8 碼',
          )
          .matches(/^\S*$/, '不可包含空格'),
        confirmPassword: string().when('password', (password, schema) =>
          password
            ? schema.required('密碼再確認為必填').oneOf([ref('password')], '密碼再確認輸入錯誤')
            : schema.notRequired(),
        ),
        remark: string().default(null).notRequired(),
      }),
    ),
    initialValues: {
      account: null,
      familyName: null,
      lastName: null,
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      remark: null,
    },
  })
