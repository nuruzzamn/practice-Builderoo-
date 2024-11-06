import React from "react";
import { Link, Prop, useBlocks, useProps } from "builderoo";

export const propsConfig = {
  image: Prop.image(),
  subtitle: Prop.text(),
  heading: Prop.text(),
  description: Prop.text(),
  link: Prop.url(),
  linkText: Prop.text(),
};
const Test = () => {
  const props = useProps(propsConfig);
  console.log("Props received:", props);
  const { image, subtitle, heading, description, link, linkText } = props;

  return (
    <section>
      <p>Page from main layout</p>
      <img src={image} className="w-20 h-20" />
      <div>
        <div>{subtitle}</div>
        <h3>{heading}</h3>
        <div>{description}</div>
        <Link href={link}>{linkText}</Link>
      </div>
    </section>
  );
};

export default Test;
