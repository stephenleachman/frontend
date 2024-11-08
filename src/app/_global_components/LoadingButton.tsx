'use client'

import React, { useState } from 'react'
import { ButtonThemed } from './ButtonThemed'
import Link from 'next/link';

export default function LoadingButton(props: any) {

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
    setIsLoading(true);
    // Simulate a network request or some async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    };
  return (
    <div>
    <ButtonThemed onClick={handleClick} disabled={isLoading}
       color={props.style} 
       size="lg"
       radius="sm"
       href={props.href}
       as={Link}
       isLoading={isLoading}
       >
       {isLoading ? "Loading" : `${props.name}`}
        </ButtonThemed>
    </div>
  )
}
