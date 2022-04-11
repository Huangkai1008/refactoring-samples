type Genre = 'tragedy' | 'comedy';
type PlayID = 'hamlet' | 'as-like' | 'othello';

export interface Play {
    name: string;
    type: Genre;
}

export type Plays = {
    [playID in PlayID]: Play;
};

interface Performance {
    playID: PlayID;
    audience: number;
}

export interface Invoice {
    customer: string;
    performances: Performance[];
}