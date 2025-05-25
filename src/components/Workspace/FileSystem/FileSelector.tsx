import type { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

import { useFileSystemProvider } from '../../providers/FileSystemProvider';

type Props = {
  onChange: (event: SelectChangeEvent<string>) => void;
  selectedFile?: string;
  namePrefixes?: string[];
};

const visibleExtensions = ['scad', 'svg', 'txt'];

export default function FileSelector({ onChange, selectedFile, namePrefixes }: Props) {
  const { files } = useFileSystemProvider();
  const filteredFiles = files.filter((file) => {
    const extension = file.path.split('.').pop();
    const matchesExtension = visibleExtensions.includes(extension);
    const matchesPrefixes =
      namePrefixes && namePrefixes.length > 0
        ? namePrefixes.some((prefix) => file.name.startsWith(prefix))
        : true;
    return matchesExtension && matchesPrefixes;
  });

  return (
    <FormControl>
      <Select fullWidth value={selectedFile || ''} onChange={onChange}>
        {filteredFiles.map((file, idx) => (
          <MenuItem key={idx} value={file.path}>
            {file.displayName || file.path}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
