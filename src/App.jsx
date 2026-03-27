import { useMemo, useState } from "react";

const logoSrc =
  "data:image/webp;base64,UklGRhgDAABXRUJQVlA4IAwDAACQFgCdASqgAKAAPm02mEgkIyUhJXeIsKANiWdu4EGvAHf0oEDbCgCcMDMoF/myuRfldk4gGlmYnRqS/ERximoL/MYuElfQ4RNHWmbi5xc2m4GQaXzmaog1RG++rFuKAdGpjhuwhNzCbD3b5DgDdCEWOqCDWKMyZqbA/duU4oqKAyCeCIIjWNZb1azq6L+v7Le3aFXO0ejZcG4CjD3Kd1iSH0n4m9H+qI0kx9Gk5N+Q8GGWrDBtwF0XEN/9tv2Cp2dK6EmmQ3N8x7P0uz3AH2bUjv5w3an6fu2VghkQ2jC+W0E11qoP6T2b8aK3Gv3+WLm6NTbP1y13QnR35dYd9RqjKDM4Xg8b6J0L3r6EL7k9IX4uD+5P7bQkKp3Q0FQvNtz8pu9j5Yk2q7x7mBEkM5nXviK+PqHwvjPyLckz7dZPlkfd0yUGN92gPjCYqwvUeM+PfsH9Y8n6J0o1cgQjG1nDpuP7Vas0z0uf7bL8UAwAA";

