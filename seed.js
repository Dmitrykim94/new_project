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
            tag: 'dogs'
        },
        {
            likes: 10,
            tag: 'Vehicle'
        }],
    })
    await User0.save()

    const User1 = new User({
        name: 'Saha_Gordii',
        email: 'NaGiBaToR@pochta.ru',
        password: 'YaVelikolepen',
        tagArray: [{
            likes: 101,
            tag: 'dogs'
        },
        {
            likes: 10,
            tag: 'Vehicle'
        }],
    })
    await User1.save()

    const User2 = new User({
        name: 'Ezh',
        email: 'Ezh@pochta.ru',
        password: 'ochenDlinniiParole',
        tagArray: [{
            likes: 3,
            tag: 'foxes'
        },
        {
            likes: 6,
            tag: 'dogs'
        },
        {
            likes: 99,
            tag: 'Vehicle'
        }],
    })
    await User2.save()

    const Post0 = new Post({
        name: 'Sobachki',
        tag: 'dogs',
        likes: 123,
    })
    await Post0.save()

    const Post1 = new Post({
        name: 'Foxes, nya!',
        tag: 'foxes',
        likes: 165,
    })
    await Post1.save()

    const Post2 = new Post({
        name: 'Foxes Ezh!',
        tag: 'foxes',
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