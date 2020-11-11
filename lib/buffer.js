module.exports = class EntryBuffer {
  constructor (maxLength) {
    this.buffer = []
    this.maxLength = maxLength || false
  }

  add (entry) {
    if (this.maxLength === false || this.buffer.length < this.maxLength) {
      this.buffer.push(entry)
    }
  }

  drain (callback) {
    if (typeof callback === 'function') {
      this.buffer.forEach(o => callback(o));
    }

    this.buffer = []
  }

  length () {
    return this.buffer.length
  }
}
