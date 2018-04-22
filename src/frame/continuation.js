import Frame from './frame';
import {FrameTypes} from '../constants';

export default class ContinuationFrame extends Frame{

  constructor(options){
    super(FrameTypes.CONTINUATION, options);
  }

  get_payload(){
    return super.get_payload();
  }
}
