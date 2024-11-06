import {Prop} from "builderoo";

export const productImageSizes = [[200, 200], [800, 800], [1200, 1200], [1600, 1600]]

export const themeConfig = {
  "logo": {
    image: Prop.image().default("/logo.png"),
    width: Prop.number().default(10),
    _meta_: Prop.meta().label("Logo Config")
  },
  card: Prop.text()
}
