import { useForm } from "react-hook-form";
import Field from "../common/Field";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

const From = () => {
  const navigate = useNavigate();
  const {api} = useAxios();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitFrom = async (fromData) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        fromData
      );
      
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitFrom)}>
      <div className="mb-3">
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "This field is required" })}
            type="email"
            id="email"
            className="form-input"
            placeholder="Phone number, username, or email"
          />
        </Field>
      </div>

      <div className="mb-3">
        <div className="relative">
          <Field label="password" error={errors.password}>
            <input
              {...register("password", { required: "This field is required" })}
              type="password"
              id="password"
              className="form-input"
              placeholder="Password"
              aria-label="Password"
            />
          </Field>
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
          >
            Show
          </button>
        </div>
      </div>

      <div className="mb-4">
        <button type="submit" className="login-button">
          Log in
        </button>
      </div>

      <div className="or-separator">OR</div>

      <div className="mb-4">
        <button type="submit" className="login-button">
          Log in with Google
        </button>
      </div>
    </form>
  );
};

export default From;
