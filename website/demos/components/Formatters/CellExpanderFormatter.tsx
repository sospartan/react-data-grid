import { css } from '@linaria/core';
import { useFocusRef } from '../../../../src/hooks';

const cellExpandClassname = css`
  float: right;
  display: table;
  height: 100%;

  > span {
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
  }
`;

interface CellExpanderFormatterProps {
  isCellSelected: boolean;
  expanded: boolean;
  onCellExpand: () => void;
}

export function CellExpanderFormatter({
  isCellSelected,
  expanded,
  onCellExpand
}: CellExpanderFormatterProps) {
  const { ref, tabIndex } = useFocusRef<HTMLSpanElement>(isCellSelected);

  function handleKeyDown(e: React.KeyboardEvent<HTMLSpanElement>) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onCellExpand();
    }
  }

  return (
    <div className={cellExpandClassname}>
      <span onClick={onCellExpand} onKeyDown={handleKeyDown}>
        <span ref={ref} tabIndex={tabIndex}>
          {expanded ? '\u25BC' : '\u25B6'}
        </span>
      </span>
    </div>
  );
}
