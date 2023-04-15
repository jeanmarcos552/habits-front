import React from 'react';

export type IButton = {
  peso: number;
};

function colorButton(tasks: number) {
  if (tasks >= 4 && tasks <= 9) {
    return +(tasks * 100).toFixed(0);
  }

  if (tasks >= 10) {
    return 950;
  }

  return 300;
}

export const Button = ({ peso }: IButton) => {
  return (
    <button
      type="button"
      className={`text-white bg-purple-${colorButton(
        peso
      )} p-2 h-10 w-10 rounded m-1`}
    >
      {peso}
    </button>
  );
};
