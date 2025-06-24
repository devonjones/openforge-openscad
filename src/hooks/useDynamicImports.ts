import { useCallback, useState } from 'react';
import executeWorkerJob from '../lib/executeWorkerJob';
import { WorkerMessageType } from '../worker/types';
import WorkspaceFile from '../lib/WorkspaceFile';

type ImportItem = {
  name: string;
  url: string;
};

export default function useDynamicImports() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentFile, setCurrentFile] = useState<string>('');

  const importFiles = useCallback(async (importList: ImportItem[]) => {
    if (!importList || importList.length === 0) {
      return;
    }

    setIsLoading(true);
    setCurrentFile('');

    try {
      // Load all files sequentially
      for (const file of importList) {
        const fileName = file.url.split('/').pop() || file.name;
        setCurrentFile(fileName);
        
        const response = await fetch(file.url);
        const content = await response.arrayBuffer();
        
        const workspaceFile = new WorkspaceFile([content], fileName, {
          path: fileName,
          displayName: file.name,
        });
        
        // Write directly to worker's filesystem
        await executeWorkerJob({
          type: WorkerMessageType.FS_WRITE,
          data: {
            path: fileName,
            content: workspaceFile,
          },
        });
      }

    } catch (error) {
      console.error('Error during dynamic imports:', error);
    } finally {
      setIsLoading(false);
      setCurrentFile('');
    }
  }, []);

  return { importFiles, isLoading, currentFile };
} 