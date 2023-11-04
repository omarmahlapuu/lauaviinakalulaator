import { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import Input from "./components/Input";
import Container from "./containers/Container";

function App() {
    const [loadMusic, setLoadMusic] = useState(false);
    const [limpa, setLimpa] = useState(false);

    return (
        <>
            <AudioPlayer loadMusic={loadMusic} />
            <Container limpa={limpa}/>
            <Input setLoadMusic={setLoadMusic} limpa={limpa} setLimpa={setLimpa}/>
        </>
    );
}

export default App;
