export function getUsername() {
    let username = localStorage.getItem('username');
    if (!username || username == '') {
        username = 'user' + getRandomInt(1000, 9999)
    }

    return username;
}

export function saveUsername(username) {
    username = username.trim();
    
    if (!username || username == '') {
        console.error('saving incorrect username', username);
        return;
    }

    localStorage.setItem('username', username);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
