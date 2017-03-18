import { ImageMessage } from './model/image-message.model';
import { Message } from './model/message.model';

interface Question {
  title: string;
  created: number;
}
const q: Question = { title: 'My Question', created: Date.now() };

type myUnionType = Message | Question;
type myIntersecType = Message & Question;

const x: myUnionType = q;

const y: myIntersecType = {title: 'My Title', text: 'My Text', created: 10};

type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

const s1: Size = 'LARGE';

enum EnumSize {
  SMALL,
  MEDIUM,
  LARGE,
};

const s2: EnumSize = EnumSize.LARGE;
const s3: number = s2;
