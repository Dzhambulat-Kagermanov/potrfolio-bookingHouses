import React from 'react'

export interface buttonEventType {
  onClick(
    event:
      | React.MouseEventHandler<HTMLElement>
      | React.TouchEventHandler<HTMLElement>
  ): void
}
