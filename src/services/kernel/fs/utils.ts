
export function printArrayBuffer(buffer: ArrayBuffer, blockSize = 100) {
  const parts = buffer.byteLength / blockSize
  let curr = 0
  do {
    console.log(buffer.slice((curr * blockSize), (curr * blockSize) + blockSize))
    curr += 1
  } while (curr < parts);
  console.log()
}

export function str2ab(str: string): ArrayBuffer {
  let buf = new ArrayBuffer(str.length)
  let bufView = new Uint8Array(buf)

  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

export function arrayBuffer2uint16Array(data: ArrayBuffer): Uint8Array {
  const arr = []
  const dataView = new DataView(data)

  for (let i = 0, dataLen = data.byteLength; i < dataLen; i++) {
    arr.push(dataView.getUint8(i))
  }
  return new Uint8Array(arr)
}

export function copy_buffer(from: ArrayBuffer, to: ArrayBuffer | DataView) {
  const t = to instanceof DataView ? to : new DataView(to)

  new Uint8Array(t.buffer).set(new Uint8Array(from), t.byteOffset)
}
