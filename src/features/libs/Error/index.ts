export default class ErrorFetching extends Error {
  constructor(
    public massage: string,
    public info: string,
    public code: number
  ) {
    super(massage);
  }
}

export async function makeFetchError(req: Response, massage: string) {
  if (req.ok) return;
  const info = await req.json();
  throw new ErrorFetching(massage, info, req.status);
}
