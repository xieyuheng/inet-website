import { FunctionDefinition } from '@xieyuheng/inet-js'
import { EnvRendering } from '../../components/env/EnvRendering'

export type SelectedFunction = {
  name: string
  definition: FunctionDefinition
  envRendering: EnvRendering
}
