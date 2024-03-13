'use client';

import { DndContext } from '@dnd-kit/core';
import ManagerLists from './managerLists';
import { Profile } from './profile';

interface Props {
  managersLists: any[];
  tier: number;
}

export default function SalesTiers(props: any, { managersLists, tier }: Props) {
  console.log('managersLists', managersLists);
  return (
    <div className='flex justify-between items-center w-screen h-[400px] bg-black '>
      {props.children}
    </div>
  );
}
