const notes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export function transposeChord(chord: string, steps: number) {
  const match = chord.match(/^[A-G](#|b)?/);

  if (!match) return chord;

  const root = match[0];
  const suffix = chord.slice(root.length);

  let index = notes.indexOf(root);

  if (index === -1) return chord;

  index = (index + steps + 12) % 12;

  return notes[index] + suffix;
}