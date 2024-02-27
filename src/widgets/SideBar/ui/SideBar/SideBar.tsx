import cn from 'classnames'
import style from './SideBar.module.scss'
import React, { useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Locales } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Button } from 'shared/ui/Button/Button'
import CollapseIcon from 'shared/assets/icons/collapseSvg.svg'

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = (): void => {
    setCollapsed(!collapsed)
  }

  return (
      <div className={cn(style.SideBar, { [style.collapsed]: collapsed })}>
          <Button className={style.collapseBtn} onClick={toggleCollapsed}>
              <CollapseIcon/>
          </Button>
          <div className={style.switchers}>
              <ThemeSwitcher className={'theme-switcher'}/>
              <LangSwitcher locales={Locales.RU}/>
          </div>
      </div>
  )
}
