import { buttonEventType } from '@/types/buttonEventType'
import { IDefaultProps } from '@/types/defaultProps'
import { Add, Check } from '@mui/icons-material'
import { FC } from 'react'

interface IAddButtonProps extends IDefaultProps {
  onClick?: buttonEventType | (() => void)
  isActive?: boolean
}

const AddButton: FC<IAddButtonProps> = ({ onClick, styles, isActive }) => {
  return (
    <button
      style={{
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${isActive ? 'var(--primaryDarkGrey)' : 'white'}`,
        ...styles,
      }}
      onClick={onClick}
    >
      {isActive ? (
        <Check sx={{ width: '20px', height: '20px', color: 'white' }} />
      ) : (
        <Add sx={{ width: '20px', height: '20px' }} />
      )}
    </button>
  )
}

export default AddButton
