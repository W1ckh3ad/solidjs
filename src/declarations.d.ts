import { JSX } from "solid-js";
import { Components } from "@telekom/scale-components";

interface MyElementProps {
  children?: JSX.Element;
}

interface ScaleButton {
  /**
   * (optional) If `true`, the button is disabled
   */
  disabled?: boolean;
  /**
   * (optional) Name of a file to be downloaded
   */
  download?: string;
  /**
   * (optional) When present, an <a> tag will be used
   */
  href?: string;
  /**
   * (optional) Set to `true` when the button contains only an icon
   */
  iconOnly?: boolean;
  /**
   * (optional) Icon position related to the label
   */
  iconPosition?: "before" | "after";
  /**
   * (optional) Set `tabindex` in the inner button or link element
   */
  innerTabindex?: number;
  setFocus?: () => Promise<void>;
  /**
   * (optional) The size of the button
   */
  size?: "small" | "large";
  /**
   * (optional) Injected CSS styles
   */
  styles?: string;
  /**
   * (optional) The target attribute for the <a> tag
   */
  target?: string;
  /**
   * (optional) Button type
   */
  type?: "reset" | "submit" | "button";
  /**
   * (optional) Button variant
   */
  variant?: string;
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "scale-button": ScaleButton & MyElementProps & ButtonHTMLAttributes<HTMLButtonElement>;
    }
  }
}
