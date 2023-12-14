import { Metadata, type NextPage } from "next";

import FAQs from "@/containers/faqs";

export const metadata: Metadata = {
  title: "FAQs",
};

const FAQsPage: NextPage = () => {
  return <FAQs />;
};

export default FAQsPage;
