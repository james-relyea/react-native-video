// import { RCTEvent } from "react-native-dom";

interface RCTEvent {
    viewTag: number;
    eventName: string;
  
    canCoalesce(): boolean;
  
    moduleDotMethod(): string;
    arguments(): Array<any>;
  }

export default class RCTVideoEvent implements RCTEvent {
  viewTag: number;
  eventName: string;

  constructor(
    eventName: string,
    reactTag: number,
    data: ?Object
  ) {
    this.viewTag = reactTag;
    this.eventName = eventName;
    this.data = data;
  }

  canCoalesce(): boolean {
    return false;
  }

  moduleDotMethod(): string {
    return "RCTEventEmitter.receiveEvent";
  }

  arguments(): Array<any> {
    const args = [
      this.viewTag,
      this.eventName,
      this.data
    ];
    return args;
  }
}
