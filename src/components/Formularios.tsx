import { useForm } from '../hooks/useForm';

export const Formularios = () => {
  const {state, onChange} = useForm({
    email: "test@gmail.com",
    password: "12345",
  })

  const {email, password} = state

  return (
    <>
      <h3>Formularios</h3>

      <input
        type="text"
        onChange={({ target }) => onChange(target.value, "email")}
        value={email}
        className="form-control"
        placeholder="Email"
      />
      <input
        type="text"
        onChange={({ target }) => onChange(target.value, "password")}
        value={password}
        className="form-control mt-2 mb-2"
        placeholder="Password"
      />
    </>
  );
};
