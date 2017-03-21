import { ImageMessage } from './model';
import { Message } from './model';

namespace questions {
  export interface Question {
    title: string;
    created: number;
  }
  export const q: Question = { title: 'My Question', created: Date.now() };
}

type myUnionType = Message | questions.Question;
type myIntersecType = Message & questions.Question;

const x: myUnionType = questions.q;

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
