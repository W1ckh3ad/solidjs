import { JSX as SolidJSX } from "solid-js";
import { JSX as ScaleJSX } from "@telekom/scale-components/loader";

interface MyElementProps {
  children?: SolidJSX.Element;
}

type StencilToSolid<T> = {
  [P in keyof T]?: T[P] &
    MyElementProps &
    Omit<SolidJSX.HTMLAttributes<Element>, "className"> & {
      class?: string;
    };
};

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements extends StencilToSolid<ScaleJSX.IntrinsicElements> {
    }
  }
}
