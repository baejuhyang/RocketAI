import { data } from '../data/dummy.js';
import React from 'react';

export const TableTitle = () => {
    const { name, birth } = data;
    const [date, time] = birth.split(' ');
    const [year, month, day] = date.split('-');

    return (
        <div className="table-title">
            <p>{name}님의 사주</p>
            <p>
                {year}년 {month}월 {day}일 {time}
            </p>
        </div>
    );
};
