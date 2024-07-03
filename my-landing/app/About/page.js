import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-600 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-24 flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:flex md:items-center md:justify-center mb-6 md:mb-0">
            <img src="undraw_picture_re_ne03.svg" alt="About Us" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
          <div>
            <p className="text-lg text-white leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eu odio congue, a posuere ligula placerat. Donec ultricies lectus vel dapibus lobortis. Nam et orci nec mauris finibus lacinia.</p>
            <p className="text-lg text-white leading-relaxed mb-6">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel nisi non libero ultricies scelerisque. Duis ac velit sit amet nisi pellentesque accumsan. Cras quis scelerisque nulla, ac fermentum quam.</p>
            <p className="text-lg text-white leading-relaxed">Sed eu libero sit amet eros consequat pharetra ut nec tortor. Integer consectetur nunc ac orci lobortis, a sagittis est sagittis. Proin lobortis consectetur velit, sed posuere nisi volutpat nec.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
