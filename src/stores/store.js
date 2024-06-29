import { create } from 'zustand'

export const userStore = create((set) => ({
  id: 0,
  username: "",
  points: 0,
  topPick: 0,
  isFirst: true,
  avatar: "",
  votes: [],
  setId: (id) => set({id:id}),
  setavatar: (avatar) => set({avatar:avatar}),
  setUsername: (username) => set({ username: username }),
  setTopPick: (topPick) => set({ topPick: topPick }),
  setPoints: (points) => set({ points: points }),
  addPoint: (points) => set((state) => {
    console.log("point added!!")
    return { points: state.points + 1}
  }),
  setIsFirst: (isFirst) => set({isFirst : isFirst}),
  setVotes: (votes) => set({votes: votes}), 
  addVote: (womenId) => set((state) => {
        const newVotes = [...state.votes];
        if (newVotes[womenId] !== undefined) {
            newVotes[womenId]++;
        }
        return { votes: newVotes };
    })
}))

export const womens = [
    {
        "id": 0,
        "name": "BONK"
    },
    {
        "id": 1,
        "name": "BRETT"
    },
    {
        "id": 2,
        "name": "BROTON"
    },
    {
        "id": 3,
        "name": "CATIZEN"
    },
    {
        "id": 4,
        "name": "CRYPTON"
    },
    {
        "id": 5,
        "name": "DOGE"
    },
    {
        "id": 6,
        "name": "DOGWIFHAT"
    },
    {
        "id": 7,
        "name": "EPIC FLIP"
    },
    {
        "id": 8,
        "name": "FLIP"
    },
    {
        "id": 9,
        "name": "FLOKI"
    },
    {
        "id": 10,
        "name": "GENA"
    },
    {
        "id": 11,
        "name": "GIB"
    },
    {
        "id": 12,
        "name": "JOHNDOGE"
    },
    {
        "id": 13,
        "name": "NOTCOIN"
    },
    {
        "id": 14,
        "name": "PEPE"
    },
    {
        "id": 15,
        "name": "POVEL"
    },
    {
        "id": 16,
        "name": "RECOCK"
    },
    {
        "id": 17,
        "name": "REDO"
    },
    {
        "id": 18,
        "name": "REDUCK"
    },
    {
        "id": 19,
        "name": "REGITON"
    },
    {
        "id": 20,
        "name": "SHIBA INU"
    },
    {
        "id": 21,
        "name": "SOLANA"
    },
    {
        "id": 22,
        "name": "TMONK"
    },
    {
        "id": 23,
        "name": "TONALD"
    },
    {
        "id": 24,
        "name": "TONBUNNIES"
    },
    {
        "id": 25,
        "name": "TONFISH"
    },
    {
        "id": 26,
        "name": "KONG"
    },
    {
        "id": 27,
        "name": "TONSTARS"
    },
    {
        "id": 28,
        "name": "TON"
    },
    {
        "id": 29,
        "name": "UTYAB"
    },
    {
        "id": 30,
        "name": "VIKTOR"
    },
    {
        "id": 31,
        "name": "YESCOIN"
    },
  ];

export const selectStore = create((set) => ({
  name: "",
  id: 0,
  src: "",
  setName : (name) => set( { name:name} ),
  setSrc : (src) => set( {src:src} ),
  setId : (id) => set( {id:id} ),
}))
export const gameStore = create((set) => ({
    roundId: 1,
    endAt: 0,
    gameStatus: [],
    setEndAt: (endAt) => set({endAt : endAt}),
    setRoundId: (roundId) => set({roundId : roundId}),
    setGameStatus: (gameStatus) => set({gameStatus : gameStatus}),
}))

export const tmpbetStore = create((set) => ({
  player:"",
  playerid: 0,
  betAmount: 1,
  setbetAmount: (betAmount) => set({betAmount : betAmount}),
  setPlayer: (player) => set({player : player}),
  setPlayerId: (playerid) => set({playerid : playerid}),
}))

export const betStore = create((set) => ({
  player:"",
  setPlayer: (player) => set({player : player}),
}))

export const boardStore = create((set) =>({
  bets : [],
  setBet: (bets) => set({bets:bets}),
}))