import Link from 'next/link';
import React from 'react';
import { Btn } from './styles';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: (event: any) => void;
}

function Button({ href, text, onClick }: ButtonProps): JSX.Element {
  function renderButton() {
    return <Btn onClick={onClick}>{text}</Btn>;
  }

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
}

export default Button;
