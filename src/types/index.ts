export interface Pronunciation {
  us: { ipa: string; audio?: string };
}

export interface Tag {
  emoji: string;
  label: string;
}

export interface RealSceneItem {
  style: "casual" | "business" | "written";
  situation: string;
  nativeExpression: string;
  meaning: string;
  nativeFeeling: string;
}

export interface ExpressionData {
  expression: string;
  pronunciation: Pronunciation;
  coreMeaning: {
    english: string;
    chinese: string;
  };
  tags: Tag[];
  commonness: number;
  relatedExpressions: string[];
  nativeFeeling: {
    coreFeeling: string;
    emotionalMeaning: string;
    chineseExplanation: string;
    intro: string;
    details: string[];
    keyInsight: string;
  };
  semanticMap: {
    emotionLevel: string;
    formality: string;
    frequency: string;
    relatedExpressions: {
      expression: string;
      emotion: string;
      formality: string;
      frequency: string;
      position: { x: number; y: number };
    }[];
  };
  expressionFamily: {
    expression: string;
    meaning: string;
    difference: string;
  }[];
  contextMap: {
    scenes: { label: string; emoji: string; rating: number; style: "oral" | "academic" }[];
  };
  realScene: {
    scenes: RealSceneItem[];
  };
  similarExpressions: {
    expression: string;
    vsExpression: string;
    meaningDifference: string;
    emotionalDifference: string;
    usageDifference: string;
    frequencyDifference: string;
    whenToUse: string;
  }[];
  wordOrigin: {
    text: string;
    chinese: string;
    available: boolean;
  };
  learningTip: string;
}

export interface SearchHistoryItem {
  expression: string;
  visitedAt: number;
}

export type FavoritesMap = Record<string, true>;
