export interface CuePoint<T> {
  startTime: number;
  endTime?: number;
  id: string;
  type: string;
  metadata: T;
  text?: string;
}

interface TimedMetadataEvent {
  payload: {
    cues: Array<CuePoint<any>>;
  };
}
