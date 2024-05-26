"use client"

import { Advertising, CategoryText, PageContent } from "@/components";
import { PageError } from "@/components/PageError";
import { News } from "@/domain";
import useApi from "@/hooks/useApi.hook";
import { getDataAndHour } from "@/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./page.module.scss";

export default function NewsDetails() {
  const {getShow, show} = useApi();
  const { id } = useParams()

  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [data, setData] = useState<News | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      getShow(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (show && !show.error){
      setData(show.data)
    }
  }, [show])

  useEffect(() => {
    if(data){
      const {date, hour} = getDataAndHour(data.created_at);
      setDate(date)
      setHour(hour)
    }
  }, [data])

  return (
    <PageContent backButton>
      {!show.loading && !show.error && data && (
        <div className={style.container}>

          <div className={style.contentTitle}>
            <CategoryText category={show.data.category} />
            <h1 className={style.title}>{show.data.title}</h1>
          </div>

          <div>
            <p className={style.text}>
              {show.data.first_sentence}
            </p>
          </div>

          <div>
            <span className={style.span}>
              {date} as {hour}, Por: {show.data.author}
            </span>
          </div>

          <div>
            <Advertising />
          </div>

          <div dangerouslySetInnerHTML={{ __html: show.data.content }} className={style.content}></div>
        </div>
      )}

      {show.error && (
        <PageError
          title="Página não encontrada"
          text="Não foi possível encontrar o recurso solicitado"
        />
      )}
    </PageContent>
  );
}
