import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "Stay in touch with us",
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
