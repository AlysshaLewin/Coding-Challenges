/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

//My Solution

function defineSuit(card) {
    let returnedSuit = card[card.length - 1]
    if (returnedSuit == '♣') {
        return 'clubs';
    } else if (returnedSuit == '♦'){
        return 'diamonds';
    } else if (returnedSuit == '♥'){
        return 'hearts';
    } else if (returnedSuit == '♠'){
        return 'spades';
    }
    return returnedSuit
}