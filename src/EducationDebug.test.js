import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter } from "react-router-dom";
import CompetitiveSites from "./components/competitiveSites/CompetitiveSites";
import EducationImg from "./pages/education/EducationImg";
import DegreeCard from "./components/degreeCard/DegreeCard";
import Education from "./pages/education/EducationComponent";
import { degrees, competitiveSites } from "./portfolio";

const engine = new Styletron();
const theme = LightTheme;

function renderComponent(Component, props = {}) {
    const div = document.createElement("div");
    ReactDOM.render(
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <BrowserRouter>
                    <Component {...props} theme={theme} />
                </BrowserRouter>
            </BaseProvider>
        </StyletronProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
}

describe("Education Components Verification", () => {
    it("renders EducationImg without crashing", () => {
        // EducationImg doesn't use router, so we can render it directly or with wrapper
        renderComponent(EducationImg);
    });

    it("renders CompetitiveSites without crashing", () => {
        renderComponent(CompetitiveSites, { logos: competitiveSites.competitiveSites });
    });

    it("renders DegreeCard without crashing", () => {
        if (degrees.degrees.length > 0) {
            renderComponent(DegreeCard, { degree: degrees.degrees[0] });
        }
    });

    it("renders Education page with text content", () => {
        const div = document.createElement("div");
        // Mock theme prop, Education expects theme object
        // It uses theme.text, etc. LightTheme from baseui might not have these structure if they are custom.
        // But standard theme object in this app is passed from App.js -> Main.js -> Education.js.
        // We should use the same theme structure if possible.
        // But for now let's hope it doesn't crash on undefined theme props if we pass LightTheme which is likely different.
        // Wait, EducationComponent uses `theme.text`. BaseUI LightTheme definitely has different structure.
        // This might crash the test.
        // Let's use a mock theme object similar to what App.js uses.

        const mockTheme = {
            name: "light",
            body: "#FFFFFF",
            text: "#343434",
            dark: "#000000",
            secondaryText: "#7F8DAA",
            accentColor: "#E3405F",
            accentBright: "#FC1056",
            projectCard: "#DCE4F2",
            skinColor: "#F7B799",
            imageHighlight: "#DCE4F2",
            compImgHighlight: "#E6E6E6",
            jacketColor: "#0A2472",
            headerColor: "#DCE4F277",
            splashBg: "white"
        };

        ReactDOM.render(
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <BrowserRouter>
                        <Education theme={mockTheme} />
                    </BrowserRouter>
                </BaseProvider>
            </StyletronProvider>,
            div
        );

        // Check for key text
        if (!div.textContent.includes("Education")) {
            console.log("Text content:", div.textContent);
            throw new Error("Education text not found");
        }
        if (!div.textContent.includes("Basic Qualification")) {
            throw new Error("Basic Qualification text not found");
        }
        ReactDOM.unmountComponentAtNode(div);
    });
});
