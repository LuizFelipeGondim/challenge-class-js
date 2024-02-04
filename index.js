class Tarefa {
  constructor (descricao) {
    this.descricao = descricao
    this.concluida = false
  }

  concluir() {
    this.concluida = true
  }
}

class ListaDeTarefas {
  constructor () {
    this.lista = []
  }

  adicionarTarefa(descricao) {
    let tarefa = new Tarefa(descricao)
    this.lista.push(tarefa)
  }

  listarTarefas() {
    this.lista.forEach(tarefa => {
      if (tarefa.concluida) {
        console.log("Tarefa concluida")
      } else {
        console.log("Tarefa nao concluida")
      }
    })
  }
}