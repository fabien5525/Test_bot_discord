const  XP_LEVEL1 = 200;

function calculXpLevelA(level, xpPastLevel) {
    return (xpPastLevel + 70 + (20*level));
}

function calculXpLevel(level) {
    let xpLevel = XP_LEVEL1;

    if (level === 1)
        return xpLevel;

    for (let i = 2; i <= level; i++) {
        xpLevel = calculXpLevelA(i, xpLevel);
    }
    return xpLevel;
}

module.exports = calculXpLevel;