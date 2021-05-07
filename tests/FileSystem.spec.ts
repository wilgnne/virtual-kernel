import FileSystem from '../src/services/kernel/fs'

describe('testing File System: File', () => {
  let fs: FileSystem
  beforeAll(() => {
    fs = new FileSystem(400, 32, [])
  })

  test('touch', () => {
    expect(fs.touch('boot.txt', '/')).toStrictEqual([true, ''])
    expect(fs.touch('init.txt', '/')).toStrictEqual([true, ''])
  })

  test('echo', () => {
    expect(fs.echo('boot.txt', '/', 'Teste Content')).toStrictEqual([true, ''])
  })

  test('cat', () => {
    expect(fs.cat('boot.txt', '/')).toStrictEqual([true, 'Teste Content'])
  })

  test('rm', () => {
    expect(fs.rm('boot.txt', '/')).toStrictEqual([true, ''])
    expect(fs.ls('.', '/')).toStrictEqual([true, 'init.txt\t'])
  })

  test('cp', () => {
    expect(fs.cp('init.txt', 'step.txt', '/')).toStrictEqual([true, ''])
    expect(fs.ls('.', '/')).toStrictEqual([true, 'init.txt\tstep.txt\t'])
  })

  test('mv', () => {
    expect(fs.mv('init.txt', 'boot.txt', '/')).toStrictEqual([true, ''])
    expect(fs.ls('.', '/')).toStrictEqual([true, 'step.txt\tboot.txt\t'])
  })
})

describe('testing File System: Directory', () => {
  let fs: FileSystem
  beforeAll(() => {
    fs = new FileSystem(400, 32, [])
  })

  test('mkdir', () => {
    expect(fs.mkdir('root', '/')).toStrictEqual([true, ''])
    expect(fs.mkdir('src', '/')).toStrictEqual([true, ''])
  });

  test('ls', () => {
    expect(fs.ls('.', '/')).toStrictEqual([true, 'root/\tsrc/\t'])
  })

  test('cd', () => {
    expect(fs.cd('root', '/')).toStrictEqual([true, '/root'])
  })

  test('rmdir', () => {
    expect(fs.rmdir('src', '/')).toStrictEqual([true, ''])
    expect(fs.ls('.', '/')).toStrictEqual([true, 'root/\t'])
  })

  test('mv', () => {
    expect(fs.mv('root', 'bin', '/')).toStrictEqual([true, ''])
    expect(fs.ls('.', '/')).toStrictEqual([true, 'bin/\t'])
  })
})
