import { BaseWidget } from './index';

function withBase(WrappedWidget: React.ElementType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WrappedBaseWidget(props: any) {
    console.log('props', props);
    return (
      <BaseWidget {...props}>
        <WrappedWidget {...props} />
      </BaseWidget>
    );
  };
}

export default withBase;
