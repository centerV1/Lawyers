import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleData } from "@/data/Article";
import HeroArticle from "@/components/Article/component/HeroArticle";
import SingleArticle from "@/components/Article/component/SingleArticle";
import OtherArticles from "@/components/Article/component/OtherArticles";

type PageProps = {
  params: Promise<{
    articleId: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { articleId } = await params;
  const article = articleData.find((item) => item.articleId === Number(articleId));
  return {
    title: article?.title_th || article?.title_en || "บทความ",
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { articleId } = await params;
  const article = articleData.find((item) => item.articleId === Number(articleId));

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <HeroArticle article={article} />
      <SingleArticle article={article} />
      <OtherArticles currentId={article.articleId} />
    </main>
  );
}