'use server';

export type Filter = 'on' | 'off';

export const isFilterOn = (filter: unknown): filter is Filter => filter === 'on' || filter === 'off';
