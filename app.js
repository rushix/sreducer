const calcNewAcc = (sequenceStart, sequenceEnd) => {
  switch (true) {

    case sequenceStart === sequenceEnd:
      return `${ sequenceStart }`;

    case sequenceEnd - sequenceStart < 2:
      return `${sequenceStart},${sequenceEnd}`;

    default:
      return `${sequenceStart}-${sequenceEnd}`;

  }
}

export default vector => {
  return new Promise((resolve, reject) => {
    if (!(vector instanceof Array)) {
      reject(new Error('wrong incoming data type'));
    }

    let [seqStart, ...rest] = vector;
    let prev = seqStart;

    rest.push('\0');

    const reduced = rest.reduce((acc, curr) => {
      switch (curr) {

        case prev + 1:
          prev = curr;
          return acc;

        default:
          acc.push(calcNewAcc(seqStart, prev));
          seqStart = prev = curr;
          return acc;

      }
    }, []);

    resolve(reduced.join(','));
  });
}
