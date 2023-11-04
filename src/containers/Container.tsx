import { useMemo } from "react";

const Container = (props: {limpa: boolean}) => {

    const limpaClass = useMemo(() => {
        return props.limpa ? "grid-item limpa" : "grid-item"
    }, [props.limpa])
    return (
        <div className="background">
            <div className={limpaClass} id="item1">

            </div>
            <div className="grid-item" id="item2">

            </div>
            <div className="grid-item" id="item3">

            </div>
            <div className={limpaClass} id="item4">

            </div>
            <div className="grid-item" id="item5">

            </div>
            <div className={limpaClass} id="item6">

            </div>
            <div className="grid-item" id="item7">

            </div>
            <div className={limpaClass} id="item8">

            </div>
            <div className={limpaClass} id="item9">

            </div>
            <div className="grid-item" id="item10">

            </div>
            <div className={limpaClass} id="item11">

            </div>
            <div className="grid-item" id="item12">

            </div>
            <div className="grid-item" id="item13">

            </div>
        </div>
    );
};

export default Container;
