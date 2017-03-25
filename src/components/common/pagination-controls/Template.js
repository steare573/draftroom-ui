import React from 'react';

export default function PaginationControlTemplate(props) {
  const noop = () => {};
  return (
    <ul>
      <li onClick={noop}>&lt</li>
    </ul>
  );
}
