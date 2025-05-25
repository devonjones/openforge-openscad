import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ImportFromUrlDialog from './Layout/ImportFromUrlDialog';

const toolbarHeight = 64; // TODO Will this work everywhere?

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: Props) {
  return (
    <Box component="div" sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Box component="main" sx={{ flexGrow: 1, width: '100vw', height: '100vh', p: 0, m: 0 }}>
        {children}
      </Box>
    </Box>
  );
}
