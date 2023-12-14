import { BadgeProps } from '@/types';


function badge({ title, classStyles, key, style, }: BadgeProps) {
  return (
    <div 
      className={`whitespace-nowrap tracking-wide px-5 py-1 rounded-md	text-sm	 bottom-2 left-2 ${classStyles}`}
      key={key}
      style={style}
    >
      <span>{title}</span>
    </div>
  )
}

export default badge
