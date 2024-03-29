import { Component } from 'solid-js';
import { createSettings } from '../SettingsProvider';

import style from './PenSettings.module.css';

type RangeEvent = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

const PenSettings: Component = () => {
  const { settings, setSettings } = createSettings();

  const handleChange = (e: RangeEvent) => {
    setSettings((prev) => ({
      ...prev,
      // @ts-ignore
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div class='p-4 z-50 shadow rounded-md bg-white dark:bg-gray-600 mt-2 text-gray-700 dark:text-gray-200'>
      <div class={style.upperDiv}>
        <label class={style.label} for='size'>
          SIZE
        </label>
        <input
          class={style.range}
          type='range'
          id='size'
          min='1'
          max='64'
          step='0.63'
          value={settings().size}
          onInput={handleChange}
        />
      </div>
      <div class={style.upperDiv}>
        <label class={style.label} for='thinning'>
          THINNING
        </label>
        <input
          class={style.range}
          type='range'
          id='thinning'
          min='-1'
          max='1'
          step='0.02'
          value={settings().thinning}
          onInput={handleChange}
        />
      </div>
      <div class={style.upperDiv}>
        <label class={style.label} for='smoothing'>
          SMOOTHENING
        </label>
        <input
          class={style.range}
          type='range'
          id='smoothing'
          min='0'
          max='2'
          step='0.02'
          value={settings().smoothing}
          onInput={handleChange}
        />
      </div>
      <div class={style.upperDiv}>
        <label class={style.label} for='streamline'>
          STREAMLINE
        </label>
        <input
          class={style.range}
          type='range'
          id='streamline'
          min='0'
          max='1'
          step='0.01'
          value={settings().streamline}
          onInput={handleChange}
        />
      </div>
    </div>
  );
};

export default PenSettings;
