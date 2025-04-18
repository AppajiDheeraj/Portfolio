export default function ScrollingTape() {
  const words = ['CREATIVITY', 'INNOVATION', 'TECH', 'CODE', 'COFFEE', 'EXPLORE', ' ']
  const separator = (
    <span className="mx-10 h-2 w-2 rounded-full bg-[#b7ab98] inline-block align-middle opacity-75"></span>
  );

  const repeatedWords = Array(6).fill(
    words.flatMap((word, i) => [
      <span key={word + i} className="text-[#b7ab98] font-avant1 tracking-wide">
        {word}
      </span>,
      ...(i !== words.length - 1 ? [separator] : []),
    ])
  );

  return (
    <div className="relative bg-black py-2 border-y-2" style={{ borderColor: '#b7ab98' }}>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {repeatedWords}
        </div>
      </div>
    </div>
  );
}