async function addDocument<T>(key: string, data: T): Promise<void>;

async function getDocument<T>(key: string): Promise<T | null>;

export { addDocument, getDocument };
