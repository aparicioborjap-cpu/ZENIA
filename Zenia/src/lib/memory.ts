export function loadMemory(user: string) {
  // Ahora la llave es única para cada usuario (ej: zenia_knowledge_paula)
  const raw = localStorage.getItem(`zenia_knowledge_${user}`);
  return raw ? JSON.parse(raw) : [];
}

export function saveMemory(user: string, entries: any[]) {
  localStorage.setItem(`zenia_knowledge_${user}`, JSON.stringify(entries));
}