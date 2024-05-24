import React, {Fragment} from "react";
import Header from "./components/ui/header/Header";


export default function App() {
    return (
        // Избегаем ненужного div с помощью Fragment
        <Fragment>
            <Header />
        </ Fragment>
    )
}
