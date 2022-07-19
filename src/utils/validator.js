export default class Validator {
  static maxWordSize(word, size) {
    return word.length <= size;
  }
}
