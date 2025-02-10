import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicationForm from "./ApplicationForm";
import "@testing-library/jest-dom";

test("renderiza el formulario completo", () => {
    render(<ApplicationForm
        applicationToEdit={null}
        refreshApplication={jest.fn()}
        clearEdit={jest.fn()}
    />);


});
