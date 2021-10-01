function dayOnePartOne(i, s = 2020) {
    var nums = {}
    i.forEach(n => {
        if (!nums[n]) nums[n] = (s - n)
    });
    var f;
    for (const n in nums) {
        f = nums[n]
        if (nums[f]) return (n * f)
    }
}

function dayOnePartTwo(i) {
    var nums = {}
    i.forEach(n => {
        if (!nums[n]) nums[n] = 2020 - n
    });
    var th;
    var ans;
    for (const n in nums) {
        ans = nums[n]
        i.forEach(item => {
            if (nums[ans - item]) {
                th = [parseInt(n, 10), item, (ans - item)]
            }
        });
    }
    return th[0] * th[1] * th[2]
}

// explanation
// https://adventofcode.com/2020/day/1