import React from 'react';
import { data } from '../data/dummy.js';

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

    const convertFormat = (str) => {
        const [hanja, hangul] = str.split(' ');
        return (
            <>
                <p>{hanja}</p>
                <p>({hangul})</p>
            </>
        );
    };

    return (
        <table>
            <thead>
                <tr>
                    <td></td>
                    <th>時</th>
                    <th>日</th>
                    <th>月</th>
                    <th>年</th>
                </tr>
            </thead>
            <tbody>
                {newData.map(({ label, data, isArray }, i) => (
                    <tr key={i}>
                        <td className="label">
                            <p>{label[0]}</p>
                            <p>({label[1]})</p>
                        </td>

                        {pillars.map((key) => (
                            <td
                                key={key}
                                className={
                                    label.includes('天干') ||
                                    label.includes('地支')
                                        ? 'box'
                                        : 'text'
                                }
                            >
                                {isArray
                                    ? data[key].map((item, i) => (
                                          <div key={i}>
                                              {convertFormat(item)}
                                          </div>
                                      ))
                                    : convertFormat(data[key])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
