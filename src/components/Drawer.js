import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import { RightColumn } from './RightColumn'

export const Drawer = ({ open, onClose, onOpen}) => {
  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div style={{width: 300}}>
        <RightColumn />
      </div>
    </SwipeableDrawer>
  )
}