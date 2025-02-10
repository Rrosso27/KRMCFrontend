import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicationTable from "./ApplicationForm";
import "@testing-library/jest-dom";

test("renderiza la tabla completo", () => {

    render(
        <ApplicationTable
            rol={"admin"}
            stateUpdate={null}
            setStateUpdate={null}
            setApplicationToEdit={false}
            refresh={false}
        />
    );


});
