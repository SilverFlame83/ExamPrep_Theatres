const Play = require('../models/Play');

async function getAllPlays(){
   return Play.find({ public: true}).sort({createAt: -1}).lean();
}

async function getPlayById(id){
    
}

async function createPlay(playData){
    const pattern = newRegExp(`^${playData.title}$`, 'i');
    const existing = await Play.find({title: {$regex:pattern}});

    if(existing){
        throw new Error('A play with this name already exist!')
    }
    const play = new Play(playData);

    await play.save();
    
    return play;
}

async function editPlay(id,play){
    
}

async function deletePlay(id){

}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay
};