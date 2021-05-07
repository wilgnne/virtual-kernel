import React, { useRef } from 'react'
import { Stack, Button } from '@chakra-ui/react'
import fileDownload from 'js-file-download'

import FileSystem from '../services/kernel/fs'

interface FSHandleProps {
  fs: FileSystem
}

const FSHandle = ({ fs }: FSHandleProps) => {
  const inputRef = useRef<HTMLInputElement>()
  const handleDownload = () => {
    fileDownload(fs.hdd, 'disk.bin')
  }

  const handleUpload: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files[0]
    file.arrayBuffer().then((buffer) => {
      fs.loadHddBuffer(buffer)
    })
    console.log(file)
  }

  return (
    <Stack height="100%" alignItems="center" direction="row" spacing={4}>
      <Button colorScheme="green" variant="solid" onClick={handleDownload}>
        Download Disk
      </Button>
      <input
        type="file"
        accept="application/octet-stream"
        onChange={handleUpload}
        ref={inputRef}
        style={{ display: 'none' }}
      ></input>
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => inputRef.current.click()}
      >
        Upload Disk
      </Button>
    </Stack>
  )
}

export default FSHandle
