import React from 'react';
import { data } from '../data/dummy.js';
import { convertFormat, convertFormat2 } from '@/hooks/convertFormat.js';

export const Table = () => {
    const { saju } = data;
    const newData = [
        { label: ['十星', '십성'], data: saju.tenGod },
        { label: ['天干', '천간'], data: saju.heavenlyStem },
        { label: ['地支', '지지'], data: saju.earthlyBranch },
        { label: ['十星', '십성'], data: saju.tenGod2 },
        { label: ['十二運星', '십이운성'], data: saju.lifeCycle },
        { label: ['十二神殺', '십이신살'], data: saju.spiritKillingStar },
        {
            label: ['貴人', '귀인'],
            data: saju.noblePerson,
            isArray: true,
        },
    ];
    const pillars = ['hour', 'day', 'month', 'year'];

    return (
        <table>
            <thead>
                <tr>
                    <th className="out"></th>
                    <th className="in">時</th>
                    <th className="in">日</th>
                    <th className="in">月</th>
                    <th className="out">年</th>
                </tr>
            </thead>
            <tbody>
                {newData.map(({ label, data, isArray }, i) => (
                    <tr key={i}>
                        <td className={`label${i === 1 ? ' in-b' : ''}`}>
                            <p>{label[0]}</p>
                            <p>({label[1]})</p>
                        </td>

                        {pillars.map((key, idx) => {
                            const value = data[key];

                            // 셀 스타일 (box 또는 text)
                            const cellClass =
                                i === 1 || i === 2 ? 'box' : 'text';
                            // 셀 border
                            const cellBorder =
                                i === 1 && idx === 3
                                    ? 'in-b out-r'
                                    : i === 1 && idx !== 3
                                      ? 'in-b in-r'
                                      : i === 2 && idx === 3
                                        ? 'out'
                                        : idx === 3
                                          ? 'out'
                                          : 'in';

                            // box일 때 색상 클래스 지정
                            const char = i === 1 || i === 2 ? value[0] : '';
                            const colorClass =
                                char === '임' || char === '해' || char === '계'
                                    ? 'black'
                                    : char === '정' || char === '사'
                                      ? 'red'
                                      : char === '인'
                                        ? 'blue'
                                        : char === '유'
                                          ? 'white'
                                          : '';

                            return (
                                <td
                                    key={key}
                                    className={`${cellClass} ${cellBorder} ${colorClass}`}
                                >
                                    {isArray ? (
                                        value.length > 0 ? (
                                            value.map((item, idx) => (
                                                <div key={idx}>
                                                    {convertFormat(item)}
                                                </div>
                                            ))
                                        ) : (
                                            <div>
                                                <p className="no">(없음)</p>
                                            </div>
                                        )
                                    ) : i === 1 || i === 2 ? (
                                        convertFormat2(value)
                                    ) : (
                                        convertFormat(value)
                                    )}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
