"use client"

import { Advertising, CategoryText, PageContent } from "@/components";
import { News } from "@/domain";
import useApi from "@/hooks/useApi.hook";
import { getDataAndHour } from "@/utils";
import { useEffect, useState } from "react";
import style from "./page.module.scss";

export default function Home() {
  const {getShow, show} = useApi();
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [data, setData] = useState<News | null>(null);

  useEffect(() => {
    getShow("c65262cb-2740-4e01-97a8-ecb34dbfa3c9")
  }, [])

  useEffect(() => {
    if(show) setData(show.data)
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
            <h1>{show.data.title}</h1>
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
    </PageContent>
  );
}
