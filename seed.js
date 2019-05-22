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
            tag: 4,
            name: 'kittens'
        },
        {
            tag: 10,
            name: 'pups'
        }],
    })
    await User0.save()

    const User1 = new User({
        name: 'Saha_Gordii',
        email: 'NaGiBaToR@pochta.ru',
        password: 'YaVelikolepen',
        tagArray: [{
            tag: 101,
            name: 'girls'
        },
        {
            tag: 10,
            name: 'kittens'
        }],
    })
    await User1.save()

    const User2 = new User({
        name: 'Ezh',
        email: 'Ezh@pochta.ru',
        password: 'ochenDlinniiParole',
        tagArray: [{
            tag: 3,
            name: 'myaso'
        },
        {
            tag: 6,
            name: 'nasekomoe'
        },
        {
            tag: 99,
            name: 'sonic'
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