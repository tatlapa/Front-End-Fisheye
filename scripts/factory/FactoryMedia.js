import Image from '../models/Image.js';
import Video from '../models/Video.js';

function createMedia(data) {
    if (data.image) {
        return new Image(data);
    } else if (data.video) {
        return new Video(data);
    } else {
        throw new Error('Unknown data type');
    }
}

export default createMedia;
