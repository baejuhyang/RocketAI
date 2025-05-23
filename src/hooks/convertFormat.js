export const convertFormat = (str) => {
    const [hanja, hangul] = str.split(' ');
    return (
        <>
            <p className="hangul">{hanja}</p>
            <p className="hanja">({hangul})</p>
        </>
    );
};

export const convertFormat2 = (str) => {
    const [hangul, hanja, hanja2] = str.split(' ');
    return (
        <div>
            <p className="hangul">{hangul}</p>
            <p className="hanja">{hanja}</p>
            <p className="hanja2">{hanja2}</p>
        </div>
    );
};
