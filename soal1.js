function puncakLeaderboard(ranked, player) {
  const rankedNew = [...new Set(ranked)].sort((a, b) => b - a);

  const results = [];

  player.forEach((score) => {
    while (rankedNew.length > 0 && score >= rankedNew[rankedNew.length - 1]) {
      rankedNew.pop();
    }

    results.push(rankedNew.length + 1);
  });

  return results;
}

const ranked = [100, 90, 90, 80];
const player = [70, 80, 105];
const result = puncakLeaderboard(ranked, player);
console.log(result);
