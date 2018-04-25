import {Observable} from 'rxjs';
import rxjsConfig from 'recompose/rxjsObservableConfig';
import {
  createEventHandler,
  componentFromStream,
  setObservableConfig,
} from 'recompose';

setObservableConfig(rxjsConfig);

const ImageStream = initState => componentFromStream((props$) => {
  const {
    handler: readFile,
    stream: readFile$,
  } = createEventHandler();

  const on$ = Observable.merge(readFile$).startWith(initState);

  return props$.combineLatest(on$, (props, on) =>
    props.render({
      ...on,
      readFile,
    }),
  );
});

export default ImageStream;
