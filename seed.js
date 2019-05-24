const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/projectKKK', { useNewUrlParser: true });
const db = mongoose.connection;

const User = require('./models/user');
const Post = require('./models/post');

db.on('error', console.error.bind(console, 'connection error:'));

async function seed() {
    const User0 = new User({
        name: 'Nekii_Pupkin',
        email: 'pupkin@pochta.ru',
        password: 'mneZhalkoMuMu',
        tagArray: [{
            likes: 4,
            tag: 'kittens'
        },
        {
            likes: 10,
            tag: 'pups'
        }],
    })
    await User0.save()

    const User1 = new User({
        name: 'Saha_Gordii',
        email: 'NaGiBaToR@pochta.ru',
        password: 'YaVelikolepen',
        tagArray: [{
            likes: 101,
            tag: 'pups'
        },
        {
            likes: 10,
            tag: 'kittens'
        }],
    })
    await User1.save()

    const User2 = new User({
        name: 'Ezh',
        email: 'Ezh@pochta.ru',
        password: 'ochenDlinniiParole',
        tagArray: [{
            likes: 3,
            tag: 'pups'
        },
        {
            likes: 6,
            tags: 'kittens'
        },
        {
            likes: 99,
            tags: 'sonic'
        }],
    })
    await User2.save()

    const Post0 = new Post({
        name: 'Sobachki',
        tag: 'pups',
        likes: 123,
    })
    await Post0.save()

    const Post1 = new Post({
        name: 'Kotyata, nya!',
        tag: 'kittens',
        likes: 1237865,
    })
    await Post1.save()

    const Post2 = new Post({
        name: 'Cool Ezh!',
        tag: 'sonic',
        likes: 1,
    })
    await Post2.save()
}

async function main() {

    await seed();
    db.close();
}

db.once('open', function () {
    // we're connected!
    main()
});