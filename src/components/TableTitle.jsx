import { data } from '../data/dummy.js';
import React from 'react';

export const TableTitle = () => {
    const { name, birth } = data;

    return (
        <div className="table-title">
            <p>{name}님의 사주</p>
            <p>{birth} 년 월 일 :</p>
        </div>
    );
};
