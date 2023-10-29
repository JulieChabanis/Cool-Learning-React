import React from 'react'
import { Drawer, Box, List, ListItem, ListItemText} from '@mui/material'

const SideBar = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <div>SideBar</div>
      <Drawer
      variant ='permanent'
      anchor='left'
      >
        <List>
          <ListItem button>
            <ListItemText primary="Intro"/>
          </ListItem> 
          <ListItem button>
            <ListItemText primary="Intro 1"/>
          </ListItem> 
          <ListItem button>
            <ListItemText primary="Intro 2"/>
          </ListItem> 
          <ListItem button>
            <ListItemText primary="Intro 2"/>
          </ListItem> 
        </List>

      </Drawer>
    </Box>
  )
}

export default SideBar