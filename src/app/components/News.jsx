"use client";
import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keywords, setKeywords] = useState("dubbing, technology"); 

  const apiKey = "78ef24cfe9b7433dba4836a28c2d1c94";
  const country = "br"; 

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${keywords}&language=en&apiKey=${apiKey}`
        );
        const data = await response.json();

        if (data.status === "ok") {
          
          setNewsData(data.articles.slice(0, 12));
        } else {
          setError(data.message || "Erro ao buscar notícias");
        }
      } catch (err) {
        setError("Erro ao se conectar com a API");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [keywords]);

  return (
    <>
      <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white">
        <h5 className="text-[#9A9A9A]">| MLA News</h5>
        <h1 className="text-5xl font-bold">
          <span className="text-[#E6C88A]">MLA</span> News
        </h1>
        <h2 className="text-xl mt-5 mb-10">
          Notícias sobre localização e dublagem em destaque
        </h2>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>Erro: {error}</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {newsData.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                description={news.description}
                imgUrl={news.urlToImage || "/images/default-news.jpg"}
                gitURL={news.url} 
                previewURL={news.url}
                date={news.publishedAt} 
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default News;
