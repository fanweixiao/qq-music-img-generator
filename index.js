var _supportedArtistImageSizes = [58, 68, 90, 126, 150, 180, 300, 500, 660, 750];
var _supportedAlbumImageSizes  = [58, 68, 90, 126, 150, 180, 300, 500];

var _artist_url_pattern = "http://i.gtimg.cn/music/photo/mid_singer_$size$/$ch2$/$ch1$/$ID$.jpg";
var _album_url_pattern  = "http://i.gtimg.cn/music/photo/mid_album_$size$/$ch2$/$ch1$/$ID$.jpg";

function validateSize(arr, _size){
  if(arr.indexOf(_size) >= 0){
    return _size;
  }
  // if _size larger than largest one, return the largest one
  var _larget = arr[arr.length -1];
  if(_larget < _size){
    return _larget;
  }
  // find the first one bigger than _size in _supportedSizes
  for(var i = 0, len = arr.length; i < len; i++){
    if(arr[i] > _size){
      _size = arr[i];
      break;
    }
  }
  return _size;
};

function makeImageUrl(url_pattern, size_arr, id, size){
  if(!id){
    throw new Error('id must be specified');
  }
  // default size is 300
  size = size || 300;
  size = validateSize(size_arr, size);
  // Album:
  //   [input]  001KH6924JPQ7a
  //   [output] http://i.gtimg.cn/music/photo/mid_album_500/7/a/001KH6924JPQ7a.jpg
  // Artist:
  //   [input]
  //   [output] http://i.gtimg.cn/music/photo/mid_singer_500/8/T/002vbc3A2bv88T.jpg
  var ch1 = id[id.length -1];
  var ch2 = id[id.length -2];

  var url = url_pattern.replace('$size$', size)
    .replace('$ch2$', ch2)
    .replace('$ch1$', ch1)
    .replace('$ID$', id);
  return url;
};

exports.makeArtistImageUrl = function makeArtistImageUrl(artistID, size){
  return makeImageUrl(_artist_url_pattern, _supportedArtistImageSizes, artistID, size);
};

exports.makeAlbumImageUrl = function makeAlbumImageUrl(albumID, size){
  return makeImageUrl(_album_url_pattern, _supportedAlbumImageSizes, albumID, size);
};
