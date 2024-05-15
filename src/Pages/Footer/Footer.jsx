import { FaGithub, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#e8e8e8]">
      <footer className="container mx-auto footer p-10 text-base-content">
        <aside>
          <img src={logo} alt="" />
          <p>Your Reliable solution to study</p>
          <div className="flex gap-6 my-6 text-3xl ">
            <a href="#">
              <FaSquareFacebook />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-sm lg:input-md input-bordered join-item"
              />
              <button className="btn btn-sm lg:btn-md btn-primary join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr className="border-t border-[#13131374] my-2" />
      <footer className="footer footer-center font-medium">
        <aside>
          <p className="p-3">
            Copyright © 2024 - All rights reserved by StudyBuddy
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
