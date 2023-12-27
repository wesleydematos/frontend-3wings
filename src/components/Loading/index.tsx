function Loading() {
  return (
    <div className="flex gap-2">
      <div className="border-t-2 border-r-2 border-tertiary border-solid h-5 w-5 rounded-full animate-spin mb-4"></div>
      <p className="text-body">Carregando...</p>
    </div>
  )
}

export default Loading