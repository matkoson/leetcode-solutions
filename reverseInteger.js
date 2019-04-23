const reverse = function(x) {
    const processed = String(x).includes('-') ?
      `-${String(x).slice(1).split("").reverse().join("")}`:
            String(x).split("").reverse().join("");
    return Number(processed) > 2 ** 31 -1 || Number(processed) < 2 ** 31 * -1 ? 0 : processed;
};