import { Metadata, type NextPage } from "next";

import Methodology from "@/containers/methodology";

export const metadata: Metadata = {
  title: "Methodology",
};

const MethodologyPage: NextPage = () => {
  return <Methodology />;
};

export default MethodologyPage;
