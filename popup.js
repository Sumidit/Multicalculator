// Loss Calculator - Site A
document.getElementById('calculateA').addEventListener('click', function () {
  const tx = parseFloat(document.getElementById('txB').value);
  const rx = parseFloat(document.getElementById('rxA').value);
  const vi = parseFloat(document.getElementById('viA').value);
  const result = tx - rx - vi;
  document.getElementById('resultA').innerText = `Fiber Loss: ${result}`;
});

// Loss Calculator - Site B
document.getElementById('calculateB').addEventListener('click', function () {
  const tx = parseFloat(document.getElementById('txA').value);
  const rx = parseFloat(document.getElementById('rxB').value);
  const vi = parseFloat(document.getElementById('viB').value);
  const result = tx - rx - vi;
  document.getElementById('resultB').innerText = `Fiber Loss: ${result}`;
});

// Loss Difference Calculator
document.getElementById('calculateDifference').addEventListener('click', function () {
  const threshold = parseFloat(document.getElementById('thresholdValue').value);
  const currentLoss = parseFloat(document.getElementById('currentLossValue').value);
  const result = threshold - currentLoss;
  document.getElementById('resultDifference').innerText = `Loss Difference: ${result}`;
});

// Add similar functionality for the right-side calculators as shown earlier.

// Threshold Meter
document.getElementById('calculateThreshold').addEventListener('click', function () {
  const constantA = parseFloat(document.getElementById('constantA').value);
  const constantB = parseFloat(document.getElementById('constantB').value);
  const linkDistance = parseFloat(document.getElementById('linkDistanceThreshold').value) || 0;
  const connectorLoss = parseFloat(document.getElementById('connectorLossThreshold').value);
  const threshold = (constantA * linkDistance) + (constantB * linkDistance) + connectorLoss;
  document.getElementById('resultThreshold').innerText = `Threshold: ${threshold}`;
});

// Threshold As Per Link Budget
document.getElementById('calculateLinkBudget').addEventListener('click', function () {
  const fiberLength = parseFloat(document.getElementById('fiberLength').value) || 0;
  const fiberAttenuation = parseFloat(document.getElementById('fiberAttenuation').value);
  const spliceLoss = parseFloat(document.getElementById('spliceLoss').value);
  const spliceCount = parseFloat(document.getElementById('spliceCount').value) || 0;
  const connectorLoss = parseFloat(document.getElementById('connectorLoss').value);
  const connectorCount = parseFloat(document.getElementById('connectorCount').value);
  const safetyMargin = parseFloat(document.getElementById('safetyMargin').value);

  const threshold =
    (fiberLength * fiberAttenuation) +
    (spliceLoss * spliceCount) +
    (connectorLoss * connectorCount) +
    safetyMargin;

  document.getElementById('resultLinkBudget').innerText = `Threshold: ${threshold}`;
});