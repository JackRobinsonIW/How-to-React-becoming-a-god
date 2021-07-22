import { withLoader } from "../../utils/withLoader";

export type HelloWorldProps = {
  name: string;
};

export const HelloWorld = (props: HelloWorldProps) => {
  const { name } = props;
  return <h1>Hello World {name}!</h1>;
};

export const HelloWorldWithLoader = withLoader(HelloWorld);
