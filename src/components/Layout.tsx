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
    <Box component="div" sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'stretch', minHeight: 'unset !important', p: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', px: 2, py: 1 }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>OpenForge Catalog</span>
            <span style={{ fontSize: '0.95em', color: '#eee', display: 'flex', alignItems: 'center', gap: 1 }}>
              Version 0.3.1&nbsp;|&nbsp;
              <a className='visibleLink' href='https://github.com/devonjones/openforge-tutorials/wiki' target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>Wiki</a>&nbsp;|&nbsp;
              <a className='visibleLink' href='https://www.patreon.com/masterworktools' target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>Support us on Patreon</a>
            </span>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, px: 2, pb: 1 }}>
            <button
              className="tab"
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.1em',
                padding: '8px 16px',
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
                outline: 'none',
              }}
              onClick={() => { window.location.href = 'http://localhost:3000'; }}
            >
              Part Search
            </button>
            <button
              className="tab"
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.1em',
                padding: '8px 16px',
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
                outline: 'none',
              }}
              onClick={() => { window.location.href = 'http://localhost:3000'; }}
            >
              Blueprints
            </button>
            <button
              className="tab active"
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1em',
                padding: '8px 16px',
                cursor: 'default',
                borderBottom: '2px solid #fff',
                outline: 'none',
              }}
            >
              Base Generator
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, pt: 0 }}>
        <Toolbar />
        <Box
          component="div"
          sx={{
            width: `100vw`,
            height: `calc(100vh - ${toolbarHeight}px)`,
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
