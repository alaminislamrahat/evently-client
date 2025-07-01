import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProviders';
import { App } from '../../Firebase/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
import loginImg from '../../assets/Login-pana.png'; // 🖼️ Update to your path

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const auth = getAuth(App);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success('Login successful!');
        navigate(location.state ? location.state : '/');
      })
      .catch((error) => toast.error(error.message));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success('Logged in with Google!');
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full md:w-1/2 p-10 flex justify-center items-center">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-4xl font-bold text-[#F0725F] text-center">Welcome Back</h2>
          <p className="text-center text-gray-600 text-sm">Login to access your account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F0725F]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F0725F]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F0725F] text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-2 justify-between">
            <hr className="w-full border-gray-300" />
            <span className="text-sm text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button
            onClick={googleLogin}
            className="flex items-center justify-center w-full border py-3 rounded-md hover:bg-gray-50 transition"
          >
            <FcGoogle className="text-xl mr-2" />
            Login with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="/register" className="text-[#F0725F] font-semibold hover:underline">Register</a>
          </p>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2">
        <img src={loginImg} alt="Login Illustration" className="w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default Login;
