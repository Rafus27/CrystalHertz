import { SyntheticEvent } from "react";

/**
 * FIXME: Combine this function with getDuration
 * @param e - Event audio HTML
 * @returns {string} as minutes:seconds
 */
export const timeUpdate = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
  const minutes = Math.floor(e.currentTarget?.currentTime / 60);
  const seconds = Math.floor(e.currentTarget?.currentTime - minutes * 60);

  return `${str_pad_left(minutes, "0", 2)}:${str_pad_left(seconds, "0", 2)}`;
};

/**
 * @param string
 * @param pad
 * @param length
 * @returns {string}
 */
export const str_pad_left = (string: number, pad: string, length: number) => {
  return (new Array(length + 1).join(pad) + string).slice(-length);
};

/**
 * Get duration choose track
 * @param value - value in number (ex. 120 seconds)
 * @returns {string} as minutes:seconds
 */
export const getDuration = (value: number) => {
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value - minutes * 60);

  return `${str_pad_left(minutes, "0", 2)}:${str_pad_left(seconds, "0", 2)}`;
};

export const getNumberFromDuration = (value: string) => {
  const minutes = value.split(":");

  return +minutes[0] * 60 + +minutes[1];
};
