import { Playroom } from 'playroom';
import config from '../playroom.config.mjs';

export default function PlayroomWrapper() {
  return <Playroom config={config} />;
}
