import scss from '../../styles/loginInput.module.scss'

export type InputProps = {
  register: any
  name: string
  label: string
}
const LoginInput = ({ register, name, label }: InputProps) => {
  return (
    <div className={scss.wrapper}>
      <input type={'text'} id={name} {...register(name)} required={true} />
      {label && (
        <label htmlFor={name}>{label}</label>
      )}
    </div>
  )
}

export default LoginInput
