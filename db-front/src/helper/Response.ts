export type BackResponse = {
  data: {
    result: string
    stats?: {
      collision: number
      custo: number
      overflows: number
    }
  }
}

export const onSuccess = (args: any) => {
  console.log(args)
  return Promise.resolve('')
}

export const onError = (args: any) => {
  console.error(args)
  return Promise.reject("Erro durante acesso ao DB!")
}