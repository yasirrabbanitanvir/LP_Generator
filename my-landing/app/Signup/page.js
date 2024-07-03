import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUpPage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-600 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-24">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Sign Up Page</h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Sign Up</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
