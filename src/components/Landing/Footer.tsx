import logo from "../assets/logo-dark.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconYoutube from "../assets/icon-youtube.svg";
import iconInstagram from "../assets/icon-instagram.svg";

function Footer() {
    return (
        <div className="mt-60 pt-[218px] w-svw h-[420px] bg-[#8DD3BB]">
            <div className="max-w-[1440px] mx-auto">
                <div className="w-[87%] mx-auto flex flex-row justify-between">
                    <div>
                        <img src={logo} alt="" />
                        <div className="flex flex-row justify-between mt-6">
                            <img src={iconFacebook} alt="" />
                            <img src={iconTwitter} alt="" />
                            <img src={iconYoutube} alt="" />
                            <img src={iconInstagram} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-24">
                            <h4 className="font-gothic font-bold text-green-950 -ml-px origin-left scale-x-125 tracking-tighter">
                                Our Destinations
                            </h4>
                            <p className="mt-3 font-medium text-sm text-green-950 opacity-70">
                                Canada
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Alaska
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                France
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Iceland
                            </p>
                        </div>
                        <div className="mr-24">
                            <h4 className="font-gothic font-bold text-green-950 -ml-px origin-left scale-x-125 tracking-tighter">
                                Our Activities
                            </h4>
                            <p className="mt-3 font-medium text-sm text-green-950 opacity-70">
                                Nothern Lights
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                {"Cruising & sailing"}
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Multi-activities
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Kayaking
                            </p>
                        </div>
                        <div>
                            <h4 className="font-gothic font-bold text-green-950 -ml-px origin-left scale-x-125 tracking-tighter">
                                Travel Blogs
                            </h4>
                            <p className="mt-3 font-medium text-sm text-green-950 opacity-70">
                                Bali Travel Guide
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Sri Lanks Travel Guide
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Peru Travel Guide
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Bali Travel Guide
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-24">
                            <h4 className="font-gothic font-bold text-green-950 -ml-px origin-left scale-x-125 tracking-tighter">
                                About Us
                            </h4>
                            <p className="mt-3 font-medium text-sm text-green-950 opacity-70">
                                Our Story
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Work with us
                            </p>
                        </div>
                        <div>
                            <h4 className="font-gothic font-bold text-green-950 -ml-px origin-left scale-x-125 tracking-tighter">
                                Contact Us
                            </h4>
                            <p className="mt-3 font-medium text-sm text-green-950 opacity-70">
                                Our Story
                            </p>
                            <p className="mt-2 font-medium text-sm text-green-950 opacity-70">
                                Work with us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
