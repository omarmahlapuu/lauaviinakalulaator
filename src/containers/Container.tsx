import { useMemo } from "react";

const Container = (props: {limpa: boolean}) => {

    const limpaClass = useMemo(() => {
        return props.limpa ? "grid-item limpa" : "grid-item"
    }, [props.limpa])
    return (
        <div className="background">
            <div className={limpaClass} id="item1">
                1
            </div>
            <div className="grid-item" id="item2">
                2
            </div>
            <div className="grid-item" id="item3">
                3
            </div>
            <div className={limpaClass} id="item4">
                4
            </div>
            <div className="grid-item" id="item5">
                5
            </div>
            <div className={limpaClass} id="item6">
                6
            </div>
            <div className="grid-item" id="item7">
                7
            </div>
            <div className={limpaClass} id="item8">
                8
            </div>
            <div className={limpaClass} id="item9">
                9
            </div>
            <div className="grid-item" id="item10">
                10
            </div>
            <div className={limpaClass} id="item11">
                11
            </div>
            <div className="grid-item" id="item12">
                12
            </div>
            <div className="grid-item" id="item13">
                13
            </div>
        </div>
    );
};

export default Container;
