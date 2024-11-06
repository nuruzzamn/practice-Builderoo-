import React from "react";
import { Prop, Link, useProps } from "builderoo";

export const props = {
  collection: Prop.collection().label("Featured Collection"),
};

export default function Welcome() {
  const { collection } = useProps();
  return (
    <section className="featured">
      <div className="featured-collection">
        <Link to={collection}>
          <div>
            <img src={collection.image} />
            <h3>{collection.title}</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
