import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

export default function({ label, to, exact, className}) {
    let match = useRouteMatch({
      path: to,
      exact: exact
    });     // 현재 url의 path와 파라미터path가 동일하면 인스턴스 생성
  
    return (
      <div className={className + (match ? " active" : "")}>
        {match && "앙"}
        <Link to={to}>{label}</Link>
      </div>
    );
  }
  