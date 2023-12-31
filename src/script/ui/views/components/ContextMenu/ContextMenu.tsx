/****************************************************************************
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { Menu, MenuProps } from 'react-contexify'
import 'react-contexify/ReactContexify.css'
import { useAppContext } from 'src/hooks'
import Editor from 'src/script/editor'
import styles from './ContextMenu.module.less'
import { CONTEXT_MENU_ID } from './contextMenu.types'
import AtomMenuItems from './menuItems/AtomMenuItems'
import BondMenuItems from './menuItems/BondMenuItems'
import FunctionalGroupMenuItems from './menuItems/FunctionalGroupMenuItems'
import SelectionMenuItems from './menuItems/SelectionMenuItems'

const props: Partial<MenuProps> = {
  animation: false,
  className: styles.contextMenu
}

function BodyPortal(props: React.PropsWithChildren<{ refKey: string }>) {
  return ReactDOM.createPortal(props.children, document.body, props.refKey)
}

const ContextMenu: React.FC = () => {
  const { getKetcherInstance } = useAppContext()

  const trackVisibility = useCallback(
    (id: CONTEXT_MENU_ID, visible: boolean) => {
      const editor = getKetcherInstance().editor as Editor
      if (visible) {
        editor.hoverIcon.hide()
      }
      editor.contextMenu[id] = visible
    },
    [getKetcherInstance]
  )

  return (
    <>
      <BodyPortal refKey={CONTEXT_MENU_ID.FOR_BONDS}>
        <Menu
          {...props}
          id={CONTEXT_MENU_ID.FOR_BONDS}
          onVisibilityChange={(visible) =>
            trackVisibility(CONTEXT_MENU_ID.FOR_BONDS, visible)
          }
        >
          <BondMenuItems />
        </Menu>
      </BodyPortal>

      <BodyPortal refKey={CONTEXT_MENU_ID.FOR_ATOMS}>
        <Menu
          {...props}
          id={CONTEXT_MENU_ID.FOR_ATOMS}
          onVisibilityChange={(visible) =>
            trackVisibility(CONTEXT_MENU_ID.FOR_ATOMS, visible)
          }
        >
          <AtomMenuItems />
        </Menu>
      </BodyPortal>

      <BodyPortal refKey={CONTEXT_MENU_ID.FOR_SELECTION}>
        <Menu
          {...props}
          id={CONTEXT_MENU_ID.FOR_SELECTION}
          onVisibilityChange={(visible) =>
            trackVisibility(CONTEXT_MENU_ID.FOR_SELECTION, visible)
          }
        >
          <SelectionMenuItems />
        </Menu>
      </BodyPortal>

      <BodyPortal refKey={CONTEXT_MENU_ID.FOR_FUNCTIONAL_GROUPS}>
        <Menu
          {...props}
          id={CONTEXT_MENU_ID.FOR_FUNCTIONAL_GROUPS}
          onVisibilityChange={(visible) =>
            trackVisibility(CONTEXT_MENU_ID.FOR_FUNCTIONAL_GROUPS, visible)
          }
        >
          <FunctionalGroupMenuItems />
        </Menu>
      </BodyPortal>
    </>
  )
}

export default ContextMenu
