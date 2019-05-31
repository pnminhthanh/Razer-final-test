import delay from '../assets/icons/clock-circular-outline.svg';
import keyboard from '../assets/icons/keyboard.svg';
import mouse from '../assets/icons/mouse.svg';
import device from '../assets/icons/repeat.svg';
import lighting from '../assets/icons/sun.svg';
import launch from '../assets/icons/maximize.svg';
import command from '../assets/icons/command.svg';
import text from '../assets/icons/align-to-left.svg';
import loop from '../assets/icons/two-circling-arrows.svg';
import macro from '../assets/icons/macro.JPG';
import multimedia from '../assets/icons/youtube.svg';

export const listMenuItems = [
  {
    key: '1',
    icon: delay,
    alt: 'Delay icon',
    text: 'delay',
    type: 'delay',
  },
  {
    key: '2',
    icon: keyboard,
    alt: 'Keyboard icon',
    text: 'keyboard function',
    type: 'keyboard',
  },
  {
    key: '3',
    icon: mouse,
    alt: 'Mouse icon',
    text: 'mouse function',
    type: 'mouse',
  },
  {
    key: '4',
    icon: macro,
    alt: 'Macro icon',
    text: 'macro',
    type: 'macro',
  },
  {
    key: '5',
    icon: device,
    alt: 'Switch device icon',
    text: 'switch device profile',
    type: 'switchDevice',
  },
  {
    key: '6',
    icon: lighting,
    alt: 'Switch lighting icon',
    text: 'switch lighting',
    type: 'switchLighting',
  },
  {
    key: '7',
    icon: launch,
    alt: 'Launch icon',
    text: 'Launch',
    type: 'launch',
  },
  {
    key: '8',
    icon: command,
    alt: 'Command icon',
    text: 'run command',
    type: 'command',
  },
  {
    key: '9',
    icon: multimedia,
    alt: 'Multimedia icon',
    text: 'multimedia',
    type: 'multimedia',
  },
  {
    key: '10',
    icon: text,
    alt: 'Text icon',
    text: 'text function',
    type: 'text',
  },
  {
    key: '11',
    icon: loop,
    alt: 'Loop icon',
    text: 'loop',
    type: 'loop',
  },
];
