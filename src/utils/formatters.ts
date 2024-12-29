export const formatMetric = (metric: string): string => {
  // Ensure metric starts with a strong action verb
  const actionVerbs = ['Led', 'Drove', 'Launched', 'Increased', 'Developed', 'Created', 'Implemented'];
  const startsWithVerb = actionVerbs.some(verb => 
    metric.toLowerCase().startsWith(verb.toLowerCase())
  );

  if (!startsWithVerb && metric.trim()) {
    return `Achieved ${metric}`;
  }

  return metric;
};