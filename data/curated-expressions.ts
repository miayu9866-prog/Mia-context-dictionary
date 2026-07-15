import type { ExpressionData } from "@/types";

export const curatedExpressions: Record<string, ExpressionData> = {
  awkward: {
    expression: "awkward",
    pronunciation: { us: { ipa: "/ˈɔːkwɚd/" } },
    coreMeaning: {
      english: "Feeling uncomfortable or embarrassed because a situation feels unnatural.",
      chinese: "形容一种社交场景中不自然、不舒服的感觉。",
    },
    tags: [
      { emoji: "😬", label: "Social discomfort" },
      { emoji: "💬", label: "Informal" },
      { emoji: "🎬", label: "Common in conversations" },
    ],
    commonness: 5,
    relatedExpressions: ["embarrassing", "uncomfortable", "weird"],
    nativeFeeling: {
      intro: "awkward is not simply \"embarrassing.\"",
      details: [
        "It describes a moment when something feels socially uncomfortable or unnatural.",
        "The mental image is a pause in conversation where no one knows what to say.",
        "It's the feeling of being in a situation that just doesn't flow smoothly.",
      ],
      keyInsight: "Awkward is about the situation feeling off, not about you doing something wrong.",
    },
    contextMap: {
      scenes: [
        { label: "TV Shows", emoji: "🎬", rating: 5, style: "oral" },
        { label: "Daily Conversation", emoji: "💬", rating: 5, style: "oral" },
        { label: "Workplace", emoji: "💼", rating: 3, style: "oral" },
        { label: "Academic Writing", emoji: "📚", rating: 1, style: "academic" },
      ],
    },
    realScene: {
      scenes: [
        { style: "casual", situation: "A family dinner becomes silent and nobody knows what to say.", nativeExpression: "\"I don't want this to get awkward.\"", meaning: "我不想让气氛变奇怪。", nativeFeeling: "Not necessarily embarrassing. It means the atmosphere feels uncomfortable." },
        { style: "business", situation: "A meeting runs into an unexpected silence after a sensitive question.", nativeExpression: "\"This is getting awkward \u2014 let's move on.\"", meaning: "有点尴尬了，我们继续吧。", nativeFeeling: "Used to break tension and redirect professionally." },
        { style: "written", situation: "A blog post describing a social faux pas at a networking event.", nativeExpression: "\"It was an awkward encounter that left me searching for words.\"", meaning: "那是一次尴尬的相遇。", nativeFeeling: "Descriptive and reflective, used in storytelling." }
      ] },
    similarExpressions: [
      {
        expression: "awkward", vsExpression: "embarrassing",
        meaningDifference: "Awkward = the situation feels off. Embarrassing = you feel ashamed.",
        emotionalDifference: "Awkward is cold discomfort. Embarrassing is hot shame.",
        usageDifference: "Use awkward for social silence. Use embarrassing for personal mistakes.",
        frequencyDifference: "Both very common, but awkward is slightly more frequent.",
        whenToUse: "If the room goes quiet, it's awkward. If you trip in public, it's embarrassing.",
      },
      {
        expression: "awkward", vsExpression: "uncomfortable",
        meaningDifference: "Awkward is about social friction. Uncomfortable is about personal unease.",
        emotionalDifference: "Awkward = external situation. Uncomfortable = internal feeling.",
        usageDifference: "Awkward in social contexts. Uncomfortable for physical or emotional states.",
        frequencyDifference: "Both very common (5/5).",
        whenToUse: "Awkward when the vibe is off. Uncomfortable when you feel tense or in pain.",
      },
    ],
    wordOrigin: {
      text: "From Old Norse 'öfugr' (turned backward) + English '-ward' (direction). Literally 'turned the wrong way.' Over centuries it evolved from 'clumsy in movement' to 'socially uncomfortable.'",
      chinese: "源自古诺尔斯语 'öfugr'（意为「朝后的」）加上英语后缀 '-ward'（朝向）。字面意思是「朝错误方向的」，后来演变为「笨拙的」，再进一步变为「社交上令人不自在的」。",
      available: true,
    },
    learningTip: "想象一个场景：电梯里只有你和陌生人，两人都盯着楼层数字——这种沉默感就是 awkward。下次遇到冷场，心里默念 'this is awkward'，让这个词和身体感受绑定。",
  },

  "figure out": {
    expression: "figure out",
    pronunciation: { us: { ipa: "/ˈfɪɡjɚ aʊt/" } },
    coreMeaning: {
      english: "To understand or solve something after thinking about it carefully.",
      chinese: "经过思考后弄明白或解决某个问题。",
    },
    tags: [
      { emoji: "🧠", label: "Active thinking" },
      { emoji: "💬", label: "Informal" },
      { emoji: "🛠️", label: "Problem solving" },
    ],
    commonness: 5,
    relatedExpressions: ["find out", "work out", "solve"],
    nativeFeeling: {
      intro: "figure out is not the same as \"know\" or \"find.\"",
      details: [
        "It implies mental effort — you tried, you thought, and you finally understood.",
        "There's a 'click' moment: from confusion to clarity.",
        "It's an active process, not passive receiving of information.",
      ],
      keyInsight: "Use figure out when you want to emphasize the thinking process, not just the result.",
    },
    contextMap: {
      scenes: [
        { label: "Daily Conversation", emoji: "💬", rating: 5, style: "oral" },
        { label: "Workplace", emoji: "💼", rating: 5, style: "oral" },
        { label: "TV Shows", emoji: "🎬", rating: 4, style: "oral" },
        { label: "Academic Writing", emoji: "📚", rating: 2, style: "academic" },
      ],
    },
    realScene: {
      scenes: [
        { style: "casual", situation: "You've been debugging a code issue for hours and finally find the bug.", nativeExpression: "\"I finally figured out what was wrong.\"", meaning: "我终于搞清楚哪里出问题了。", nativeFeeling: "Relief + satisfaction. The mental puzzle just clicked into place." },
        { style: "business", situation: "A project team needs to understand why a key metric dropped.", nativeExpression: "\"We need to figure out the root cause before the client meeting.\"", meaning: "我们得在客户会议前找出根本原因。", nativeFeeling: "Urgent and focused. Implies analytical thinking." },
        { style: "written", situation: "A research report explaining a methodology breakthrough.", nativeExpression: "\"The team figured out a novel approach to data processing.\"", meaning: "团队找到了一种新的数据处理方法。", nativeFeeling: "Formal and achievement-oriented." }
      ] },
    similarExpressions: [
      {
        expression: "figure out", vsExpression: "find out",
        meaningDifference: "Figure out = you deduced it. Find out = you were told or discovered it.",
        emotionalDifference: "Figure out feels earned. Find out feels neutral or passive.",
        usageDifference: "Figure out for problems and puzzles. Find out for facts and news.",
        frequencyDifference: "Both extremely common (5/5).",
        whenToUse: "If you solved it yourself, figure out. If someone told you, find out.",
      },
      {
        expression: "figure out", vsExpression: "work out",
        meaningDifference: "Work out = a plan or solution is feasible. Figure out = you understand how.",
        emotionalDifference: "Work out = relief that it's possible. Figure out = satisfaction of understanding.",
        usageDifference: "Work out for practical solutions. Figure out for understanding concepts.",
        frequencyDifference: "Both common (4-5/5).",
        whenToUse: "Work out for 'will this plan succeed?' Figure out for 'how does this work?'",
      },
    ],
    wordOrigin: { text: "", chinese: "", available: false },
    learningTip: "想象你在拼拼图——一开始毫无头绪，不断尝试后 'click' 一声拼上了。这个瞬间就是 figure out。每次用这个词，脑中浮现那个「卡扣扣上」的声音。",
  },

  "sneak around": {
    expression: "sneak around",
    pronunciation: { us: { ipa: "/sniːk əˈraʊnd/" } },
    coreMeaning: {
      english: "To move or act secretly, usually to avoid being noticed or caught.",
      chinese: "偷偷摸摸地行动，通常是为了不被发现。",
    },
    tags: [
      { emoji: "🤫", label: "Secretive" },
      { emoji: "🎬", label: "Dramatic situations" },
      { emoji: "💬", label: "Informal" },
    ],
    commonness: 3,
    relatedExpressions: ["creep around", "skulk", "lurk"],
    nativeFeeling: {
      intro: "sneak around carries a sense of doing something you shouldn't be doing.",
      details: [
        "It's not just about moving quietly — it's about hiding your actions.",
        "There's a guilty, nervous energy to it.",
        "In relationships, it implies betrayal. In playful contexts, it's mischievous.",
      ],
      keyInsight: "The feeling is 'I'm doing something that would get me in trouble if discovered.'",
    },
    contextMap: {
      scenes: [
        { label: "TV Shows", emoji: "🎬", rating: 5, style: "oral" },
        { label: "Daily Conversation", emoji: "💬", rating: 3, style: "oral" },
        { label: "Workplace", emoji: "💼", rating: 2, style: "oral" },
        { label: "Academic Writing", emoji: "📚", rating: 1, style: "academic" },
      ],
    },
    realScene: {
      scenes: [
        { style: "casual", situation: "A teenager is trying to grab cookies from the kitchen at midnight.", nativeExpression: "\"Stop sneaking around and just ask!\"", meaning: "别偷偷摸摸了，直接说啊！", nativeFeeling: "Frustration mixed with minor accusation." },
        { style: "business", situation: "An employee notices a colleague bypassing protocol.", nativeExpression: "\"I've seen him sneaking around the server room after hours.\"", meaning: "我见过他下班后偷偷溜进服务器机房。", nativeFeeling: "Suspicious and cautionary." },
        { style: "written", situation: "A news article about covert political maneuvering.", nativeExpression: "\"The lobbyists were caught sneaking around legislative offices.\"", meaning: "游说者被发现在立法机构暗中活动。", nativeFeeling: "Journalistic tone, implying deception." }
      ] },
    similarExpressions: [
      {
        expression: "sneak around", vsExpression: "creep around",
        meaningDifference: "Sneak around = secretive actions. Creep around = slow, eerie movement.",
        emotionalDifference: "Sneak around = guilty. Creep around = creepy or scary.",
        usageDifference: "Sneak around for hiding. Creep around for horror or being weird.",
        frequencyDifference: "Sneak around is more common (3/5 vs 2/5).",
        whenToUse: "Sneak around for guilty secrets. Creep around for horror movie vibes.",
      },
    ],
    wordOrigin: {
      text: "From Old English 'snican' (to creep) + 'around.' Originally described physical stealth, later extended to deceptive behavior generally.",
      chinese: "源自古英语 'snican'（爬行）加上 'around'。原意描述物理上的偷偷移动，后来扩展到形容欺骗性行为。",
      available: true,
    },
    learningTip: "想象你深夜蹑手蹑脚走过父母房间门口——每一步都踩得很轻，屏住呼吸。这个全身紧绷的感觉就是 sneak around。用手作成猫步姿势，脚趾先着地，同时轻声说 'sneak... sneak... sneak...'",
  },

  "resort to": {
    expression: "resort to",
    pronunciation: { us: { ipa: "/rɪˈzɔːrt tuː/" } },
    coreMeaning: {
      english: "To use something as a last option because all other choices have failed.",
      chinese: "在别无选择时不得已采用某种手段。",
    },
    tags: [
      { emoji: "😩", label: "Last resort" },
      { emoji: "💼", label: "Workplace" },
      { emoji: "🎬", label: "Dramatic situations" },
    ],
    commonness: 4,
    relatedExpressions: ["fall back on", "turn to", "default to"],
    nativeFeeling: {
      intro: "resort to always carries a sense of reluctance and defeat.",
      details: [
        "It implies you've exhausted all better options.",
        "There's a grudging acceptance — 'I don't want to, but I have to.'",
        "The word often introduces something negative or extreme as the last option.",
      ],
      keyInsight: "The emotional core is reluctance. You didn't choose this path — it was forced on you.",
    },
    contextMap: {
      scenes: [
        { label: "TV Shows", emoji: "🎬", rating: 4, style: "oral" },
        { label: "Workplace", emoji: "💼", rating: 4, style: "oral" },
        { label: "Daily Conversation", emoji: "💬", rating: 3, style: "oral" },
        { label: "News & Media", emoji: "📰", rating: 4, style: "academic" },
      ],
    },
    realScene: {
      scenes: [
        { style: "casual", situation: "A company has tried everything to save costs, and now has no choice left.", nativeExpression: "\"We had to resort to laying off employees.\"", meaning: "我们不得已只能裁员。", nativeFeeling: "Heavy, serious, reluctant. This is not a happy decision." },
        { style: "business", situation: "A startup exhausted all fundraising options before making a hard call.", nativeExpression: "\"We may have to resort to shutting down the division.\"", meaning: "我们可能不得不关停这个部门了。", nativeFeeling: "Grim and decisive." },
        { style: "written", situation: "A legal document describing escalation of dispute resolution.", nativeExpression: "\"If negotiations fail, the parties shall resort to arbitration.\"", meaning: "若谈判失败，双方应诉诸仲裁。", nativeFeeling: "Formal and procedural." }
      ] },
    similarExpressions: [
      {
        expression: "resort to", vsExpression: "fall back on",
        meaningDifference: "Resort to = last unpleasant option. Fall back on = a reliable backup plan.",
        emotionalDifference: "Resort to = negative, reluctant. Fall back on = neutral or even positive.",
        usageDifference: "Resort to for desperate measures. Fall back on for skills or resources.",
        frequencyDifference: "Fall back on is slightly more common in daily speech.",
        whenToUse: "Resort to when there's no good option left. Fall back on when you have a safety net.",
      },
    ],
    wordOrigin: {
      text: "From French 'resortir' (to go out again). Originally meant 'to go to a place,' later evolved to 'turn to for help,' and finally 'fall back on as a last option.'",
      chinese: "源自古法语 'resortir'（重新出去）。最初意为「去某个地方」，后来演变为「求助于」，最终变成「作为最后手段」。",
      available: true,
    },
    learningTip: "想象手机快没电了，充电宝也用完了，咖啡馆没有插座——最后你不得不关机。这个「所有选择都试过了，只剩下我不想要的选项」的心情，就是 resort to。",
  },
};

export function getCuratedExpression(expression: string): ExpressionData | null {
  const key = expression.toLowerCase().trim();
  return curatedExpressions[key] ?? null;
}