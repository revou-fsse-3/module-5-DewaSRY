import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useState,
  useRef,
  ReactNode,
} from "react";
import Panel from "@common/Panel";
interface ExpandProps extends HTMLAttributes<HTMLDivElement> {
  expended: ReactNode | string;
}
type ExpandComponents = FC<ExpandProps> & PropsWithChildren;
const Expand: ExpandComponents = ({ children, expended, ...resProps }) => {
  const [expanded, setExpand] = useState(false);
  const divEl = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setExpand((prev) => !prev);
  };
  const handleClose = () => () => {
    setExpand(false);
  };

  return (
    <div ref={divEl} className="inline-block">
      <div
        className={
          "cursor-pointer outline-none " +
          `${resProps.className ? resProps.className : ""}`
        }
        {...resProps}
        onClick={handleClick}
      >
        {expended}
      </div>

      {expanded && (
        <Panel handleClose={handleClose()} parent={divEl.current!}>
          {children}
        </Panel>
      )}
    </div>
  );
};

export default Expand;
