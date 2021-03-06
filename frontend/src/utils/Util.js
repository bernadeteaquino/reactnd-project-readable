import { BY_DATE } from './constants'

export function getPostsOrderBy(posts, order) {
    return order === BY_DATE  
    ? posts.sort((a, b) => b.timestamp - a.timestamp)
    : posts.sort((a, b) => b.voteScore - a.voteScore);
}

export function getCommentsOrderVoteScore(comments) {
    return comments.sort((a, b) => b.voteScore - a.voteScore)
}

export function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' ' + d.toLocaleDateString()
}