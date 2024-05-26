import { Advertising, CategoryText, PageContent } from "@/components";
import style from "./page.module.scss";

export default function Home() {
  const data = {
    "id": "c65262cb-2740-4e01-97a8-ecb34dbfa3c9",
    "title": "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC",
    "category": {
      "id": "e2a2c878-582c-4c96-abc5-d02eb39334ee",
      "code": "economia",
      "name": "Economia"
    },
    "image": "/assets/images/economia.jpg",
    "first_sentence": "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
    "content": "<p>Banco Central libera consulta a dinheiro esquecido em bancos<p><p>O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos 'esquecidos' nos bancos poderá eventualmente ter nas próximas fases do sistema.<p><p>Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo).<p><p>\"Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases\", informou o BC ao ser questionado pelo g1.<p><p>Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões. <p><p>Banco Central libera consulta de dinheiro ‘esquecido’ em bancos: saiba como fazer<p><p>Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados 'ao longo de 2022'.<p><p>Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.<p>",
    "created_at": "2022-02-13T16:30:00.000Z",
    "author": "Redação",
    "headline": true
  }

  const getDataAndHour = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);

    const localDateTime = new Date(dateTime.getTime() + (dateTime.getTimezoneOffset() * 60000));

    const formattedDate = `${localDateTime.getDate()}/${localDateTime.getMonth() + 1}/${localDateTime.getFullYear()}`;
    const formattedHour = `${localDateTime.getHours()}h${localDateTime.getMinutes()}`;

    return { date: formattedDate, hour: formattedHour };
  }

  const {date, hour} = getDataAndHour(data.created_at);

  return (
    <PageContent backButton>
      <div className={style.container}>

        <div className={style.contentTitle}>
          <CategoryText category={data.category} />
          <h1>{data.title}</h1>
        </div>

        <div>
          <p className={style.text}>
            {data.first_sentence}
          </p>
        </div>

        <div>
          <span className={style.span}>
            {date} as {hour}, Por: {data.author}
          </span>
        </div>

        <div>
          <Advertising />
        </div>


        <div dangerouslySetInnerHTML={{ __html: data.content }} className={style.content}></div>
      </div>
    </PageContent>
  );
}
