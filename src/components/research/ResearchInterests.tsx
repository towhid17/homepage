
const interests = [
  'Natural Language Processing',
  'Computer Vision',
  'Reinforcement Learning',
  'Neural Networks Architecture',
];

export function ResearchInterests() {
  return (
    <div className="glass-card p-6">
      <ul className="space-y-2 text-white/75 list-inside">
        {interests.map((interest) => (
          <li key={interest} className="flex items-center gap-2 before:content-['•'] before:text-purple-300">
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}