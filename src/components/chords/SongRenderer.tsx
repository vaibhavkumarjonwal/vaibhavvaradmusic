import song from "@/data/tumAayeHo.json";
import { transposeChord } from "@/utils/transpose";

interface Props {
  transpose: number;
  fontSize: number;
}

export default function SongRenderer({
  transpose,
  fontSize,
}: Props) {
  return (
    <div className="mt-12 space-y-12">
      {song.sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="mb-2 text-2xl font-bold text-primary">
            {section.name}
          </h2>

          {section.description && (
            <p className="mb-6 italic text-muted-foreground">
              ({section.description})
            </p>
          )}

          {section.lines.map((line: any, lineIndex: number) => {
            // --------------------------
            // MUSIC BLOCK
            // --------------------------
            if (line.type === "music") {
              return (
                <div key={lineIndex} className="mb-8">
                  {line.rows.map((row: any[], rowIndex: number) => (
                    <div
                      key={rowIndex}
                      className="relative h-7 font-mono"
                      style={{ fontSize }}
                    >
                      {row.map((c: any, chordIndex: number) => (
                        <span
                          key={chordIndex}
                          className="absolute font-bold text-yellow-400"
                          style={{
                            left: `${c.position}ch`,
                          }}
                        >
                          {transposeChord(c.chord, transpose)}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              );
            }

            // --------------------------
            // LYRIC LINE
            // --------------------------
            return (
              <div
                key={lineIndex}
                className="mb-8 font-mono"
                style={{ fontSize }}
              >
                <div className="relative h-7">
                  {(line.chords || []).map((c: any, chordIndex: number) => (
                    <span
                      key={chordIndex}
                      className="absolute font-bold text-yellow-400"
                      style={{
                        left: `${c.position}ch`,
                      }}
                    >
                      {transposeChord(c.chord, transpose)}
                    </span>
                  ))}
                </div>

                <div className="whitespace-pre-wrap">
                  {line.lyrics}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}