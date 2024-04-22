import healthPlayer from "../health.js"


const healthList = [
    ['mag', 90,'healthy'],
    ['archer', 40, 'wounded'],
    ['warrior', 10, 'critical']
]

test.each(healthList)('health check', (name, health, expected) => {
    const result = healthPlayer({name, health});
    expect(result).toBe(expected);
})