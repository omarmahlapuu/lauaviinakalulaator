import { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import Input from "./components/Input";
import Container from "./containers/Container";

function App() {
    const [loadMusic, setLoadMusic] = useState(false);
    return (
        <>
            <AudioPlayer loadMusic={loadMusic} />
            <Container />
            <Input setLoadMusic={setLoadMusic} />
        </>
    );
}

export default App;
