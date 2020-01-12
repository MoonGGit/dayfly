import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function({ className, to, exact, ...props }) {
    let match = useRouteMatch({
      path: to,
      exact: exact
    });     // 현재 url의 path와 파라미터path가 동일하면 인스턴스 생성
  
    return (
      <div className={className + (match ? " active" : "")}>
        <span>
          { (match && props.selectedMark) || props.watingMark}
        </span>
        <Link onClick={props.onClick} to={to}>{props.label}</Link>
      </div>
    );
  }
  