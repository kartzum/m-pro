import * as React from "react";

export interface WriterProps { compiler: string; framework: string; }

export class Writer extends React.Component<WriterProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}