const assert = require('assert');
const Album = require('./album');
const mongoose = require('mongoose');

describe('relational records', () => {
    beforeEach((done) => {
        mongoose.connection.collections.albums.drop(() => {
            done();
        });
    })

    it('creates an album with sub-documents', (done) => {
        let album_one = new Album({
            name: 'Porcupine Tree',
            tracks: 2,
            songs: [{ title: 'Lazarus', artist: 'Steven Wilson'},
                    { title: 'Trains', artist: 'Steven Wilson'}
            ]
        })

        album_one.save().then(() => {
            Album.findOne({ name: 'Porcupine Tree'}).then((data) => {
                assert(data.songs.length === 2);
                done();
            })
        })
    })
})