const copy = {
  en: {
    nav: { services: "Services", about: "About", insights: "Insights", contact: "Contact" },
    lang: { en: "EN", zh: "中文" },
    badge: "Founder-led online advisory studio",
    heroTitle: "Clearer decisions for SMEs navigating growth, AI, and uncertainty.",
    heroText:
      "Lucenta helps small and growing businesses diagnose decision bottlenecks, assess AI opportunities, and turn fragmented information into practical action.",
    ctaPrimary: "Book a consultation",
    ctaSecondary: "Explore services",
    facingTitle: "What clients are often facing",
    facingItems: [
      "We have too many ideas, but no clear priority.",
      "We keep hearing about AI, but do not know where it actually fits.",
      "Growth has slowed, but the reason is not obvious.",
      "We have data, but it is not helping us make better decisions.",
    ],
    pillars: [
      {
        title: "Clarity",
        text: "Sharper decision framing before more analysis, more tools, or more noise.",
      },
      {
        title: "Diagnosis",
        text: "Practical reviews of business priorities, growth bottlenecks, and AI readiness.",
      },
      {
        title: "Action",
        text: "Clear next steps built for SMEs that need momentum, not abstract advice.",
      },
    ],
    servicesLabel: "Services",
    servicesTitle: "Productised advisory services built for focused decision support.",
    servicesText:
      "Lucenta is designed for founders and small business leaders who need sharper judgement, practical diagnosis, and a more confident way to move forward.",
    outputs: "Typical outputs",
    services: [
      {
        title: "Decision Clarity Session",
        description:
          "A focused online consultation designed to help founders and managers make sense of a complex business decision, challenge assumptions, and identify the most sensible next step.",
        deliverables: ["90-minute consultation", "Decision framing", "Priority recommendations"],
      },
      {
        title: "Growth Diagnostic for SMEs",
        description:
          "A practical review of growth bottlenecks across positioning, customer segments, offer clarity, and commercial priorities — turning scattered questions into a clearer growth path.",
        deliverables: ["Business diagnosis", "Key growth gaps", "30–60 day action priorities"],
      },
      {
        title: "AI Adoption Diagnostic",
        description:
          "An advisory service for small and growing businesses evaluating where AI can create value, where it may not, and what should happen before any unnecessary spending or implementation.",
        deliverables: ["AI opportunity map", "Risk and readiness review", "Next-step roadmap"],
      },
    ],
    aboutLabel: "About Lucenta",
    aboutTitle: "A founder-led advisory practice focused on decision quality.",
    aboutBody: [
      "Lucenta exists for businesses facing ambiguity: too many ideas, too much information, or too much pressure to do something before the decision is properly understood.",
      "Rather than starting with hype, implementation, or unnecessary complexity, Lucenta starts with the decision itself — what needs to be understood, what trade-offs matter, and what action makes the most sense now.",
      "The approach combines business analysis, growth thinking, and practical judgement around AI adoption, with a focus on clarity before commitment.",
    ],
    processLabel: "How it works",
    processTitle: "Simple, structured, and designed for practical momentum.",
    process: [
      {
        step: "01",
        title: "Start with the decision",
        text: "We clarify the business question first — before jumping into analysis, tools, or solutions.",
      },
      {
        step: "02",
        title: "Diagnose what matters",
        text: "We identify the bottlenecks, trade-offs, and signals shaping the decision.",
      },
      {
        step: "03",
        title: "Turn clarity into action",
        text: "You leave with practical recommendations, sharper priorities, and a clearer path forward.",
      },
    ],
    engagementsLabel: "Engagement examples",
    engagementsTitle: "Illustrative engagements designed to feel closer to real client work.",
    engagementsText:
      "These examples show the kinds of decision support Lucenta can provide for founder-led and growing businesses. They are intended to illustrate the nature of the work, not to present named client case studies.",
    engagementMeta: {
      challenge: "Challenge",
      support: "Lucenta Support",
      outcome: "Likely Outcome",
    },
    engagements: [
      {
        company: "Retail SME",
        challenge:
          "Sales had plateaued, but the founder was unsure whether the real problem was acquisition, offer clarity, or customer mix.",
        support:
          "Lucenta reviewed the growth question, identified likely bottlenecks across positioning and customer segmentation, and structured a clearer set of commercial priorities.",
        outcome:
          "A sharper growth focus, clearer priorities for the next 30–60 days, and less wasted effort across low-value initiatives.",
      },
      {
        company: "Professional services business",
        challenge:
          "The team wanted to explore AI, but there was uncertainty around where it would genuinely create value and where it would add complexity.",
        support:
          "Lucenta assessed decision workflows, internal readiness, and likely use cases before any implementation commitment was made.",
        outcome:
          "A practical AI opportunity map, clearer boundaries on what not to do, and a more confident basis for future investment.",
      },
      {
        company: "Founder-led growing company",
        challenge:
          "Too many possible directions created decision fatigue, slowing execution and making it difficult to align near-term action.",
        support:
          "Lucenta reframed the decision, clarified the trade-offs, and converted fragmented thinking into a focused next-step roadmap.",
        outcome:
          "Greater decision clarity, stronger internal alignment, and more momentum around what mattered most.",
      },
    ],
    insightsLabel: "Insights",
    insightsTitle: "Signals, patterns, and sharper ways to think.",
    insightsComingSoon: "Coming soon",
    insights: [
      {
        title: "More data does not always lead to better decisions",
        text: "When teams lack clarity on the decision itself, more dashboards often create delay rather than confidence.",
      },
      {
        title: "Many SMEs do not have an AI problem — they have a prioritisation problem",
        text: "Before adopting tools, leaders need to understand which decisions, workflows, and constraints matter most.",
      },
      {
        title: "Growth stalls when signals are fragmented",
        text: "Businesses often collect information from multiple places, but still struggle to translate it into practical action.",
      },
    ],
    contactLabel: "Contact",
    contactTitle: "Tell us what decision you’re trying to make.",
    contactText:
      "Whether you are exploring AI, rethinking growth priorities, or navigating uncertainty in your business, Lucenta can help you assess the situation and determine the next step with greater clarity.",
    contactInfo: [
      "Email: lucenta.insights@gmail.com",
      "ABN: 74 434 180 094",
      "LinkedIn: Lucenta",
      "Format: Online consultation services",
    ],
    form: {
      name: "Your name",
      email: "Your email",
      company: "Company name",
      interest: "What are you interested in?",
      interests: [
        "Decision Clarity Session",
        "Growth Diagnostic for SMEs",
        "AI Adoption Diagnostic",
        "General enquiry",
      ],
      message: "Briefly describe your situation or the decision you’re trying to make",
      submit: "Send Enquiry",
    },
    brandLine: "Decision clarity for modern SMEs",
  },
  zh: {
    nav: { services: "服务", about: "关于", insights: "洞察", contact: "联系" },
    lang: { en: "EN", zh: "中文" },
    badge: "创始人主导的线上咨询工作室",
    heroTitle: "帮助中小企业在增长、AI 与不确定性中做出更清晰的决策。",
    heroText:
      "Lucenta 帮助成长型企业识别决策瓶颈，评估 AI 的实际机会，并把分散的信息转化为可执行的下一步行动。",
    ctaPrimary: "预约咨询",
    ctaSecondary: "查看服务",
    facingTitle: "客户常见的真实困境",
    facingItems: [
      "想法很多，但优先级始终不清楚。",
      "一直听到 AI，但不知道它真正适合放在哪里。",
      "增长放缓了，却说不清问题到底出在哪里。",
      "手上有数据，但并没有帮助做出更好的决定。",
    ],
    pillars: [
      {
        title: "清晰度",
        text: "在继续增加分析、工具或信息之前，先把真正的决策框架看清。",
      },
      {
        title: "诊断",
        text: "围绕业务优先级、增长瓶颈与 AI 准备度进行务实审视。",
      },
      {
        title: "行动",
        text: "为需要推进而不是空谈的中小企业，提供明确的下一步。",
      },
    ],
    servicesLabel: "服务",
    servicesTitle: "为聚焦决策支持而设计的产品化咨询服务。",
    servicesText: "Lucenta 面向需要更强判断力、更务实诊断与更有把握前进路径的中小企业创始人与管理者。",
    outputs: "典型交付内容",
    services: [
      {
        title: "决策清晰咨询",
        description:
          "一场高聚焦的线上咨询，帮助创始人和管理者梳理复杂商业问题，检视关键假设，并识别当下最合理的下一步。",
        deliverables: ["90 分钟咨询", "决策框架梳理", "优先级建议"],
      },
      {
        title: "中小企业增长诊断",
        description:
          "围绕定位、客户分层、价值主张与商业重点，对增长瓶颈进行务实分析，把零散问题整理成更清晰的增长路径。",
        deliverables: ["业务诊断", "关键增长缺口", "30–60 天行动重点"],
      },
      {
        title: "AI 采用诊断",
        description:
          "帮助成长型企业判断哪些环节适合引入 AI、哪些不适合，以及在投入实施前最该先弄清的事情。",
        deliverables: ["AI 机会地图", "风险与准备度审视", "下一步路线图"],
      },
    ],
    aboutLabel: "关于 Lucenta",
    aboutTitle: "一家专注于决策质量的创始人主导型咨询实践。",
    aboutBody: [
      "Lucenta 为那些正面对模糊与复杂性的企业而存在：想法太多、信息太多，或在压力之下急着行动，却还没有真正看清要做什么决定。",
      "我们不会从噱头、实施或不必要的复杂化开始，而是先回到决策本身：到底需要理解什么、哪些权衡最重要、现在最合理的行动是什么。",
      "Lucenta 将商业分析、增长思维与 AI 采用判断结合起来，重点放在先看清，再投入。",
    ],
    processLabel: "工作方式",
    processTitle: "简单、结构化，并以推动实际进展为目标。",
    process: [
      {
        step: "01",
        title: "先定义决策",
        text: "在跳进分析、工具或解决方案之前，先把真正的商业问题讲清楚。",
      },
      {
        step: "02",
        title: "诊断关键因素",
        text: "识别影响决策的瓶颈、取舍与关键信号。",
      },
      {
        step: "03",
        title: "把清晰转化为行动",
        text: "你将带着更明确的建议、更清楚的优先级与更可执行的下一步离开。",
      },
    ],
    engagementsLabel: "案例示意",
    engagementsTitle: "更接近真实客户合作场景的示意案例。",
    engagementsText:
      "以下为合作场景示意，用于展示 Lucenta 可支持的项目类型与工作方式，并非具名客户案例。",
    engagementMeta: {
      challenge: "问题背景",
      support: "Lucenta 支持方式",
      outcome: "预期结果",
    },
    engagements: [
      {
        company: "零售类中小企业",
        challenge:
          "销售增长停滞，但创始人并不确定问题究竟出在获客、价值主张，还是客户结构。",
        support:
          "Lucenta 围绕增长问题进行梳理，识别定位与客户分层中的关键瓶颈，并整理出更清晰的商业优先级。",
        outcome:
          "帮助客户聚焦未来 30–60 天的增长重点，减少在低价值事项上的分散投入。",
      },
      {
        company: "专业服务公司",
        challenge:
          "团队希望探索 AI，但并不清楚哪些场景真正值得做，哪些只会增加复杂度。",
        support:
          "Lucenta 先评估决策流程、内部准备度与潜在应用场景，再决定是否值得进入实施阶段。",
        outcome:
          "形成一份务实的 AI 机会地图，明确不该做什么，并为后续投入提供更有把握的依据。",
      },
      {
        company: "创始人主导的成长型企业",
        challenge:
          "潜在方向过多导致决策疲劳，执行节奏被拖慢，团队也难以围绕近阶段重点形成一致。",
        support:
          "Lucenta 重新定义核心决策，梳理关键取舍，并将碎片化思路转化为聚焦的下一步路线图。",
        outcome:
          "提升决策清晰度与内部一致性，让企业把精力集中在真正重要的事情上。",
      },
    ],
    insightsLabel: "洞察",
    insightsTitle: "信号、模式，以及更锋利的思考方式。",
    insightsComingSoon: "即将发布",
    insights: [
      {
        title: "更多数据，不一定带来更好的决策",
        text: "当团队连决策本身都没有定义清楚时，更多仪表板往往只会制造延迟，而不是信心。",
      },
      {
        title: "许多中小企业并没有 AI 问题，而是优先级问题",
        text: "在采用工具之前，领导者更需要理解哪些决策、流程与限制才是真正重要的。",
      },
      {
        title: "增长停滞，往往源于信号碎片化",
        text: "企业常常从不同地方收集信息，却仍然难以把它转化为可执行的行动。",
      },
    ],
    contactLabel: "联系",
    contactTitle: "告诉我们，你现在正试图做出什么决定。",
    contactText:
      "无论你正在探索 AI、重整增长重点，还是在商业不确定性中寻找方向，Lucenta 都可以帮助你看清局势，并更有把握地决定下一步。",
    contactInfo: [
      "邮箱：lucenta.insights@gmail.com",
      "ABN：74 434 180 094",
      "LinkedIn：Lucenta",
      "形式：线上咨询服务",
    ],
    form: {
      name: "你的姓名",
      email: "你的邮箱",
      company: "公司名称",
      interest: "你感兴趣的服务是？",
      interests: ["决策清晰咨询", "中小企业增长诊断", "AI 采用诊断", "一般咨询"],
      message: "请简要描述你的情况，或你正在试图做出的决策",
      submit: "发送咨询",
    },
    brandLine: "为现代中小企业提供更清晰的决策支持",
  },
};

