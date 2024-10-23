import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "400 Solutions - Professional IT Services",
  description: "400 Solutions: Leading provider of custom software development, web applications, and digital transformation solutions.",
  openGraph: {
    images: ['/images/logo/removed_bg_logo.png'],
  },
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
  pageName="Contact Us"
  description="Get in touch with 400 Solution Software, located in Matara. We value your feedback and inquiries. Our team is here to assist you with any questions regarding our services, partnerships, or solutions. Reach out to us today, and let's discuss how we can help you achieve your goals."
/>


      <Contact />
    </>
  );
};

export default ContactPage;
