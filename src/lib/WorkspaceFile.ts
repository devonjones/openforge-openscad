export default class WorkspaceFile extends File {
  public path?: string;
  public displayName?: string;

  constructor(
    fileBits: BlobPart[],
    fileName: string,
    options?: FilePropertyBag & { path?: string; displayName?: string }
  ) {
    super(fileBits, fileName, options);

    this.path = options?.path || fileName;
    this.displayName = options?.displayName;
  }
}
