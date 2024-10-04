import Cast from '../models/Cast.js'

const getAll = (filter) => Cast.find()

const getAllWithout= (casts) =>{
    const castIds = casts.map(cast => cast.cast._id)
    //Cast.find({ _id : { $nin: castIds } });
    return Cast.find().nin('_id', castIds);
}

const create = (cast)=> Cast.create(cast);

export default {
    create,
    getAll,
    getAllWithout
}