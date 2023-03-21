const barwoPeakHalf = 8;
const wPeak = 8;
const gap = 10;

const range = n =>
  Array(n)
    .fill(0)
    .map((_, i) => i);

const svg = d3.select("#svg");
const group = svg.append("g").attr("transform", "translate(0, 384)");
range(Math.ceil(20)).forEach(i => {
  const k = i * (1000 / 20) - 500;
  group
    .append("line")
    .attr("x1", -500)
    .attr("y1", k)
    .attr("x2", 1500)
    .attr("y2", k)
    .attr("stroke", "#383c41");
});
range(Math.ceil(40)).forEach(i => {
  const k = i * (2000 / 40) - 500;
  group
    .append("line")
    .attr("x1", k)
    .attr("y1", -500)
    .attr("x2", k)
    .attr("y2", 500)
    .attr("stroke", "#383c41");
});

const flip = obj =>
  Object.entries(obj).reduce(
    (acc, [key, val]) => ({ ...acc, [key]: -1 * val }),
    {}
  );

const bull = d => {
  const { offset } = d;
  const { high, low, open, close } = flip(d);
  const ctx = d3.path();
  ctx.moveTo(offset, open);
  ctx.lineTo(offset, close);
  ctx.lineTo(offset + barwoPeakHalf, close);
  ctx.lineTo(offset + barwoPeakHalf, high);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, high);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, close);
  ctx.lineTo(offset + 2 * barwoPeakHalf + wPeak, close);
  ctx.lineTo(offset + 2 * barwoPeakHalf + wPeak, open);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, open);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, low);
  ctx.lineTo(offset + barwoPeakHalf, low);
  ctx.lineTo(offset + barwoPeakHalf, open);
  ctx.lineTo(offset, open);
  return ctx.toString();
};

