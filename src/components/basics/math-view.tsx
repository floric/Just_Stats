import React, { Component, SFC } from 'react';
import ReactDOM from 'react-dom';

interface MathViewProps {
  tex: string;
  isInline?: boolean;
}

export class MathView extends React.Component<MathViewProps, {}> {

  componentDidMount () {
    MathJax!.Hub!.Queue(['Typeset',MathJax.Hub, ReactDOM.findDOMNode(this)]);
  }

  componentDidUpdate () {
    MathJax!.Hub!.Queue(['Typeset',MathJax.Hub, ReactDOM.findDOMNode(this)]);
  }

  render() {
    const { isInline = false, tex } = this.props;
    const content = isInline ? '$' + tex + '$' : '$$' + tex + '$$';

    return (
      <div>{content}</div>
    );
  }
}
