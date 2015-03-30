# qq-music-img-generator
QQ Music artist/album image generator

# Install

`npm install qq-music-img-generator'

# Usage

```javascript
var gnr = require('qq-music-img-generator');
// Get artist avatar, 300x300 px
console.log(gnr.makeArtistImageUrl('002vbc3A2bv88T', 300));
// -> http://i.gtimg.cn/music/photo/mid_singer_300/8/T/002vbc3A2bv88T.jpg
// Get album image, default as 300x300 px
console.log(gnr.makeAlbumImageUrl('001KH6924JPQ7a'));
// -> http://i.gtimg.cn/music/photo/mid_album_300/7/a/001KH6924JPQ7a.jpg
// Get album image, require 56px, will fallback to 58px
console.log(gnr.makeAlbumImageUrl('001KH6924JPQ7a', 56));
// -> http://i.gtimg.cn/music/photo/mid_album_68/7/a/001KH6924JPQ7a.jpg
```

# Image size QQ Music provided

## artist avatar

```javascriptvar
var _supportedArtistImageSizes = [58, 68, 90, 126, 150, 180, 300, 500, 660, 750];
```

## album image

```javascriptvar
var _supportedAlbumImageSizes  = [58, 68, 90, 126, 150, 180, 300, 500];
```
