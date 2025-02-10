import React from "react";
import { render, screen } from "@testing-library/react";
import EmployeeForm from "./ApplicationForm";
import "@testing-library/jest-dom";

test("renderiza el empleado completo", () => {
    render(<EmployeeForm
        employeeToEdit={null}
        refreshEmployees={jest.fn()}
        clearEdit={jest.fn()}
    />);


});
