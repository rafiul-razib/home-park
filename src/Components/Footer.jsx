import wave from "../assets/images/wave.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#453F78] text-white relative">
      <aside>
        <img
          className="w-1/3 z-10"
          src="https://i.ibb.co/WyBTCjJ/logo-2x.png"
          alt=""
        />
        <p className="text-white z-10">
          HomPark Ltd.
          <br />
          Providing reliable service in Luxurious Real-Estate since 1992
        </p>
      </aside>

      <nav className="z-10">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="z-10">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="z-10">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

      <img src={wave} className="absolute bottom-0 left-0 w-full" alt="wave" />
    </footer>
  );
};

export default Footer;
