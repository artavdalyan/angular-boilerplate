import { hasActionsExecuting } from '@ngxs-labs/actions-executing';
import { ActionType, Select } from '@ngxs/store';

export const SelectLoading = (...actions: ActionType[]): PropertyDecorator => Select(hasActionsExecuting(actions));
