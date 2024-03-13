import Image from 'next/image';

interface Props {
  imagePath: string;
}

export default function ProfileImage({ imagePath }: Props) {
  return (
    <div className='flex  justify-center items-center'>
      <div className='w-16 h-16 relative overflow-hidden rounded-full border border-gray-200 shadow-sm'>
        <Image src={imagePath} alt='Profile' width={80} height={80} />
      </div>
    </div>
  );
}
