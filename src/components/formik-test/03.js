import { useFormik } from 'formik'

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = '密码的长度不能小于6'
  }
  return errors
}

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
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