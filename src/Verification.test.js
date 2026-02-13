import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter } from "react-router-dom";

// Import pages
import Education from "./pages/education/EducationComponent";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/ContactComponent";
import Resume from "./pages/resume/Resume";

const engine = new Styletron();
const theme = LightTheme; // Mock theme

function renderComponent(Component) {
    const div = document.createElement("div");
    ReactDOM.render(
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <BrowserRouter>
                    <Component theme={theme} />
                </BrowserRouter>
            </BaseProvider>
        </StyletronProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
}

describe("Page Rendering Verification", () => {
    it("renders Education page without crashing", () => {
        renderComponent(Education);
    });

    it("renders Projects page without crashing", () => {
        renderComponent(Projects);
    });

    it("renders Contact page without crashing", () => {
        renderComponent(Contact);
    });

    it("renders Resume page without crashing", () => {
        renderComponent(Resume);
    });
});
