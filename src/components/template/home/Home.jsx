import React from "react";
import Main from "../Main";

export default props => {
    return (
        <Main icon="home" title="Início" subtitle="Segundo projeto do React">
            <div className="display-4">
                Bem Vindo!
            </div>
            <hr />
            <p className="mb-0">Sistema de cadastro de cliente</p>
        </Main>
    )
}