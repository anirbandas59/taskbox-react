import { fn } from '@storybook/test';
import Task from './Task';
import PropTypes from 'prop-types';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'New Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the Task */
    id: PropTypes.string.isRequired,
    /** Title of the Task */
    title: PropTypes.string.isRequired,
    /** Current state of the Task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the Task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the Task to pinned */
  onPinTask: PropTypes.func,
};
