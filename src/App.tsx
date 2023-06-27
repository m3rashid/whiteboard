import { Component, createMemo, For } from 'solid-js';

import Menu from './components/Menu';
import { createSettings } from './SettingsProvider';
import { createTheme } from './ThemeProvider';
import { createWhiteboard } from './whiteboard';

import styles from './App.module.css';

const App: Component = () => {
  const {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerEnter,
    handlePointerLeave,
    handleReset,
    handleRedo,
    handleUndo,
    paths,
    currentPath,
  } = createWhiteboard();
  const [theme] = createTheme();
  const color = createMemo(() => (theme() === 'dark' ? '#FFF' : '#000'));
  const { isDrawing } = createSettings();

  return (
    <>
      <Menu
        handleRedo={handleRedo}
        handleReset={handleReset}
        handleUndo={handleUndo}
        isDrawing={isDrawing}
      />
      <h1 class='text-indigo-500 dark:text-indigo-400 z-50 shadow-sm text-center sm:text-left absolute px-4 py-3 font-bold text-lg font-mono'>
        SCRIBBLE BOARD
      </h1>

      <svg
        class={styles.drawableSvg}
        onPointerUp={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
      >
        <g stroke={color()} fill={color()}>
          <For each={paths()}>{(path) => <path d={path} />}</For>
          {currentPath() && <path d={currentPath()} />}
        </g>
      </svg>
    </>
  );
};

export default App;
