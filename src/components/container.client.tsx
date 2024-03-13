'use client';

import SalesTiers from './salesTier';
import { tiers } from './const';
import ManagerLists from './managerLists';
import { Profile } from './profile';
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import Xarrow, { Xwrapper, useXarrow } from 'react-xarrows';

export default function Container() {
  const [t, sett] = useState(tiers);

  let tierLevels = 0;
  console.log(t);

  const updateXarrow = useXarrow();

  return (
    <div className='relative flex justify-center flex-col items-center w-screen h-screen bg-black'>
      <DndContext onDragEnd={handleDragEnd} onDragMove={updateXarrow}>
        {t.map((tier: any, index) => (
          <SalesTiers key={index} managersLists={tier} tier={index}>
            {tier.map((managers: any, index2: number) => {
              const listId = `tier-${index}-list-${index2}`;
              return (
                <ManagerLists key={listId} index={listId} managers={managers}>
                  {managers.map((manager: any) => (
                    <Xwrapper>
                      <Profile
                        key={manager.id}
                        manager={manager}
                        managerId={manager.managerId}
                        tier={index}
                        list={index2}
                        id={manager.id}
                      />
                    </Xwrapper>
                  ))}
                </ManagerLists>
              );
            })}
          </SalesTiers>
        ))}
      </DndContext>
    </div>
  );
  function handleDragEnd(event: any) {
    const { over, active } = event;
    if (!over || !over.id || !active.data.current) return;

    const match = over.id.match(/tier-(\d+)-list-(\d+)/);
    if (!match) return;

    const [_, tierIndex, listIndex] = match.map(Number);
    const { tier: currentTierIndex, list: currentListIndex } =
      active.data.current;

    const newTiers = JSON.parse(JSON.stringify(tiers));

    newTiers[tierIndex][listIndex].push(active.id);

    newTiers[currentTierIndex][currentListIndex] = newTiers[currentTierIndex][
      currentListIndex
    ].filter((person: any) => person.id !== active.id.id);

    sett(newTiers);
  }
}
