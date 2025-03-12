import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export interface InputProps extends HTMLInputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string | number | string[]
    placeholder?: string
    disabled?: boolean
    className?: string
    onChange: (value: string | number | string[]) => void
}

export const Input: FC<InputProps> = memo(
    ({ type, label, value, name, placeholder, disabled, onChange }) => {
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
        }

        return (
            <div className={cls.input_block}>
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    disabled={disabled}
                />
                <label
                    className={cls.label}
                    htmlFor={name}
                >
                    {label}
                </label>
            </div>
        )
    },
)
