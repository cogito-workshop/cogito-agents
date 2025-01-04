import { AvailableWidgetTypes } from '@/constants';
import { useState } from 'react';
import { DnDContext } from './DnDContext';

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<AvailableWidgetTypes | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <DnDContext.Provider
      value={{
        type,
        isDragging,
        setType,
        setIsDragging,
      }}
    >
      {children}
    </DnDContext.Provider>
  );
};
