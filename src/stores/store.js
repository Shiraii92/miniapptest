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
        "name": "Ton"
    },
    {
        "id": 1,
        "name": "Ton"
    },
    {
        "id": 2,
        "name": "Ton"
    },
    {
        "id": 3,
        "name": "Ton"
    },
    {
        "id": 4,
        "name": "Ton"
    },
    {
        "id": 5,
        "name": "Ton"
    },
    {
        "id": 6,
        "name": "Ton"
    },
    {
        "id": 7,
        "name": "Ton"
    },
    {
        "id": 8,
        "name": "Ton"
    },
    {
        "id": 9,
        "name": "Ton"
    },
    {
        "id": 10,
        "name": "Ton"
    },
    {
        "id": 11,
        "name": "Ton"
    },
    {
        "id": 12,
        "name": "Ton"
    },
    {
        "id": 13,
        "name": "Ton"
    },
    {
        "id": 14,
        "name": "Ton"
    },
    {
        "id": 15,
        "name": "Ton"
    },
    {
        "id": 16,
        "name": "Ton"
    },
    {
        "id": 17,
        "name": "Ton"
    },
    {
        "id": 18,
        "name": "Ton"
    },
    {
        "id": 19,
        "name": "Ton"
    },
    {
        "id": 20,
        "name": "Ton"
    },
    {
        "id": 21,
        "name": "Ton"
    },
    {
        "id": 22,
        "name": "Ton"
    },
    {
        "id": 23,
        "name": "Ton"
    },
    {
        "id": 24,
        "name": "Ton"
    },
    {
        "id": 25,
        "name": "Ton"
    },
    {
        "id": 26,
        "name": "Ton"
    },
    {
        "id": 27,
        "name": "Ton"
    },
    {
        "id": 28,
        "name": "Ton"
    },
    {
        "id": 29,
        "name": "Ton"
    },
    {
        "id": 30,
        "name": "Ton"
    },
    {
        "id": 31,
        "name": "Ton"
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