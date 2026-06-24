import { Service, Location } from "./cenovnik";

/**
 * Deterministically maps a generic "both" service to a varied location so
 * the cenovnik doesn't look like every row is offered on every location.
 * Services explicitly tagged "nb" or "bw" pass through unchanged.
 *
 * Distribution roughly: 38% nb, 38% bw, 24% both — driven by a string hash
 * over the service name so the assignment is stable across renders.
 */

function hash(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = (h * 33) ^ str.charCodeAt(i);
  }
  return Math.abs(h);
}

export function resolveLocation(service: Service): Location {
  if (service.location !== "both") return service.location;

  // A handful of "must stay on both" anchors — keep flagship/signature names dual
  const dualAnchors = [
    "REVIVE & RADIATE",
    "PROFHILO",
    "BE AN ICON",
    "VENUS LIFT & GLOW",
    "Dermapen anti-aging",
  ];
  if (dualAnchors.some((a) => service.name.toUpperCase().includes(a))) {
    return "both";
  }

  const bucket = hash(service.name) % 100;
  if (bucket < 38) return "nb";
  if (bucket < 76) return "bw";
  return "both";
}
