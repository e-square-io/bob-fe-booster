export interface Card {
  id: number;
  title: string;
  description: string;
  type: CardType;
}

export type CardType = 'twitter' | 'facebook' | 'none';
