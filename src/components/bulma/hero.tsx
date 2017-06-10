import React, { SFC } from 'react';
import classNames from 'classnames';

import { Container } from './container';
import { colors, sizes, getCurrentVal } from './utils';

export interface HeroProps {
  color?: string;
  size?: string;
  bold?: boolean;
  headChildren?: React.ReactNode;
  footChildren?: React.ReactNode;
}

export const Hero: SFC<HeroProps> = (props) => {

  const heroClasses = classNames(
    {
      hero: true,
      'is-bold': props.bold
    },
    props.color && getCurrentVal(colors, props.color),
    props.size && getCurrentVal(sizes, props.size)
  );

  return (
    <section className={heroClasses}>
      {props.headChildren && (<div className="hero-head">
        {props.headChildren}
      </div>)}
      <div className="hero-body">
        {props.children}
      </div>
      {props.footChildren && (<div className="hero-foot">
        {props.footChildren}
      </div>)}
    </section>
  );
};
