import Section from "../components/section/Section";
import Card from "../components/card/Card"

const HomePage = () => {
    return (
        <>
            <Section headerTitle="An introduction to React">
                <Card text="Webpack is a popular module bundler for JavaScript applications, including React. It takes all the different modules, files, and dependencies of a project and bundles them into a single file that can be served to the browser. This helps optimize performance by reducing the number of network requests made by the application. Additionally, Webpack allows for features like code splitting, hot module replacement, and tree shaking, which further enhance the development workflow and performance of React applications." image="pexels-anthony-133459.jpg" />
                <Card text="Babel is a highly popular JavaScript compiler that enables developers to write code using the latest ECMAScript (ES) syntax. It seamlessly transforms modern ES code into a backward-compatible version, ensuring compatibility across browsers and environments. With Babel, developers can achieve seamless, future-proof, and cross-platform JavaScript development, optimizing code performance and ensuring broad compatibility for their projects." image="pexels-laura-the-explaura-3608263.jpg" />
                <Card text="NPM (Node Package Manager) is a widely-used package manager for JavaScript projects. It simplifies the process of installing, managing, and sharing code packages, making dependency management easier for developers. NPM allows for the inclusion of third-party libraries, frameworks, and custom code packages in projects, facilitating code reuse and collaboration in JavaScript development. With its extensive registry, developers can discover and utilize a vast array of packages for their projects." image="pexels-roshan-kamath-1661179.jpg" />
                <Card text="JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It is commonly used with React to define the structure and appearance of components. JSX makes it easier to create dynamic UIs by combining JavaScript logic with HTML-like syntax, enabling developers to build reusable and modular UI components in a more intuitive and declarative way. Ultimately, JSX is transformed into regular JavaScript code that can be understood by browsers." image="pexels-mark-broadhurst-106686.jpg" />
            </Section>
        </>
    )
}

export default HomePage;