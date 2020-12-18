import { Server, Socket } from "socket.io"
import http from "http"

import Kernel, { IProcess, SchedulerConfig } from "@miniso/kernel"
import { schedulerAlgorithms } from "@miniso/kernel/dist/scheduler"

const setupIO = (server: http.Server) => {
  const io: Server = require("socket.io")(server, {
    cors: {
      origin: '*',
    }
  })

  let kernel: Kernel = null

  /**
   * Evento de desconexão
   */
  const disconnect = async () => {
    console.log("a user disconnected");
  }

  /**
   * Ecento de criação do kernel
   * @param schedulerConfig Configuração do escalonador
   */
  const newKernel = (schedulerConfig: SchedulerConfig) => {
    kernel?.stop()
    kernel = null

    console.log("New Simulation");

    if (schedulerAlgorithms[schedulerConfig.algorithm]) {
      kernel = new Kernel(schedulerAlgorithms[schedulerConfig.algorithm], schedulerConfig, () => {
        io.emit("clk", kernel)
      }, 100)
    }
    else {
      io.sockets.emit("algorithmError")
    }
  }

  /**
   * Evento para pausar o kernel
   */
  const stop = () => {
    kernel?.stop()
  }

  /**
   * Evento de criação de processo
   * @param data Novo processo
   */
  const newProcess = (data: IProcess) => {
    kernel?.scheduler.newProcess(data)
  }

  /**
   * Evento de conexão
   */
  io.on("connection", (socket: Socket) => {
    console.log("a user connected")

    socket.on("disconnect", disconnect)
    socket.on("stop", stop)
    socket.on("new", newKernel)
    socket.on("newProcess", newProcess)

    if (kernel) io.emit("clk", kernel)
  })

  return io
}

export { setupIO };
