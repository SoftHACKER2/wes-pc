"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    id: "budget",
    question: "What's your budget?",
    options: [
      { label: "Under £900", value: "low" },
      { label: "£900 – £1,300", value: "mid" },
      { label: "£1,300 – £1,800", value: "high" },
      { label: "£1,800+", value: "extreme" },
    ],
  },
  {
    id: "resolution",
    question: "What monitor do you have (or want)?",
    options: [
      { label: "1080p (Full HD)", value: "1080p" },
      { label: "1440p (2K)", value: "1440p" },
      { label: "4K", value: "4k" },
      { label: "Not sure yet", value: "any" },
    ],
  },
  {
    id: "use",
    question: "What do you mainly use your PC for?",
    options: [
      { label: "Casual gaming & browsing", value: "casual" },
      { label: "Competitive gaming (high FPS)", value: "competitive" },
      { label: "Streaming / content creation", value: "content" },
      { label: "Maximum performance — no limits", value: "max" },
    ],
  },
];

function getResult(answers: Record<string, string>) {
  const budget = answers.budget;
  const use = answers.use;
  const res = answers.resolution;

  if (budget === "extreme" || use === "max" || res === "4k") return "extreme";
  if (budget === "high" || use === "content" || res === "1440p") return "high";
  if (budget === "mid" || use === "competitive") return "mid";
  return "budget";
}

const results: Record<string, { id: string; name: string; price: string; why: string }> = {
  budget: {
    id: "budget",
    name: "Budget Killer",
    price: "£799",
    why: "Based on your answers, you want solid gaming without overspending. The Budget Killer crushes 1080p at high frames — perfect for Fortnite, Warzone, and GTA without breaking the bank.",
  },
  mid: {
    id: "mid",
    name: "Best Price for Quality",
    price: "£1,200",
    why: "You're a competitive gamer who wants smooth, high-FPS gameplay. The Best Price for Quality build with the RTX 5060 Ti is the sweet spot — 1440p ultra settings, DLSS 4, and no bottlenecks.",
  },
  high: {
    id: "high",
    name: "Gaming Beast",
    price: "£1,600",
    why: "You want high-end gaming with room to stream or create content. The Gaming Beast's Ryzen 7 7700X and RX 9060 XT 16GB will handle everything you throw at it — 1440p or light 4K.",
  },
  extreme: {
    id: "extreme",
    name: "Ultimate Machine",
    price: "£2,400",
    why: "You want the absolute best. The Ultimate Machine with the 9800X3D and RX 9070 XT 16GB is the most powerful gaming PC we build — 4K ultra, no compromises, no limits.",
  },
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function answer(value: string) {
    const q = questions[step];
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  const result = done ? results[getResult(answers)] : null;
  const progress = done ? 100 : Math.round((step / questions.length) * 100);

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="wrap">
          {!done ? (
            <>
              <p className="eyebrow">FIND YOUR BUILD</p>
              <div className="progressBar">
                <div className="progressFill" style={{ width: `${progress}%` }} />
              </div>
              <p className="stepCount">{step + 1} of {questions.length}</p>

              <h1>{questions[step].question}</h1>

              <div className="options">
                {questions[step].options.map(opt => (
                  <button key={opt.value} className="option" onClick={() => answer(opt.value)}>
                    {opt.label}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button className="back" onClick={() => setStep(step - 1)}>← Back</button>
              )}
            </>
          ) : result && (
            <>
              <div className="resultWrap">
                <p className="eyebrow">YOUR PERFECT BUILD</p>
                <div className="tick">✓</div>
                <h1>{result.name}</h1>
                <p className="resultPrice">{result.price}</p>
                <p className="why">{result.why}</p>

                <div className="resultBtns">
                  <Link href={`/builds/${result.id}`} className="primary">See Full Specs →</Link>
                  <Link href="/builds" className="secondary">Compare All Builds</Link>
                </div>

                <button className="restart" onClick={restart}>Start over</button>
              </div>
            </>
          )}
        </div>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 5% 60px;
        }

        .wrap {
          width: 100%;
          max-width: 560px;
          animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 20px;
        }

        .progressBar {
          height: 3px; background: rgba(255,255,255,0.07);
          border-radius: 3px; margin-bottom: 10px; overflow: hidden;
        }

        .progressFill {
          height: 100%; background: #fff;
          border-radius: 3px;
          transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        .stepCount { font-size: 11px; color: #333; margin-bottom: 32px; }

        h1 {
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 900; letter-spacing: -1.5px;
          margin-bottom: 28px; line-height: 1.1;
        }

        .options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }

        .option {
          padding: 18px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          color: #aaa;
          font-size: 15px; font-weight: 500;
          text-align: left; cursor: pointer;
          font-family: inherit;
          transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }

        .option:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.2); color: #fff; }

        .back {
          background: none; border: none; color: #333;
          font-size: 13px; cursor: pointer; font-family: inherit;
          padding: 0; transition: color 0.2s ease;
        }

        .back:hover { color: #777; }

        .resultWrap { text-align: center; }

        .tick {
          width: 60px; height: 60px; background: #fff; color: #000;
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: 24px; font-weight: 900;
          margin: 0 auto 24px;
        }

        .resultPrice {
          font-size: 32px; font-weight: 900;
          letter-spacing: -1px; margin-bottom: 20px;
        }

        .why {
          color: #555; font-size: 14px; line-height: 1.7;
          margin-bottom: 32px; max-width: 440px; margin-left: auto; margin-right: auto;
        }

        .resultBtns { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }

        .primary, .secondary {
          display: block; padding: 15px 24px;
          border-radius: 12px; font-size: 15px; font-weight: 700;
          text-align: center; transition: opacity 0.2s ease;
        }

        .primary { background: #fff; color: #000; }
        .secondary {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1); color: #777;
        }

        .primary:hover { opacity: 0.85; }
        .secondary:hover { color: #fff; }

        .restart {
          background: none; border: none; color: #333;
          font-size: 13px; cursor: pointer; font-family: inherit;
          transition: color 0.2s ease;
        }

        .restart:hover { color: #777; }
      `}</style>
    </>
  );
}
