function introduction() {
  return [
    '100-title.md',
    '110-me.md',
    '120-di.md',
    '125-dep.md',
    '130-dep-static.md',
    '140-dep-static-long.md',
    '150-dep-ng.md',
  ].map((slidePath) => {
    return { path: `10-intro/${slidePath}` };
  });
}

function decorators() {
  return [
    '100-title.md',
    '110-experimental.md',
    '120-what.md',
    '130-simple-use.md',
    '140-factory-param.md',
    '150-factory-proxy.md',
    '160-di.md',
    '170-reflect-metadata.md',
    '180-metadata.md',
    '190-our-di.md',
  ].map((slidePath) => {
    return { path: `20-decorators/${slidePath}` };
  });
}

function drawbacks() {
  return [
    '100-title.md',
    '110-drawbacks.md',
    '120-weight.md',
    '130-runtime.md',
    '140-runtime.md',
    '150-pitfall-type.md',
    '160-pitfall-cycle.md',
    '170-magic.md',
  ].map((slidePath) => {
    return { path: `30-drawbacks/${slidePath}` };
  });
}

function stepBack() {
  return [
    '100-title.md',
    '110-static-types.md',
    '115-decorators-static.md',
    '120-ast.md',
    '130-runtime.md',
    '140-runtime.md',
    '150-sumup.md',
    '160-read.md',
    '170-thanks.md',
  ].map((slidePath) => {
    return { path: `40-stepback/${slidePath}` };
  });
}
export function usedSlides() {
  return [...introduction(), ...decorators(), ...drawbacks(), ...stepBack()];
}
