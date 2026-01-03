export type Language = 'javascript' | 'typescript' | 'python' | 'react';
export type CodeType = 'function' | 'component' | 'class' | 'hook' | 'api';

export interface CodeTemplate {
  id: string;
  language: Language;
  type: CodeType;
  name: string;
  description: string;
  code: string;
}

const templates: CodeTemplate[] = [
  // JavaScript
  {
    id: 'js-function',
    language: 'javascript',
    type: 'function',
    name: 'Função Async',
    description: 'Função assíncrona com tratamento de erros',
    code: `async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}`,
  },
  {
    id: 'js-class',
    language: 'javascript',
    type: 'class',
    name: 'Classe com Métodos',
    description: 'Classe JavaScript moderna com construtor',
    code: `class DataManager {
  constructor(initialData = []) {
    this.data = initialData;
    this.listeners = [];
  }

  add(item) {
    this.data.push(item);
    this.notify();
  }

  remove(id) {
    this.data = this.data.filter(item => item.id !== id);
    this.notify();
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  notify() {
    this.listeners.forEach(callback => callback(this.data));
  }
}`,
  },
  // TypeScript
  {
    id: 'ts-function',
    language: 'typescript',
    type: 'function',
    name: 'Função Tipada',
    description: 'Função TypeScript com tipos genéricos',
    code: `interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(\`Request failed: \${response.statusText}\`);
  }

  const data = await response.json();
  
  return {
    data: data as T,
    status: response.status,
    message: 'Success',
  };
}`,
  },
  {
    id: 'ts-class',
    language: 'typescript',
    type: 'class',
    name: 'Classe Genérica',
    description: 'Classe TypeScript com tipos genéricos',
    code: `interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

class Repository<T extends Entity> {
  private items: Map<string, T> = new Map();

  create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
    const now = new Date();
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    } as T;
    
    this.items.set(newItem.id, newItem);
    return newItem;
  }

  findById(id: string): T | undefined {
    return this.items.get(id);
  }

  findAll(): T[] {
    return Array.from(this.items.values());
  }

  update(id: string, updates: Partial<T>): T | undefined {
    const item = this.items.get(id);
    if (!item) return undefined;

    const updated = {
      ...item,
      ...updates,
      updatedAt: new Date(),
    };
    
    this.items.set(id, updated);
    return updated;
  }

  delete(id: string): boolean {
    return this.items.delete(id);
  }
}`,
  },
  // Python
  {
    id: 'py-function',
    language: 'python',
    type: 'function',
    name: 'Função Decorada',
    description: 'Função Python com decoradores',
    code: `from functools import wraps
from typing import Callable, TypeVar, ParamSpec
import time

P = ParamSpec('P')
T = TypeVar('T')

def retry(max_attempts: int = 3, delay: float = 1.0):
    """Decorator que repete a função em caso de falha."""
    def decorator(func: Callable[P, T]) -> Callable[P, T]:
        @wraps(func)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> T:
            last_exception = None
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_exception = e
                    if attempt < max_attempts - 1:
                        time.sleep(delay)
            raise last_exception
        return wrapper
    return decorator

@retry(max_attempts=3, delay=0.5)
def fetch_data(url: str) -> dict:
    """Busca dados de uma URL."""
    import requests
    response = requests.get(url)
    response.raise_for_status()
    return response.json()`,
  },
  {
    id: 'py-class',
    language: 'python',
    type: 'class',
    name: 'Dataclass',
    description: 'Classe Python com dataclass e validação',
    code: `from dataclasses import dataclass, field
from typing import List, Optional
from datetime import datetime
from uuid import uuid4

@dataclass
class User:
    name: str
    email: str
    id: str = field(default_factory=lambda: str(uuid4()))
    created_at: datetime = field(default_factory=datetime.now)
    roles: List[str] = field(default_factory=list)
    is_active: bool = True

    def __post_init__(self):
        if not self.email or '@' not in self.email:
            raise ValueError("Email inválido")
        if not self.name or len(self.name) < 2:
            raise ValueError("Nome deve ter pelo menos 2 caracteres")

    def add_role(self, role: str) -> None:
        if role not in self.roles:
            self.roles.append(role)

    def has_role(self, role: str) -> bool:
        return role in self.roles

    def deactivate(self) -> None:
        self.is_active = False`,
  },
  // React
  {
    id: 'react-component',
    language: 'react',
    type: 'component',
    name: 'Componente com Props',
    description: 'Componente React funcional tipado',
    code: `import { useState, useCallback } from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  onAction?: () => void;
}

export function Card({ title, description, image, onAction }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback(() => {
    onAction?.();
  }, [onAction]);

  return (
    <div
      className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 h-48 w-full rounded-md object-cover"
        />
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      {isHovered && onAction && (
        <button className="mt-4 text-primary hover:underline">
          Saiba mais →
        </button>
      )}
    </div>
  );
}`,
  },
  {
    id: 'react-hook',
    language: 'react',
    type: 'hook',
    name: 'Custom Hook',
    description: 'Hook personalizado para gerenciar estado',
    code: `import { useState, useEffect, useCallback } from 'react';

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: () => Promise<void>;
  reset: () => void;
}

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  immediate = false
): UseAsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await asyncFn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, [asyncFn]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute, reset };
}`,
  },
  {
    id: 'react-api',
    language: 'react',
    type: 'api',
    name: 'API Service',
    description: 'Serviço de API com React Query',
    code: `import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const API_URL = '/api/todos';

async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}

async function createTodo(title: string): Promise<Todo> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!response.ok) throw new Error('Failed to create');
  return response.json();
}

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}`,
  },
];

export function getTemplatesByLanguage(language: Language): CodeTemplate[] {
  return templates.filter(t => t.language === language);
}

export function getTemplatesByType(type: CodeType): CodeTemplate[] {
  return templates.filter(t => t.type === type);
}

export function getTemplate(language: Language, type: CodeType): CodeTemplate | undefined {
  return templates.find(t => t.language === language && t.type === type);
}

export function getAllTemplates(): CodeTemplate[] {
  return templates;
}

export const languages: { value: Language; label: string; icon: string }[] = [
  { value: 'javascript', label: 'JavaScript', icon: '🟨' },
  { value: 'typescript', label: 'TypeScript', icon: '🔷' },
  { value: 'python', label: 'Python', icon: '🐍' },
  { value: 'react', label: 'React', icon: '⚛️' },
];

export const codeTypes: { value: CodeType; label: string }[] = [
  { value: 'function', label: 'Função' },
  { value: 'component', label: 'Componente' },
  { value: 'class', label: 'Classe' },
  { value: 'hook', label: 'Hook' },
  { value: 'api', label: 'API' },
];
