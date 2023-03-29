import { useLayoutEffect } from 'react'
import cn from 'clsx'

import useElement from 'hooks/useElement'
import Text from 'components/Text'

export interface Props {
  selectItem: () => void
  isSelected: boolean
  title: string
}

function Item({
  selectItem,
  isSelected,
  title,
}: Props) {
  const [scrollEl, setScrollRef] = useElement<HTMLDivElement>()

  useLayoutEffect(function scrollToItem() {
    if (scrollEl && isSelected) {
      scrollEl.scrollIntoView({
        block: 'nearest',
      })
    }
  }, [isSelected, scrollEl])

  return (
    <div
      ref={setScrollRef}
      className={cn(
        'px-4',
        'py-1',
        'shrink-0',
        'flex',
        'font-mono',
        'items-center',
        'group',
        'overflow-ellipsis',
        'overflow-hidden',
        'cursor-pointer',
        {
          'bg-indigo-50': isSelected,
        },
      )}
      onMouseDown={selectItem}
    >
      <Text
        text={title}
      />
    </div>
  )
}

export default Item