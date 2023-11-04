import { Dispatch, SetStateAction, useMemo, useState } from "react";

const Input = (props: { setLoadMusic: Dispatch<SetStateAction<boolean>>; limpa: boolean; setLimpa: Dispatch<SetStateAction<boolean>> }) => {
    const [money, setMoney] = useState<number | undefined>(undefined);
    const [size, setSize] = useState<number | undefined>(0.5);
    const [limpaPrice] = useState(0.99)
 
    const [prices] = useState([
        { size: 0.5, price: 6.49 },
        { size: 0.7, price: 9.29 },
        { size: 1.0, price: 12.99 },
    ]);

    const moneyNeeded = useMemo(() => {
        const selected = prices.find((f) => f.size === size)?.price;
        if (!selected || !money) return null;
        return props.limpa ? selected + limpaPrice : selected
    }, [limpaPrice, money, prices, props.limpa, size])

    const calculateAmount = useMemo(() => {
        const selected = prices.find((f) => f.size === size)?.price;
        if (!selected || !money || !moneyNeeded) return null;

        const res = Math.floor(money / moneyNeeded);
        return res;
    }, [prices, money, moneyNeeded, size]);

    const result = useMemo(() => {
        const res = calculateAmount ? calculateAmount + " " + "laudurit!" : null
        if (res && props.limpa && calculateAmount) {
            const limpaAmount = size === 1.0 ? 2 : 1


            return <>
            <div>{res}</div>
            <div>{limpaAmount * calculateAmount + " limpat!"}</div>
            </>
        }
        return res;
    }, [calculateAmount, props.limpa, size])
    return (
        <div className="input-container" onClick={() => props.setLoadMusic(true)}>
            <div className="input-group">
                <label htmlFor="">Palju pappi on!?</label>
                <input type="number" value={money} onChange={(e) => setMoney(e.target.valueAsNumber)} />
            </div>
            <div className="switch-group">
                <label htmlFor="">Lisa limpat</label>
                <label className="switch">
                    <input type="checkbox" onChange={(e) => props.setLimpa(e.target.checked)}/>
                    <div className="slider"></div>
                    <div className="slider-card">
                        <div className="slider-card-face slider-card-front"></div>
                        <div className="slider-card-face slider-card-back"></div>
                    </div>
                </label>
            </div>
            <div className="input-group">
                <label htmlFor="">Lauduri suurus</label>
                <select id="price-select" name="price" onChange={(e) => setSize(parseFloat(e.target.value))}>
                    {prices.map((item, index) => (
                        <option key={index} value={item.size}>
                            {item.size}L, Hind: {item.price}€
                        </option>
                    ))}
                </select>
            </div>
            <div className="result">{result}</div>
        </div>
    );
};

export default Input;