const bear = d => {
  const { offset } = d;
  const { high, low, open, close } = flip(d);
  const ctx = d3.path();
  ctx.moveTo(offset, open);
  ctx.lineTo(offset + barwoPeakHalf, open);
  ctx.lineTo(offset + barwoPeakHalf, high);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, high);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, open);
  ctx.lineTo(offset + 2 * barwoPeakHalf + wPeak, open);
  ctx.lineTo(offset + 2 * barwoPeakHalf + wPeak, close);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, close);
  ctx.lineTo(offset + barwoPeakHalf + wPeak, low);
  ctx.lineTo(offset + barwoPeakHalf, low);
  ctx.lineTo(offset + barwoPeakHalf, close);
  ctx.lineTo(offset, close);
  ctx.lineTo(offset, open);
  return ctx.toString();
};
let ticks = [
  {
    open: 0,
    close: 40,
    high: 60,
    low: -5,
    offset: 0,
    volume: 84.43212580767805
  },
  {
    open: 40,
    close: 127.55354834575667,
    high: 141.2960858440816,
    low: 27.444687122006826,
    offset: 34,
    volume: 70.41026844025848
  },
  {
    open: 127.55354834575667,
    close: 166.58924338169703,
    high: 210.7105508970051,
    low: 121.12392115775219,
    offset: 68,
    volume: 87.03087208156829
  },
  {
    open: 166.58924338169703,
    close: 263.43482802234155,
    high: 305.57321408925725,
    low: 159.22477338250806,
    offset: 102,
    volume: 74.6359626583898
  },
  {
    open: 263.43482802234155,
    close: 202.7751751030893,
    high: 309.1539806642793,
    low: 171.053830648993,
    offset: 136,
    volume: 72.4628966470118
  },
  {
    open: 202.7751751030893,
    close: 229.08742889648852,
    high: 233.76485022171792,
    low: 188.1075270895371,
    offset: 170,
    volume: 95.39608297179834
  },
  {
    open: 229.08742889648852,
    close: 146.7730637521314,
    high: 279.01743893675734,
    low: 141.58443202958665,
    offset: 204,
    volume: 61.11495875591415
  },
  {
    open: 146.7730637521314,
    close: 97.22800566865783,
    high: 176.82890713666893,
    low: 57.67689612819122,
    offset: 238,
    volume: 77.80901414559213
  },
  {
    open: 97.22800566865783,
    close: 197.110338345152,
    high: 243.51915758411528,
    low: 89.21742017259234,
    offset: 272,
    volume: 51.51856954466821
  },
  {
    open: 197.110338345152,
    close: 213.3723525843139,
    high: 236.95440440514653,
    low: 191.88425099211946,
    offset: 306,
    volume: 91.33005352303901
  },
  {
    open: 213.3723525843139,
    close: 188.96560979037307,
    high: 238.7043086321147,
    low: 152.28074888112738,
    offset: 340,
    volume: 98.52748020055684
  },
  {
    open: 188.96560979037307,
    close: 214.6561082272709,
    high: 238.41086816758698,
    low: 149.26908283778468,
    offset: 374,
    volume: 72.03233454274509
  },
  {
    open: 214.6561082272709,
    close: 185.92757335038377,
    high: 225.3437732804947,
    low: 136.85926792504017,
    offset: 408,
    volume: 83.48468625431482
  },
  {
    open: 185.92757335038377,
    close: 163.0612213755141,
    high: 212.71277457194455,
    low: 150.49472243351607,
    offset: 442,
    volume: 85.27833482070187
  },
  {
    open: 163.0612213755141,
    close: 168.88138378631527,
    high: 212.3540737746647,
    low: 117.12930574403035,
    offset: 476,
    volume: 94.77714883571858
  },
  {
    open: 168.88138378631527,
    close: 101.11607905991299,
    high: 182.56078397466948,
    low: 92.0727833545643,
    offset: 510,
    volume: 83.17606431072807
  },
  {
    open: 101.11607905991299,
    close: 152.45448142304326,
    high: 152.92517291337765,
    low: 95.44807746458508,
    offset: 544,
    volume: 66.78202211500246
  },
  {
    open: 152.45448142304326,
    close: 57.676828220638015,
    high: 196.13116035738835,
    low: 26.972983997017625,
    offset: 578,
    volume: 63.176588697263256
  },
  {
    open: 57.676828220638015,
    close: 20.11298095950435,
    high: 71.30377079707297,
    low: -13.83616564651004,
    offset: 612,
    volume: 64.83004310760899
  },
  {
    open: 20.11298095950435,
    close: -31.16401667694818,
    high: 59.71222286259033,
    low: -57.60937835813087,
    offset: 646,
    volume: 55.71918538340614
  },
  {
    open: -31.16401667694818,
    close: -39.44598141580301,
    high: -12.662182554275613,
    low: -87.86919930924975,
    offset: 680,
    volume: 81.02177848220376
  },
  {
    open: -39.44598141580301,
    close: 25.93872794445985,
    high: 62.68934017683462,
    low: -87.08199928250136,
    offset: 714,
    volume: 91.10827636665596
  },
  {
    open: 25.93872794445985,
    close: 123.86235717299866,
    high: 162.0578626731065,
    low: 21.54798948944716,
    offset: 748,
    volume: 78.68376892164723
  },
  {
    open: 123.86235717299866,
    close: 64.4617485974072,
    high: 144.82991405463048,
    low: 26.32257455910056,
    offset: 782,
    volume: 94.0045394447744
  },
  {
    open: 64.4617485974072,
    close: 115.22288583890035,
    high: 125.27884023819912,
    low: 28.53029687418583,
    offset: 816,
    volume: 71.92475208583355
  },
  {
    open: 115.22288583890035,
    close: 213.527121151492,
    high: 216.29314184111556,
    low: 78.06463918063196,
    offset: 850,
    volume: 65.41104838063858
  },
  {
    open: 213.527121151492,
    close: 151.6357442426896,
    high: 247.5459364757636,
    low: 111.89392215352775,
    offset: 884,
    volume: 99.94160982512861
  },
  {
    open: 151.6357442426896,
    close: 105.22614045810785,
    high: 168.06174042288163,
    low: 72.47196529805552,
    offset: 918,
    volume: 54.91980110280322
  },
  {
    open: 105.22614045810785,
    close: 31.060148273740836,
    high: 139.7447233469859,
    low: -15.458991123741065,
    offset: 952,
    volume: 73.8526321164843
  },
  {
    open: 31.060148273740836,
    close: 73.26159357969004,
    high: 115.43385005896597,
    low: -8.453878788461147,
    offset: 986,
    volume: 56.40605846100239
  },
  {
    open: 73.26159357969004,
    close: 99.8785423943386,
    high: 135.99703079689533,
    low: 41.25961707044789,
    offset: 1020,
    volume: 52.118797977672806
  },
  {
    open: 99.8785423943386,
    close: 43.410941905999366,
    high: 105.09127588885764,
    low: 23.088218102372636,
    offset: 1054,
    volume: 83.70595291550491
  }
];

ticks.forEach((tick, i) => {
  const { open, close, volume } = tick;
  const isBull = open < close;
  group
    .append("path")
    .attr("d", isBull ? bull(tick) : bear(tick))
    .attr("stroke", "none")
    .attr("fill", isBull ? "#303933" : "#393031")
    .style("filter", isBull ? "url(#bulls)" : "url(#bears)");

  group
    .append("rect")
    .attr("x", i * (2 * barwoPeakHalf + wPeak + gap))
    .attr("y", 370 - volume)
    .attr("width", 2 * barwoPeakHalf + wPeak)
    .attr("height", volume)
    .attr("fill", "#313039")
    .attr("stroke", "none")
    .style("filter", "url(#bars)");
});
