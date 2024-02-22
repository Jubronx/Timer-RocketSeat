import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        disabled={!!activeCycle} // !! significa que se tiver um valor em activeCycle ele retorna true
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        {...register('minutesAmount', { valueAsNumber: true })}
        max={60}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
