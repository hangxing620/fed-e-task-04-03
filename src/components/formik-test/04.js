import { useFormik } from 'formik'
import * as Yup from 'yup'

const validate = () => (
  Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required('Required'),
    password: Yup.string()
      .min(6, '密码长度必须大于6')
      .required('Required')
  })
)

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validate,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email && formik.touched.email && formik.errors.email}
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
      {formik.errors.password && formik.touched.password && formik.errors.password}
      <button type="submit" disabled={formik.isSubmitting}>Submit</button>
    </form>
  )
}
export default App