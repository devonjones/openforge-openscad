import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useMemo } from 'react';

import ErrorBox from './components/ErrorBox';
import Workspace from './components/Workspace';
import { useFileSystemProvider } from './components/providers/FileSystemProvider';
import WorkspaceProvider from './components/providers/WorkspaceProvider';
import useImports from './hooks/useImports';


const MyBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  maxWidth: '50vw',
}));

export default function App() {
  //const importUrl = getImportUrl();
  const importUrls = useMemo(() => [
    {name: 'Base: Square', url: '/scad/bases-square.scad'},
    {name: 'Base: Square: S2W Wall', url: '/scad/bases-square-wall.scad'},
    {name: 'Base: Square: S2W Corner', url: '/scad/bases-square-corner.scad'},
    {name: 'Base: Curved', url: '/scad/bases-curved.scad'},
    {name: 'Base: Curved: Radial', url: '/scad/bases-curved-radial.scad'},
    {name: 'Base: Curved: Inverted', url: '/scad/bases-curved-inverted.scad'},
    {name: 'Base: Diagonal', url: '/scad/bases-diagonal.scad'},
    {name: 'Base: Hex (60 degrees)', url: '/scad/bases-hex.scad'},
    {name: 'Base: Infinity Hallway', url: '/scad/bases-hallway.scad'},
    {name: 'Base: Portal', url: '/scad/bases-portal.scad'},
    {name: 'Risers: Square', url: '/scad/risers_square.scad'},
    {name: 'Risers: Curved', url: '/scad/risers_curved.scad'},
    {name: 'Risers: Walls', url: '/scad/risers_walls.scad'},
    {name: 'Connectors', url: '/scad/connectors.scad'},
    {name: 'Impl: Curved', url: '/scad/impl_curved.scad'},
    {name: 'Impl: Curved Inverted', url: '/scad/impl_curved_inverted.scad'},
    {name: 'Impl: Curved Radial', url: '/scad/impl_curved_radial.scad'},
    {name: 'Impl: Diagonal', url: '/scad/impl_diagonal.scad'},
    {name: 'Impl: Hallway', url: '/scad/impl_hallway.scad'},
    {name: 'Impl: Hex', url: '/scad/impl_hex.scad'},
    {name: 'Impl: Square', url: '/scad/impl_square.scad'},
    {name: 'Impl: Wall', url: '/scad/impl_wall.scad'},
    {name: 'Lock: Dragonlock', url: '/scad/lock_dragonlock.scad'},
    {name: 'Lock: Flex Magnetic', url: '/scad/lock_flex_magnetic.scad'},
    {name: 'Lock: Infinitylock', url: '/scad/lock_infinitylock.scad'},
    {name: 'Lock: Magnetic', url: '/scad/lock_magnetic.scad'},
    {name: 'Lock: Openlock', url: '/scad/lock_openlock.scad'},
    {name: 'Lock: Openlock Topless', url: '/scad/lock_openlock_topless.scad'},
  ], []);

  console.log('Importing', importUrls);
  const { error, isLoading } = useImports(importUrls, true);
  
  // Show a loading indicator during the import.
  if (isLoading) {
    return (
      <MyBox>
        <CircularProgress sx={{ marginLeft: '50%' }} />
      </MyBox>
    );
  }

  // Show an error message if the import failed.
  if (error) {
    return (
      <MyBox>
        <ErrorBox error={error} />
      </MyBox>
    );
  }

  return (
    <WorkspaceProvider>
      <Workspace initialMode={'customizer'} />
    </WorkspaceProvider>
  );
}

function getImportUrl(): string | undefined {
  let search = window.location.search;

  // Trim the leading question mark
  if (search.startsWith('?')) {
    search = search.substring(1);
  }

  // If the search string is an url, load it through the fetcha.
  if (search.startsWith('http')) {
    return decodeURIComponent(search);
  }
}
