import { Handle, Position } from '@xyflow/react';

export const TextInput = ({ id, defaultValue, onChange }: TextInputProps) => {
  const handleChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;

    onChange?.(value);
  };

  return (
    <div
      className="w-full h-full box-border flex flex-col shadow-lg shadow-inner"
      data-widget-id={id}
    >
      <div className="h-6 bg-white">
        <span className="text-xs">{id}</span>
      </div>
      <div className="flex-1">
        <input
          className="w-full h-full box-border px-2 border rounded-sm min-h-8 min-w-24"
          onChange={handleChanged}
          defaultValue={defaultValue}
          placeholder="enter text..."
        />
      </div>
      <Handle type="source" position={Position.Left} className="w-2 h-2" />
      <Handle type="target" position={Position.Right} className="w-2 h-2" />
    </div>
  );
};

export interface TextInputProps {
  id: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
