import React, { Component, SFC } from 'react';
import ReactDOM from 'react-dom';

interface MathViewProps {
  tex: string;
}

export class MathView extends React.Component<MathViewProps, {}> {

  componentDidMount () {
    MathJax!.Hub!.Queue(['Typeset',MathJax.Hub, ReactDOM.findDOMNode(this)]);
  }

  componentDidUpdate () {
    MathJax!.Hub!.Queue(['Typeset',MathJax.Hub, ReactDOM.findDOMNode(this)]);
  }

  render() {
    const tex = '$$' + this.props.tex + '$$';

    return (
      <div>{tex}</div>
    );
  }
}

