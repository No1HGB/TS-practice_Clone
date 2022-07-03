//main project랑 상관없는 연습 파일.
//object의 key, value 의type 모두 정의=> 타입만 알고 있고 property값을 모를 때 사용
type WordsTy = {
  [key: string]: string;
};

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

class Dict {
  private words: WordsTy;
  //수동으로 초기화(initialize manually)
  constructor() {
    this.words = {};
  }
  //can use Class as Type! So add is Instance of class Word
  add(w: Word) {
    if (this.words[w.term] === undefined) {
      this.words[w.term] = w.def;
    }
  }
  remove(w: string) {
    if (this.words.w) {
      delete this.words.w;
    }
  }
  update(oldW: Word, newW: Word) {
    if (this.words.oldW) {
      this.words[oldW.term] = this.words[newW.term];
      this.words[oldW.def] = this.words[newW.def];
    }
  }
  //define method
  findDef(term: string) {
    return this.words[term];
  }
}

const kimchi = new Word("kimchi", "korean food");

const dict = new Dict();
dict.add(kimchi);
dict.findDef("kimchi");

//Local storage API Example(generic 전달)
interface MyStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: MyStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("key");
stringStorage.set("hello", "how are you");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("xxx");
booleanStorage.set("hellooo", false);
