import React, { FC, memo, CSSProperties } from 'react';
import ProfileImage from './profileImage';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Xarrow from 'react-xarrows';

const style: CSSProperties = {
  cursor: 'move',
  float: 'left',
};

interface Props {
  manager: any;
  tier: number;
  list: number;
  managerId: number;
  id: number;
}
export const Profile: FC<Props> = ({ manager, managerId, tier, list, id }) => {
  const profile = { img: '/defaultImg.webp' };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: manager,
    data: { tier, list },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const profileStyle: CSSProperties = {
    position: 'relative',
    ...style,
  };

  return (
    <div>
      <div
        ref={setNodeRef}
        style={profileStyle}
        {...listeners}
        {...attributes}
        id={`${id}`}
        className='profile-component mx-3 flex justify-center flex-col ml-3 items-center w-[100px]'
      >
        <ProfileImage imagePath={profile.img} />
        <div className='text-white'>{manager.name}</div>
      </div>

      {manager.managerId && (
        <Xarrow
          start={`${id}`}
          end={`${manager.managerId}`}
          color='#02e6d2'
          headSize={0}
          curveness={0.3}
        />
      )}
    </div>
  );
};
