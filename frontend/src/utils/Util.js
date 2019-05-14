import { BY_DATE } from './constants'

export function getPostsOrderBy(posts, order) {
    return order === BY_DATE  
    ? posts.sort((a, b) => b.voteScore - a.voteScore)
    : posts.sort((a, b) => b.timestamp - a.timestamp);
}

export function getCommentsOrderVoteScore(comments) {
    return comments.sort((a, b) => b.voteScore - a.voteScore)
}