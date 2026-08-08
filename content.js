window.CONCEPT_MONTHS = [
  {
    month: "2026-08",
    label: "August 2026",
    state: "provisional",
    note: "First-week snapshot. These three are deliberately provisional and will be frozen after the month closes.",
    concepts: [
      {
        rank: 1,
        concept: "Scientific software stewardship",
        contributor: "OpenAI · scientific computing",
        published: "28 Jul 2026",
        status: "Provisional",
        thesis: "When agents make implementation cheap, scientific software becomes a maintained research asset rather than disposable code.",
        whyNow: "The interesting shift is not faster coding alone. It is the chance to repair, modernize, and keep alive the infrastructure that quietly determines what science can be done.",
        links: [
          {
            role: "Origin",
            title: "Scientific computing in the age of agentic AI",
            url: "https://openai.com/index/scientific-computing-agentic-ai/"
          },
          {
            role: "Proof",
            title: "MHCflurry · an open scientific software project",
            url: "https://github.com/openvax/mhcflurry"
          },
          {
            role: "Context",
            title: "AI as a scientific collaborator",
            url: "https://cdn.openai.com/pdf/f4b4a5da-b2de-418d-9fcd-6b293e9dc157/oai_ai-as-a-scientific-collaborator_jan-2026.pdf"
          }
        ]
      },
      {
        rank: 2,
        concept: "Harness distillation",
        contributor: "Agent Harness Distillation",
        published: "30 Jul 2026",
        status: "Provisional",
        thesis: "The inference-time harness around a model is valuable enough to become a new object of extraction, defense, and intellectual property.",
        whyNow: "As agents depend on tools, memory, policies, and feedback loops, the model is no longer the whole product. Reproducing the surrounding control system becomes its own security problem.",
        links: [
          {
            role: "Origin",
            title: "Agent Harness Distillation",
            url: "https://arxiv.org/abs/2607.28147"
          },
          {
            role: "Proof",
            title: "What makes a harness a harness?",
            url: "https://arxiv.org/abs/2606.10106"
          },
          {
            role: "Context",
            title: "Program agent harnesses with the AI SDK",
            url: "https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk"
          }
        ]
      },
      {
        rank: 3,
        concept: "Production agent control plane",
        contributor: "OpenAI Presence",
        published: "22 Jul 2026",
        status: "Provisional",
        thesis: "A production agent is a controlled operating surface: model reasoning joined to policies, evaluations, guardrails, escalation, and measured rollout.",
        whyNow: "The frontier is moving from proving that an agent can act to operating one safely while products, policies, and user behavior keep changing.",
        links: [
          {
            role: "Origin",
            title: "Introducing OpenAI Presence",
            url: "https://openai.com/index/introducing-openai-presence/"
          },
          {
            role: "Proof",
            title: "Harness engineering",
            url: "https://openai.com/index/harness-engineering/"
          },
          {
            role: "Context",
            title: "AI agent standards initiative",
            url: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative"
          }
        ]
      }
    ]
  },
  {
    month: "2026-07",
    label: "July 2026",
    state: "archived",
    note: "The month is closed. Links are the shortest route to the underlying work.",
    concepts: [
      {
        rank: 1,
        concept: "Evaluation validity",
        contributor: "OpenAI · coding evaluations",
        published: "08 Jul 2026",
        status: "Established",
        thesis: "A benchmark is part of the system being measured; its broken tasks can become a louder signal than the model itself.",
        whyNow: "The contribution is a change in what counts as progress: audit the task, prompt, test, and contamination surface before trusting the score.",
        links: [
          {
            role: "Origin",
            title: "Separating signal from noise in coding evaluations",
            url: "https://openai.com/index/separating-signal-from-noise-coding-evaluations/"
          },
          {
            role: "Proof",
            title: "SWE-bench",
            url: "https://github.com/SWE-bench/SWE-bench"
          },
          {
            role: "Context",
            title: "Why SWE-bench Verified no longer measures frontier coding capabilities",
            url: "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/"
          }
        ]
      },
      {
        rank: 2,
        concept: "Self-play safety",
        contributor: "OpenAI · GPT-Red",
        published: "15 Jul 2026",
        status: "Emerging",
        thesis: "Red teaming can become an automated adversarial ecology: attackers and defenders improve against one another instead of waiting for a fixed test set.",
        whyNow: "Safety work gains a new loop when the red team can generate pressure, learn from failures, and train the defender population against the pressure it discovers.",
        links: [
          {
            role: "Origin",
            title: "GPT-Red: unlocking self-improvement for robustness",
            url: "https://openai.com/index/unlocking-self-improvement-gpt-red/"
          },
          {
            role: "Proof",
            title: "GPT-Red technical report",
            url: "https://arxiv.org/abs/2607.26115"
          },
          {
            role: "Context",
            title: "Designing agents to resist prompt injection",
            url: "https://openai.com/index/designing-agents-to-resist-prompt-injection/"
          }
        ]
      },
      {
        rank: 3,
        concept: "Agentic work beyond roles",
        contributor: "OpenAI · work and deployment",
        published: "27 Jul 2026",
        status: "Emerging",
        thesis: "The unit of knowledge work is beginning to move from a fixed role toward an adaptable agent that can cross tasks, tools, and organizational boundaries.",
        whyNow: "The meaningful question is no longer whether a model can do one job. It is how people redesign the boundary between judgment, execution, escalation, and ownership.",
        links: [
          {
            role: "Origin",
            title: "How AI is expanding what people do at work",
            url: "https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/"
          },
          {
            role: "Proof",
            title: "Codex for knowledge work",
            url: "https://openai.com/index/codex-for-knowledge-work/"
          },
          {
            role: "Context",
            title: "Introducing OpenAI Presence",
            url: "https://openai.com/index/introducing-openai-presence/"
          }
        ]
      }
    ]
  },
  {
    month: "2026-06",
    label: "June 2026",
    state: "archived",
    note: "The month is closed. Selection favors concepts that open a new design space.",
    concepts: [
      {
        rank: 1,
        concept: "Agentic RAG",
        contributor: "Google Research",
        published: "05 Jun 2026",
        status: "Emerging",
        thesis: "Retrieval becomes an agentic process: decompose the question, search across sources, inspect what was found, and keep going until the evidence is sufficient.",
        whyNow: "RAG stops being a single lookup primitive and becomes a controlled search loop for answers that cross corpora, tools, and intermediate hypotheses.",
        links: [
          {
            role: "Origin",
            title: "Unlocking dependable responses with Agentic RAG",
            url: "https://research.google/blog/unlocking-dependable-responses-with-gemini-enterprise-agent-platforms-agentic-rag/"
          },
          {
            role: "Proof",
            title: "A-RAG: agentic retrieval augmented generation",
            url: "https://arxiv.org/abs/2602.03442"
          },
          {
            role: "Context",
            title: "ARAG reference implementation",
            url: "https://github.com/Ayanami0730/arag"
          }
        ]
      },
      {
        rank: 2,
        concept: "Closed-loop AI chemistry",
        contributor: "Anthropic · OpenAI · Molecule.one",
        published: "05–17 Jun 2026",
        status: "Emerging",
        thesis: "An AI chemist is not a chatbot for papers; it is a loop that proposes, analyzes, executes, and learns from experiments.",
        whyNow: "The breakthrough is the coupling of language reasoning to instruments, reaction data, and measurable outcomes—the beginning of a scientific control loop.",
        links: [
          {
            role: "Origin",
            title: "Making Claude a chemist",
            url: "https://www.anthropic.com/research/making-claude-a-chemist"
          },
          {
            role: "Proof",
            title: "A near-autonomous AI chemist improves a challenging reaction",
            url: "https://openai.com/index/ai-chemist-improves-reaction/"
          },
          {
            role: "Context",
            title: "Introducing LifeSciBench",
            url: "https://openai.com/index/introducing-life-sci-bench/"
          }
        ]
      },
      {
        rank: 3,
        concept: "Language world models",
        contributor: "Qwen",
        published: "23 Jun 2026",
        status: "Emerging",
        thesis: "An agent can learn a world model in language: simulate tools, environments, and consequences before taking the next action.",
        whyNow: "The world model is no longer only a visual or game-playing abstraction. A language-native simulator can cover the heterogeneous software worlds where agents actually work.",
        links: [
          {
            role: "Origin",
            title: "Qwen-AgentWorld",
            url: "https://arxiv.org/abs/2606.24597"
          },
          {
            role: "Proof",
            title: "Qwen-AgentWorld code and models",
            url: "https://github.com/QwenLM/Qwen-AgentWorld"
          },
          {
            role: "Context",
            title: "Agent-authored world modeling",
            url: "https://arxiv.org/abs/2606.25421"
          }
        ]
      }
    ]
  },
  {
    month: "2026-05",
    label: "May 2026",
    state: "archived",
    note: "The month is closed. A concept earns space when it changes the unit of work, not just the model.",
    concepts: [
      {
        rank: 1,
        concept: "Natural-language autoencoders",
        contributor: "Anthropic · Transformer Circuits",
        published: "07 May 2026",
        status: "Emerging",
        thesis: "Model activations can be translated through a natural-language bottleneck, making internal representations inspectable at the level of concepts.",
        whyNow: "Interpretability moves from naming a neuron to tracing a distributed feature and asking what evidence in the activation caused a behavior.",
        links: [
          {
            role: "Origin",
            title: "Natural-language autoencoders",
            url: "https://www.anthropic.com/research/natural-language-autoencoders"
          },
          {
            role: "Proof",
            title: "Natural-language autoencoders · technical report",
            url: "https://transformer-circuits.pub/2026/nla/index.html"
          },
          {
            role: "Context",
            title: "RECAP: reasoning about concepts and pathways",
            url: "https://arxiv.org/abs/2607.20379"
          }
        ]
      },
      {
        rank: 2,
        concept: "Code as agent harness",
        contributor: "Code as Harness",
        published: "18 May 2026",
        status: "Emerging",
        thesis: "Code is not merely the agent output; it is the executable substrate that lets an agent model state, use tools, verify work, and recover.",
        whyNow: "The concept gives a precise reason that coding agents feel different from chat: the artifact is also the memory, interface, plan, and testable environment.",
        links: [
          {
            role: "Origin",
            title: "Code as agent harness",
            url: "https://arxiv.org/abs/2605.18747"
          },
          {
            role: "Proof",
            title: "Code as Harness project page",
            url: "https://code-as-harness.github.io/code-as-harness-webpage/"
          },
          {
            role: "Context",
            title: "Program agent harnesses with the AI SDK",
            url: "https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk"
          }
        ]
      },
      {
        rank: 3,
        concept: "Research agents narrow the search space",
        contributor: "Tang · Yang",
        published: "27 May 2026",
        status: "Emerging",
        thesis: "Current research agents are strong at local elaboration and recombination, but their generated ideas occupy a narrower region than human exploration.",
        whyNow: "The useful breakthrough is diagnostic: scale alone does not guarantee novelty. Research systems need mechanisms that deliberately widen the questions they are willing to ask.",
        links: [
          {
            role: "Origin",
            title: "AI research agents generate more concentrated ideas",
            url: "https://arxiv.org/abs/2605.27905"
          },
          {
            role: "Proof",
            title: "Paper summary and discussion",
            url: "https://huggingface.co/papers/2605.27905"
          },
          {
            role: "Context",
            title: "A new era of innovation · Google Research at I/O 2026",
            url: "https://research.google/blog/a-new-era-of-innovation-google-research-at-io-2026/"
          }
        ]
      }
    ]
  },
  {
    month: "2026-04",
    label: "April 2026",
    state: "archived",
    note: "The month is closed. Systems around agents are now part of the concept.",
    concepts: [
      {
        rank: 1,
        concept: "Task tracker as control plane",
        contributor: "OpenAI · Symphony",
        published: "27 Apr 2026",
        status: "Established",
        thesis: "A task tracker can become the control plane for a fleet of coding agents: issues become workspaces, state, and a route to review.",
        whyNow: "The unit of execution moves above the chat session. The durable object is the task, while agents can be created, interrupted, and replaced around it.",
        links: [
          {
            role: "Origin",
            title: "Open-sourcing Codex orchestration with Symphony",
            url: "https://openai.com/index/open-source-codex-orchestration-symphony/"
          },
          {
            role: "Proof",
            title: "OpenAI Symphony",
            url: "https://github.com/openai/symphony"
          },
          {
            role: "Context",
            title: "Symphony specification",
            url: "https://github.com/openai/symphony/blob/main/SPEC.md"
          }
        ]
      },
      {
        rank: 2,
        concept: "Agentic harness engineering",
        contributor: "Harness Engineering",
        published: "28 Apr 2026",
        status: "Emerging",
        thesis: "The harness itself can be iterated: observe agent behavior, diagnose the bottleneck, change the environment, and measure the next run.",
        whyNow: "Agent capability becomes partly an engineering property. The surrounding tools, tests, feedback, and constraints can improve even when the base model stays fixed.",
        links: [
          {
            role: "Origin",
            title: "Agentic harness engineering",
            url: "https://arxiv.org/abs/2604.25850"
          },
          {
            role: "Proof",
            title: "Harness engineering at OpenAI",
            url: "https://openai.com/index/harness-engineering/"
          },
          {
            role: "Context",
            title: "Harness design for long-running applications",
            url: "https://www.anthropic.com/engineering/harness-design-long-running-apps"
          }
        ]
      },
      {
        rank: 3,
        concept: "Network-level agent safety",
        contributor: "Microsoft Research",
        published: "08 Apr 2026",
        status: "Emerging",
        thesis: "A network of agents is not a larger single agent: interaction creates propagation, amplification, trust capture, and failures that do not appear in isolation.",
        whyNow: "The safety object expands from one model and one prompt to an ecosystem with communication paths, shared state, and emergent behavior.",
        links: [
          {
            role: "Origin",
            title: "Red-teaming a network of agents",
            url: "https://www.microsoft.com/en-us/research/blog/red-teaming-a-network-of-agents-understanding-what-breaks-when-ai-agents-interact-at-scale/"
          },
          {
            role: "Proof",
            title: "Taxonomy of failure modes in agentic AI systems",
            url: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/security/Taxonomy-of-Failure-Modes-in-Agentic-AI-Systems-v2-0.pdf"
          },
          {
            role: "Context",
            title: "AI agent standards initiative",
            url: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative"
          }
        ]
      }
    ]
  },
  {
    month: "2026-03",
    label: "March 2026",
    state: "archived",
    note: "The month is closed. Diagnosis and memory become first-class agent components.",
    concepts: [
      {
        rank: 1,
        concept: "Interactive agentic intelligence",
        contributor: "ARC Prize",
        published: "25 Mar 2026",
        status: "Established",
        thesis: "Intelligence can be measured as the ability to explore an unfamiliar interactive world, infer its rules, build a model, and adapt without a written recipe.",
        whyNow: "ARC-AGI-3 turns interaction itself into the test. It asks for active discovery rather than passive pattern completion.",
        links: [
          {
            role: "Origin",
            title: "ARC-AGI-3 launch",
            url: "https://arcprize.org/blog/arc-agi-3-launch"
          },
          {
            role: "Proof",
            title: "ARC-AGI-3 technical report",
            url: "https://arcprize.org/media/ARC_AGI_3_Technical_Report.pdf"
          },
          {
            role: "Context",
            title: "ARC Prize documentation",
            url: "https://docs.arcprize.org/"
          }
        ]
      },
      {
        rank: 2,
        concept: "Agent failure diagnosis",
        contributor: "Microsoft Research · AgentRx",
        published: "12 Mar 2026",
        status: "Emerging",
        thesis: "Agent debugging needs a causal object: find the critical failure step, classify its root cause, and change the system that made it likely.",
        whyNow: "A final answer is too coarse for a long trajectory. The path to failure becomes the artifact engineers inspect, annotate, and improve.",
        links: [
          {
            role: "Origin",
            title: "Systematic debugging for AI agents",
            url: "https://www.microsoft.com/en-us/research/blog/systematic-debugging-for-ai-agents-introducing-the-agentrx-framework/"
          },
          {
            role: "Proof",
            title: "Microsoft AgentRx",
            url: "https://github.com/microsoft/AgentRx"
          },
          {
            role: "Context",
            title: "AgentRx technical paper",
            url: "https://arxiv.org/abs/2602.02475"
          }
        ]
      },
      {
        rank: 3,
        concept: "Memory as reusable knowledge",
        contributor: "Microsoft Research · PlugMem",
        published: "10 Mar 2026",
        status: "Emerging",
        thesis: "Agent memory should compile interaction into reusable propositions and procedures, not merely append another transcript to the context window.",
        whyNow: "The memory boundary moves from storage to knowledge design: what should be retained, generalized, retrieved, and applied in a new task?",
        links: [
          {
            role: "Origin",
            title: "From raw interaction to reusable knowledge",
            url: "https://www.microsoft.com/en-us/research/blog/from-raw-interaction-to-reusable-knowledge-rethinking-memory-for-ai-agents/"
          },
          {
            role: "Proof",
            title: "PlugMem technical paper",
            url: "https://arxiv.org/abs/2603.03296"
          },
          {
            role: "Context",
            title: "PlugMem code",
            url: "https://github.com/TIMAN-group/PlugMem"
          }
        ]
      }
    ]
  },
  {
    month: "2026-02",
    label: "February 2026",
    state: "archived",
    note: "The month is closed. The surrounding system starts to matter as much as the model.",
    concepts: [
      {
        rank: 1,
        concept: "Harness engineering",
        contributor: "OpenAI",
        published: "11 Feb 2026",
        status: "Established",
        thesis: "When agents write most of the code, human engineering shifts toward shaping the environment, intent, feedback loops, and constraints that make the work reliable.",
        whyNow: "The contribution names the missing layer between a capable model and a useful software system: the harness that gives the agent a place to act and a way to know.",
        links: [
          {
            role: "Origin",
            title: "Harness engineering",
            url: "https://openai.com/index/harness-engineering/"
          },
          {
            role: "Proof",
            title: "OpenAI Codex",
            url: "https://github.com/openai/codex"
          },
          {
            role: "Context",
            title: "Harness design for long-running applications",
            url: "https://www.anthropic.com/engineering/harness-design-long-running-apps"
          }
        ]
      },
      {
        rank: 2,
        concept: "Agent Skills",
        contributor: "SkillsBench · BenchFlow",
        published: "13 Feb 2026",
        status: "Established",
        thesis: "A skill is deployable procedural knowledge: a small, targeted capability package that can be attached to an agent and tested against work.",
        whyNow: "The idea treats know-how as a modular artifact rather than a prompt trick, making the question of what a skill contains—and whether it transfers—measurable.",
        links: [
          {
            role: "Origin",
            title: "Introducing SkillsBench",
            url: "https://www.skillsbench.ai/blogs/introducing-skillsbench"
          },
          {
            role: "Proof",
            title: "SkillsBench technical paper",
            url: "https://arxiv.org/abs/2602.12670"
          },
          {
            role: "Context",
            title: "SkillsBench repository",
            url: "https://github.com/benchflow-ai/skillsbench"
          }
        ]
      },
      {
        rank: 3,
        concept: "Reflective search for AI research",
        contributor: "Google Research · MARS",
        published: "02 Feb 2026",
        status: "Emerging",
        thesis: "Automated research can be organized as budgeted search with decomposition, implementation, comparison, and memory that transfers lessons across branches.",
        whyNow: "The agent is not asked for one clever answer. It is given a constrained search space and a mechanism for learning which experiments are worth continuing.",
        links: [
          {
            role: "Origin",
            title: "MARS: modular agent with reflective search",
            url: "https://research.google/pubs/mars-modular-agent-with-reflective-search-for-automated-ai-research/"
          },
          {
            role: "Proof",
            title: "MARS technical paper",
            url: "https://arxiv.org/abs/2602.02660"
          },
          {
            role: "Context",
            title: "Microsoft RD-Agent",
            url: "https://github.com/microsoft/rd-agent"
          }
        ]
      }
    ]
  },
  {
    month: "2026-01",
    label: "January 2026",
    state: "archived",
    note: "The first archive month. Earlier work is intentionally not backfilled.",
    concepts: [
      {
        rank: 1,
        concept: "The agent loop",
        contributor: "OpenAI · Codex",
        published: "23 Jan 2026",
        status: "Established",
        thesis: "The unit of an agent is not the model response but the loop around it: state, tools, execution, observation, and another decision.",
        whyNow: "This is the smallest useful abstraction for an agent. It explains why the environment and the run matter as much as the model that starts the run.",
        links: [
          {
            role: "Origin",
            title: "Unrolling the Codex agent loop",
            url: "https://openai.com/index/unrolling-the-codex-agent-loop/"
          },
          {
            role: "Proof",
            title: "OpenAI Codex",
            url: "https://github.com/openai/codex"
          },
          {
            role: "Context",
            title: "Demystifying evals for AI agents",
            url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
          }
        ]
      },
      {
        rank: 2,
        concept: "Science-native AI workspace",
        contributor: "OpenAI · Prism",
        published: "27 Jan 2026",
        status: "Emerging",
        thesis: "A scientific collaborator needs a shared workspace for literature, code, computation, and human judgment—not just a chat window beside the work.",
        whyNow: "The contribution is a change in the interface to discovery: the AI participates inside the materials and tools that make a research result reproducible.",
        links: [
          {
            role: "Origin",
            title: "AI as a scientific collaborator",
            url: "https://cdn.openai.com/pdf/f4b4a5da-b2de-418d-9fcd-6b293e9dc157/oai_ai-as-a-scientific-collaborator_jan-2026.pdf"
          },
          {
            role: "Proof",
            title: "Introducing Prism",
            url: "https://openai.com/index/introducing-prism/"
          },
          {
            role: "Context",
            title: "Scientific computing in the age of agentic AI",
            url: "https://openai.com/index/scientific-computing-agentic-ai/"
          }
        ]
      },
      {
        rank: 3,
        concept: "Trajectory evaluation",
        contributor: "Anthropic",
        published: "09 Jan 2026",
        status: "Established",
        thesis: "Evaluating an agent means evaluating the whole trajectory: task, trial, tool calls, transcript, grader, and final outcome.",
        whyNow: "The score at the end hides the engineering story. A trajectory gives teams a common object for testing behavior, diagnosing failure, and improving the harness.",
        links: [
          {
            role: "Origin",
            title: "Demystifying evals for AI agents",
            url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
          },
          {
            role: "Proof",
            title: "AgentRx systematic debugging",
            url: "https://github.com/microsoft/AgentRx"
          },
          {
            role: "Context",
            title: "Harness engineering",
            url: "https://openai.com/index/harness-engineering/"
          }
        ]
      }
    ]
  }
];
