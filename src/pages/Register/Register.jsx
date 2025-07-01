import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProviders';
import { App } from '../../Firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import registerImg from '../../assets/Sign up-bro (1).png'; // ✅ Replace with your image

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const auth = getAuth(App);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinimumLength = password.length >= 6;

    if (!hasUppercase) {
      toast.error("Password must include at least one uppercase letter.");
      return false;
    }
    if (!hasLowercase) {
      toast.error("Password must include at least one lowercase letter.");
      return false;
    }
    if (!hasMinimumLength) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!validatePassword(password)) return;

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Signup successful!");
            navigate(location.state ? location.state : '/');
          })
          .catch(() => toast.error("Profile update failed."));
      })
      .catch(() => toast.error("Signup failed. Try again."));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Google Sign-in Successful.");
        navigate(location.state ? location.state : '/');
      })
      .catch(() => toast.error("Google Sign-in failed."));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Toaster position="top-right" />

      {/* Left - Form */}
      <div className="w-full md:w-1/2 p-10 flex justify-center items-center">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-4xl font-bold text-[#92E3A9] text-center">Create Account</h2>
          <p className="text-center text-gray-600 text-sm">Sign up to get started</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#92E3A9] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="https://"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#92E3A9] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#92E3A9] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#92E3A9] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#92E3A9] text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Register
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
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-[#92E3A9] font-semibold hover:underline">Login</a>
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden md:block md:w-1/2">
        <img src={registerImg} alt="Register Illustration" className="w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default Register;
