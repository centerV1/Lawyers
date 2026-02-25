import Hero from "@/components/Article/component/Hero"; 
import ArticleList from "./component/Article";
import OurCustomers from "../about/_components/OurCustomers";

export default function ArticlePageContent() {
  return (
    <div>
      <Hero />
      <ArticleList />
      <OurCustomers />
    </div>
  );
}