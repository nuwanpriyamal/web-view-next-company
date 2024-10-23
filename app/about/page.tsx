import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "400 Solutions - Professional IT Services",

  description: "We are a team of experienced developers and designers who are passionate about creating innovative solutions to real-world problems.",
  openGraph: {
    images: ['/images/logo/removed_bg_logo.png'],
  },
  icons: {
    icon: '/images/logo/removed_bg_logo.png',
  },
  

  // other metadata
};

const AboutPage = () => {
  return (
    <>
     <Breadcrumb
  pageName="About Us"
  description="Welcome to 400 Solution Software, based in Matara. We are committed to excellence in mobile, web, and SaaS application development. Our journey is marked by continuous milestones as we strive to meet and exceed our goals. Explore how our dedication to innovation and quality drives our success in the IT industry."
/>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
