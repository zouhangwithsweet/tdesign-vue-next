import _Switch from './switch';
import { withInstall, WithInstallType } from '../utils/withInstall';
import { TdSwitchProps } from './type';

import './style';

export * from './type';
export type SwitchProps = TdSwitchProps;

export const Switch: WithInstallType<typeof _Switch> = withInstall(_Switch);
export default Switch;
