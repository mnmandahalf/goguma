import React from 'react'
import { Link } from "react-router-dom";
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
        <nav>
          <Link to="/sign_up">ユーザー登録</Link>
        </nav>
        <RightColumn />
      </div>
    </SwipeableDrawer>
  )
}