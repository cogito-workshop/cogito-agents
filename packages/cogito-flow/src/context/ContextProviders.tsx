import { AvailableWidgetTypes } from '@/constants';
import { useState } from 'react';
import { DnDContext } from './DnDContext';

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<AvailableWidgetTypes | null>(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};
