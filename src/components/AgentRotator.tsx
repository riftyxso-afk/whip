"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Agent = {
  name: string;
  logo: string;
  fit: number;
  plate: boolean;
};

const AGENTS: Agent[] = [
  { name: "Claude Code", logo: "/images/agents/claude-code.png", fit: 1.243, plate: false },
  { name: "Codex", logo: "/images/agents/codex.png", fit: 1, plate: false },
  { name: "Cursor", logo: "/images/agents/cursor.png", fit: 1.255, plate: false },
  { name: "Gemini CLI", logo: "/images/agents/gemini-cli.png", fit: 0.74, plate: true },
  { name: "Muse Code", logo: "/images/agents/muse-code.png", fit: 1.45, plate: false },
  { name: "OpenCode", logo: "/images/agents/opencode.png", fit: 1, plate: true },
  { name: "ChatGPT", logo: "/images/agents/chatgpt.png", fit: 1.1, plate: true },
  { name: "Amp", logo: "/images/agents/amp.png", fit: 1, plate: true },
  { name: "Windsurf", logo: "/images/agents/windsurf.png", fit: 1, plate: false },
  { name: "Goose", logo: "/images/agents/goose.png", fit: 1, plate: true },
  { name: "Antigravity", logo: "/images/agents/antigravity.png", fit: 1.44, plate: false },
  { name: "Cline", logo: "/images/agents/cline.png", fit: 1.09, plate: true },
  { name: "Kiro", logo: "/images/agents/kiro.png", fit: 1, plate: true },
  { name: "Warp", logo: "/images/agents/warp.png", fit: 1, plate: false },
  { name: "Roo Code", logo: "/images/agents/roo-code.png", fit: 1, plate: false },
  { name: "Zed", logo: "/images/agents/zed.png", fit: 1.23, plate: false },
  { name: "GitHub Copilot", logo: "/images/agents/github-copilot.png", fit: 1.2, plate: false },
];

const HOLD_MS = 2000;
const FIRST_HOLD_MS = 1000;
const LEAVE_MS = 240;
const ENTER_MS = 440;
const ENTER_DELAY_MS = 110;

const CSS = `
.mjah { position: relative; width: 100%; }
.mjah-line { display: block; }
.mjah-lead { white-space: nowrap; }
.mjah-agent { display: inline-block; white-space: nowrap; }
.mjah-logo {
  position: relative; display: inline-block; overflow: hidden;
  width: 0.74em; height: 0.74em;
  margin-right: 0.237em;
  vertical-align: -0.006em;
  border-radius: 22.5%;
}
.mjah-logo img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: contain; transform: scale(var(--fit, 1));
  user-select: none; -webkit-user-drag: none;
}
.mjah-logo.is-plate { background: #fff; box-shadow: inset 0 0 0 1px rgba(42, 42, 39, 0.1); }
.mjah-slot { position: relative; display: inline-block; vertical-align: baseline; text-align: left; white-space: nowrap; }
.mjah-slot.is-live { transition: width 560ms cubic-bezier(0.65, 0, 0.35, 1); }
.mjah-agent.is-leaving {
  position: absolute; left: 0; top: 0; pointer-events: none;
  animation: mjah-leave ${LEAVE_MS}ms cubic-bezier(0.55, 0, 1, 0.45) both;
}
.mjah-agent.is-entering { animation: mjah-enter ${ENTER_MS}ms cubic-bezier(0.22, 1, 0.36, 1) ${ENTER_DELAY_MS}ms both; }
.mjah-measure { position: absolute; left: 0; top: 0; visibility: hidden; pointer-events: none; white-space: nowrap; }
.mjah-measure > .mjah-agent { display: block; width: max-content; }
@keyframes mjah-leave { to { opacity: 0; filter: blur(0.08em); transform: translateY(-0.2em); } }
@keyframes mjah-enter { from { opacity: 0; filter: blur(0.08em); transform: translateY(0.2em); } }
@media (prefers-reduced-motion: reduce) {
  .mjah-slot.is-live { transition: none; }
  .mjah-agent.is-entering { animation: none; }
  .mjah-agent.is-leaving { display: none; }
}
`;

function AgentName({ agent, className }: { agent: Agent; className?: string }) {
  return (
    <span className={className ? `mjah-agent ${className}` : "mjah-agent"}>
      <span
        className={agent.plate ? "mjah-logo is-plate" : "mjah-logo"}
        style={{ "--fit": agent.fit } as React.CSSProperties}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={agent.logo} alt="" draggable={false} />
      </span>
      <span className="mjah-name" translate="no">
        {agent.name}
      </span>
    </span>
  );
}

export function AgentRotator({ startIndex = 0 }: { startIndex?: number }) {
  const [index, setIndex] = useState(startIndex);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [widths, setWidths] = useState<number[] | null>(null);
  const [tick, setTick] = useState(0);
  const [active, setActive] = useState(true);
  const measureRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const read = () => {
      const fontSize = parseFloat(getComputedStyle(el).fontSize) || 1;
      const next = Array.from(el.children).map(
        (child) => child.getBoundingClientRect().width / fontSize
      );
      if (next.length !== AGENTS.length || next.some((w) => !(w > 0))) return;
      setWidths((prev) =>
        prev && prev.every((w, i) => Math.abs(w - next[i]) < 0.002) ? prev : next
      );
    };
    read();
    const ro = new ResizeObserver(read);
    Array.from(el.children).forEach((child) => ro.observe(child));
    let cancelled = false;
    document.fonts?.ready?.then(() => {
      if (!cancelled) read();
    });
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    let visible = true;
    const sync = () => setActive(visible && document.visibilityState !== "hidden");
    const io =
      el && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              visible = entries.some((entry) => entry.isIntersecting);
              sync();
            }
          )
        : null;
    io?.observe(el as Element);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      io?.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    if (!widths || !active) return;
    const id = setTimeout(
      () => {
        setLeaving(index);
        setIndex((current) => (current + 1) % AGENTS.length);
        setTick((t) => t + 1);
      },
      tick === 0 ? FIRST_HOLD_MS : HOLD_MS
    );
    return () => clearTimeout(id);
  }, [widths, active, index, tick]);

  useEffect(() => {
    if (leaving === null) return;
    const id = setTimeout(() => setLeaving(null), LEAVE_MS + 40);
    return () => clearTimeout(id);
  }, [leaving, tick]);

  const live = widths !== null;

  return (
    <div ref={containerRef} className="mjah">
      <style>{CSS}</style>
      <span className="mjah-line mjah-lead">
        What if{" "}
        <span
          className={live ? "mjah-slot is-live" : "mjah-slot"}
          style={live ? { width: `${widths[index]}em` } : undefined}
        >
          <AgentName
            key={`agent-${tick}`}
            agent={AGENTS[index]}
            className={live && tick > 0 ? "is-entering" : undefined}
          />
          {live && leaving !== null ? (
            <AgentName
              key={`leaving-${tick}`}
              agent={AGENTS[leaving]}
              className="is-leaving"
            />
          ) : null}
        </span>
      </span>{" "}
      <span className="mjah-line">lived in a single workspace?</span>
      <span ref={measureRef} className="mjah-measure" aria-hidden="true">
        {AGENTS.map((agent) => (
          <AgentName key={agent.name} agent={agent} />
        ))}
      </span>
    </div>
  );
}
