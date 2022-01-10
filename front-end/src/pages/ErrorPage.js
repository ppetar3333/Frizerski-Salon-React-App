import React from "react";
import Nav from "../layout/Nav";

function ErrorPage() {
    return (
        <section className="error-page">
            <div className="error-page__nav">
                <Nav />
            </div>
            <div className="error-page__heading-wrapper">
                <h1 className="error-page__heading">PAGE NOT FOUND</h1>
            </div>
        </section>
    )
}

export default ErrorPage;