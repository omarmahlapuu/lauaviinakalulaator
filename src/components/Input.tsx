import { Dispatch, SetStateAction, useMemo, useState } from "react";

const Input = (props: {setLoadMusic: Dispatch<SetStateAction<boolean>>}) => {
    const [money, setMoney] = useState<number | undefined>(undefined);
    const [size, setSize] = useState<number | undefined>(0.5);

    const [prices] = useState([
        { size: 0.5, price: 6.49 },
        { size: 0.7, price: 9.29 },
        { size: 1.0, price: 12.99 },
    ])
    

    const calculatePrice = useMemo(() => {
        const selected = prices.find(f=>f.size === size)?.price
        if (!selected || !money) return null
        const res = Math.floor(money / selected)
        return  res + " " + "laudurit!"
    }, [money, prices, size]);
    return (
        <div className="input-container" onClick={() => props.setLoadMusic(true)}>
            <div className="input-group">
                <label htmlFor="">Palju pappi on!?</label>
                <input type="number" value={money} onChange={(e) => setMoney(e.target.valueAsNumber)} />
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
            <div className="result">
                {calculatePrice}
            </div>
        </div>
    );
};

export default Input;
