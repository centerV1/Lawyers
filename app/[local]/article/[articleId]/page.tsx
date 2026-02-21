import { notFound } from "next/navigation";
import { articleData } from "@/data/Article";
import Hero from "@/components/experience/component/Hero";
import HeroArticle from "@/components/Article/component/HeroArticle";
import SingleArticle from "@/components/Article/component/SingleArticle";
import OtherArticles from "@/components/Article/component/OtherArticles";

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articleData.find((item) => item.id === Number(id));

  if (!article) notFound();

  return (
    <main className="min-h-screen">
      <HeroArticle article={article} />
      <SingleArticle article={article} />
      <OtherArticles currentId={article.id} />
    </main>
  );
}