import { useDroppable } from '@dnd-kit/core';

interface Props {
  managers: any[];
  index: number;
}

export default function ManagerLists(props: any, { managers, index }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.index,
  });

  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='flex  justify-center items-center w-full h-auto bg-black'
    >
      {props.children}
    </div>
  );
}
