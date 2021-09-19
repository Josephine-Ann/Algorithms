function taumBday(b, w, bc, wc, z) {
    var diff;
    (wc - bc) < 0 ? diff = (wc - bc) * -1 : diff = (wc - bc)
    if (b.toString().length > 8) {
        b = BigInt(b)
        w = BigInt(w)
        bc = BigInt(bc)
        wc = BigInt(wc)
        z = BigInt(z)
        diff = BigInt(diff)
    }
    if (diff > z && wc > bc) {
        return typeof b === 'bigint' ? (((w + b) * (bc)) + (w * z)).toString() : (((w + b) * (bc)) + (w * z))
    } else if (diff > z && wc < bc) {
        return typeof b === 'bigint' ? (((w + b) * (wc)) + (b * z)).toString() : (((w + b) * (wc)) + (b * z))
    } else {
        return typeof b === 'bigint' ? ((b * bc) + (w * wc)).toString() : ((b * bc) + (w * wc))
    }
}

// explanation
// https://www.hackerrank.com/challenges/taum-and-bday/problem