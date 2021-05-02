import FileSystem from '../src/services/kernel/fs'

describe('testing File System: File', () => {
  let fs: FileSystem
  beforeAll(() => {
    fs = new FileSystem(400, 32, [])
  })

  test('touch', () => {
    expect(fs.touch('boot.txt', '/')).toStrictEqual([true, ''])
  })

  test('echo', () => {
    expect(fs.echo('boot.txt', '/', 'Teste Content')).toStrictEqual([true, ''])
  })

  test('cat', () => {
    expect(fs.cat('boot.txt', '/')).toStrictEqual([true, 'Teste Content'])
  })
})

describe('testing File System: Directory', () => {
  let fs: FileSystem
  beforeAll(() => {
    fs = new FileSystem(400, 32, [])
  })

  test('mkdir', () => {
    expect(fs.mkdir('root', '/')).toStrictEqual([true, ''])
  });

  test('ls', () => {
    expect(fs.ls('.', '/')).toStrictEqual([true, 'root/\t'])
  })

  test('cd', () => {
    expect(fs.cd('root', '/')).toStrictEqual([true, '/root'])
  })
})


