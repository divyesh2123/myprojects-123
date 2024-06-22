import React from 'react'
import LeadForm from './LeadForm'
import LeadDisplay from './LeadDisplay'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Lead() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
     <div>
      <Button onClick={toggleDrawer(true)}>Add Lead</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {LeadForm}
      </Drawer>
    </div>

     <LeadForm></LeadForm>
     <LeadDisplay/>
    </>
   
  )
}
