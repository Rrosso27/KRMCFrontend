import React from "react";
import { render, screen } from "@testing-library/react";
import EmployeeTable from "./ApplicationForm";
import "@testing-library/jest-dom";

test("renderiza la tabla completo", () => {

    render(
        <EmployeeTable
            rol={"admin"}
            setEmployeeToEdit={null}
            refresh={false}

        />
    );


});
