import navItems from "@/data/navItems.json"
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Logo from "@/assets/Logo.png";

const subjects = ["Maths", "Physics", "Chemistry", "Biology", "English"]

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-border bg-card">
            <div className="container mx-auto px-6 py-16">
                {/* Top Section */}
                <div className="grid gap-10 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            {/* Logo Placeholder */}
                            <div className="rounded-xl bg-transparent">
                                <Image src={Logo} alt="MediQueue logo" width={80} height={80}></Image>

                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-primary">
                                    MediQueue
                                </h2>
                            </div>
                        </div>

                        <p className="mt-4 max-w-md text-muted-foreground">
                            Making quality education accessible for everyone.
                            Connect with expert tutors and book learning
                            sessions seamlessly.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-semibold text-primary">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {
                                navItems.slice(0, 5).map(item => <li key={item.id}>
                                    <Link
                                        href={item.path}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>)}
                        </ul>
                    </div>

                    {/* Learning Services */}
                    <div>
                        <h3 className="mb-4 font-semibold text-primary">
                            Learning Services
                        </h3>

                        <ul className="space-y-3">
                            {
                                subjects.map((subject, idx) =>
                                    <li key={idx} className="text-muted-foreground">
                                        {subject}
                                    </li>)
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold text-primary">
                            Contact Us
                        </h3>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <IoMdMail className="h-4 w-4" />
                                support@mediqueue.com
                            </li>

                            <li className="flex items-center gap-2 text-muted-foreground">
                                <FaPhone className="h-4 w-4" />
                                +123 456 789
                            </li>

                            <li className="flex items-center gap-2 text-muted-foreground">
                                <FaMapMarkerAlt className="h-4 w-4" />
                                Debrecen, Hungary
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-16 rounded-3xl bg-secondary/40 p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">
                                Stay Updated
                            </h3>

                            <p className="mt-2 text-muted-foreground">
                                Get notified about new tutors, subjects,
                                and learning resources.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center w-full max-w-md gap-3  ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                  flex-1
                  rounded-xl
                  border
                  border-border
                  bg-background
                  px-2
                  py-2
                  outline-none
                  focus:ring-2
                  focus:ring-primary
                "
                            />

                            <button
                                className="
                  rounded-xl
                  bg-primary
                  px-2
                  py-2
                  font-medium
                  text-primary-foreground
                  transition-all
                  hover:opacity-90
                "
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social */}
                <div className="mt-12 flex justify-center gap-4">
                    <Link
                        href="https://facebook.com"
                        className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              bg-primary/10
              text-primary
              transition-all
              hover:bg-primary
              hover:text-primary-foreground
            "
                    >
                        <FaFacebook size={18} />
                    </Link>

                    <Link
                        href="https://linkedin.com"
                        className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              bg-primary/10
              text-primary
              transition-all
              hover:bg-primary
              hover:text-primary-foreground
            "
                    >
                        <FaLinkedin size={18} />
                    </Link>

                    <Link
                        href="https://youtube.com"
                        className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              bg-primary/10
              text-primary
              transition-all
              hover:bg-primary
              hover:text-primary-foreground
            "
                    >
                        <FaYoutube size={18} />
                    </Link>

                    <Link
                        href="https://github.com"
                        className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              bg-primary/10
              text-primary
              transition-all
              hover:bg-primary
              hover:text-primary-foreground
            "
                    >
                        <FaGithub size={18} />
                    </Link>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-border pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-muted-foreground">
                            © 2026 MediQueue. All rights reserved.
                        </p>

                        <div className="flex gap-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-muted-foreground hover:text-primary"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="text-muted-foreground hover:text-primary"
                            >
                                Terms of Service
                            </Link>

                            <Link
                                href="/cookies"
                                className="text-muted-foreground hover:text-primary"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;