export default function App() {
  const [language, setLanguage] = useState("en");
  const t = useMemo(() => copy[language], [language]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const company = formData.get("company") || "";
    const interest = formData.get("interest") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(`Lucenta Enquiry${company ? ` - ${company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInterest: ${interest}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:lucenta.insights@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0f1722] text-white selection:bg-white selection:text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(125,211,252,0.10),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="Lucenta logo" className="h-11 w-11 rounded-xl object-contain opacity-95" />
            <div>
              <div className="text-xl font-semibold tracking-[0.18em] text-white/95">LUCENTA</div>
              <div className="mt-1 text-xs uppercase tracking-[0.28em] text-white/45">{t.brandLine}</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  language === "en"
                    ? "bg-white text-black"
                    : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {copy.en.lang.en}
              </button>
              <button
                type="button"
                onClick={() => setLanguage("zh")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  language === "zh"
                    ? "bg-white text-black"
                    : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {copy.zh.lang.zh}
              </button>
            </div>

            <nav className="flex flex-wrap gap-5 text-sm text-white/70 md:justify-end">
              <button type="button" onClick={() => scrollToSection("services")} className="transition hover:text-white">
                {t.nav.services}
              </button>
              <button type="button" onClick={() => scrollToSection("about")} className="transition hover:text-white">
                {t.nav.about}
              </button>
              <button type="button" onClick={() => scrollToSection("insights")} className="transition hover:text-white">
                {t.nav.insights}
              </button>
              <button type="button" onClick={() => scrollToSection("contact")} className="transition hover:text-white">
                {t.nav.contact}
              </button>
            </nav>
          </div>
        </header>

        <main>
          <section className="grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60 backdrop-blur">
                {t.badge}
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{t.heroText}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.01]"
                >
                  {t.ctaPrimary}
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {t.ctaSecondary}
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-5 text-sm uppercase tracking-[0.22em] text-white/45">{t.facingTitle}</div>
              <div className="space-y-4">
                {t.facingItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-base text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-5 border-y border-white/10 py-8 text-sm text-white/55 sm:grid-cols-3">
            {t.pillars.map((item) => (
              <div key={item.title}>
                <div className="text-2xl font-semibold text-white">{item.title}</div>
                <p className="mt-2 max-w-sm">{item.text}</p>
              </div>
            ))}
          </section>

          <section id="services" className="py-24">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">{t.servicesLabel}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.servicesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">{t.servicesText}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur"
                >
                  <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/68">{service.description}</p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/40">{t.outputs}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="grid gap-8 border-y border-white/10 py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">{t.aboutLabel}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.aboutTitle}</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/68">
              {t.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="py-24">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">{t.processLabel}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.processTitle}</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.process.map((item) => (
                <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="text-sm font-medium tracking-[0.2em] text-white/40">{item.step}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/68">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-y border-white/10 py-24">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">{t.engagementsLabel}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.engagementsTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">{t.engagementsText}</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.engagements.map((item) => (
                <article
                  key={item.company}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur"
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">{item.company}</div>
                  <div className="mt-5 space-y-5">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-white/35">{t.engagementMeta.challenge}</div>
                      <p className="mt-2 text-base leading-7 text-white/72">{item.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-white/35">{t.engagementMeta.support}</div>
                      <p className="mt-2 text-base leading-7 text-white/72">{item.support}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-white/35">{t.engagementMeta.outcome}</div>
                      <p className="mt-2 text-base leading-7 text-white/72">{item.outcome}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="insights" className="py-24">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">{t.insightsLabel}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.insightsTitle}</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.insights.map((item) => (
                <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold leading-8">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/68">{item.text}</p>
                  <div className="mt-6 text-sm text-white/45">{t.insightsComingSoon}</div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="pb-16 pt-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-white/45">{t.contactLabel}</div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">{t.contactText}</p>
                  <div className="mt-8 space-y-3 text-sm text-white/60">
                    {t.contactInfo.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="name"
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                      placeholder={t.form.name}
                    />
                    <input
                      name="email"
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                      placeholder={t.form.email}
                    />
                  </div>
                  <input
                    name="company"
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                    placeholder={t.form.company}
                  />
                  <select
                    name="interest"
                    defaultValue=""
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  >
                    <option value="" disabled>
                      {t.form.interest}
                    </option>
                    {t.form.interests.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    rows={6}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                    placeholder={t.form.message}
                  />
                  <button
                    type="submit"
                    className="mt-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.01]"
                  >
                    {t.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
