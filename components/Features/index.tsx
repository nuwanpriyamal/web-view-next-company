import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
        <SectionTitle
          title="Our Services"
          paragraph="At 400 Solution Software, we provide a comprehensive range of services to meet your business needs. From custom web and mobile application development to SaaS solutions like CRM and HRM systems, we cater to industries including healthcare, finance, insurance, and education. Our global services are powered by a team of experts in software architecture, development, project management, and business analysis, ensuring top-tier solutions for businesses worldwide."
          center
        />


          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
