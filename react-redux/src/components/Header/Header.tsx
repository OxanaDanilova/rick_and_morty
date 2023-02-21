import React from 'react';
import { useParams } from 'react-router';
import './Header.css';

interface Props {
  pageName: string;
}

export default function Header({ pageName }: Props) {
  const { id } = useParams();
  return <header>{id ? `${pageName}/${id}` : pageName}</header>;
}
