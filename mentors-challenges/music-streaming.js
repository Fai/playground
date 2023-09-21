/**
 * The new music streaming platform just has the right to include 50 songs to platform.
 * Currently, This platform provide song streaming, Favorite song functionality to the user as a MVP version (Minimum viable product) which open for 100 limited users.
 * When user open the song list. On each music will show how many like received from the users and there are no dislike.
 * Apart from that, Users able to see what song they like so they can listen only what they love.
 * The platform has been received event from the activity of users for favorite/like. Users able to like and unlike the song but user cannot unlike if user doesn't like the song before and there is no multiple like.
 * The platform plan to open just 1 month to collect which song need to be reconsider for the business and will start to collect from 1st until last day of testing.
 * ---
 * Could you help design how the platform can fulfill this requirements?
 * ---
 * Note:
 * You can assume platform has opened since 1 Sep 2023 until 30 Sep 2023
 */

class Song {
    constructor(name, artist, like, dislike) {
        this.name = name;
        this.artist = artist;
        this.like = like;
        this.dislike = dislike;
    }
    likeSong() {
        this.like++;
    }
    unlikeSong(){
        this.like--;
    }
    dislikeSong() {
        this.dislike++;
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.likedSongs = [];
        this.dislikedSongs = [];
    }
    likeSong(song) {
        if (this.likedSongs.includes(song.name)) {
            return;
        } else {
            this.likedSongs.push(song.name);
            song.likeSong();
        }
    }
    unlikeSong(song) {
        if (this.likedSongs.includes(song.name)) {
            this.likedSongs.splice(this.likedSongs.indexOf(song.name), 1);
            song.unlikeSong();
        }
    }
    dislikeSong(song) {
        if (this.dislikedSongs.includes(song.name)) {
            return;
        } else {
            this.dislikedSongs.push(song.name);
            song.dislikeSong();
        }
    }
}

const createSongList = (numberOfSongs) => {
    const songsList = [];
    for (let i = 0; i < numberOfSongs; i++) {
        const song = new Song(`Song ${i + 1}`, `Artist ${i + 1}`, 0, 0);
        songsList.push(song);
    }
    return songsList;
}

const companySongList = createSongList(50);

const createUsers = (numberOfUsers) => {
    const users = [];
    for (let i = 0; i < numberOfUsers; i++) {
        const user = new User(`User ${i + 1}`);
        users.push(user);
    }
    return users;
}

const companyUsers = createUsers(100);


const testRun = (users, songsList) => {
    users.forEach(user => {
        const randomSong = songsList[Math.floor(Math.random() * songsList.length)];
        if(!user.dislikedSongs.includes(randomSong.name)) {
            user.likeSong(randomSong);    
        }
    });
    users.forEach(user => {
        const randomSong = songsList[Math.floor(Math.random() * songsList.length)];
        const dislikeChance = Math.floor(Math.random() * 2) % 2;
        if(!user.likedSongs.includes(randomSong.name) && dislikeChance === 1 ) {
            user.dislikeSong(randomSong);
        }
    });
}

const companyOpening = (days) => {
    for (let i = 0; i < days; i++) {
        testRun(companyUsers, companySongList);
    }
}

companyOpening(30);

const userPlayList = (users) => {
    users.forEach(user => {
        console.log(user.name);
        console.log(user.likedSongs);
    })
}

userPlayList(companyUsers);

const viewSongsList = (songsList) => {
    songsList.forEach(song => {
        console.log(`${song.name} has ${song.like} likes and ${song.dislike} dislikes`);
    })
}

viewSongsList(companySongList);

const newCompanySongsList = companySongList.filter(song => (song.like > 0 && song.dislike < 20));
viewSongsList(newCompanySongsList);