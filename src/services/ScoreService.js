import api from 'http';

export default function ScoreService() {
    return {
        getLeaderboard: async () => {
            return await api.get('score/leaderboard')
        },
    }
}