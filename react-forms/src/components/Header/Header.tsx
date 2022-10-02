import React from 'react';
import './Header.css';

interface Props {
  pageName: string;
}

export default function Header({ pageName }: Props) {
  return <header>{pageName}</header>;
}
