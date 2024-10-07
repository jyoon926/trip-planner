import { FaGoogle } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-2xl">Let's start planning your next trip!</p>
      <button>
        <FaGoogle className="opacity-60" />
        Log in with Google
      </button>
    </div>
  );
}
