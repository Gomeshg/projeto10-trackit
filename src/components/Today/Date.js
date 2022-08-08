import styled from "styled-components";
import dayjs from "dayjs";


export default function Date(){

    const listDaysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dayWeek = listDaysWeek[dayjs().day()];
    const dayMonth = dayjs().date();
    const month = dayjs().month() > 8 ? `${(dayjs().month() + 1)}`: `0${(dayjs().month() + 1)}`;

    return(
        <h3>{dayWeek}, {dayMonth}/{month}</h3>
    );
}
