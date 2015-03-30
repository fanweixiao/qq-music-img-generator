var assert = require('assert');

var gnr = require('../index');

describe('Artist Avatar', function(){
  describe('size=300, even if size is not specified', function(){
    it('should get 300px, even if size not specified', function(){
      'http://i.gtimg.cn/music/photo/mid_singer_300/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeArtistImageUrl('001KH6924JPQ7a', 300));
      'http://i.gtimg.cn/music/photo/mid_singer_300/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeArtistImageUrl('001KH6924JPQ7a'));
    });
  });
  describe('size=500', function(){
    it('should get 500px', function(){
      'http://i.gtimg.cn/music/photo/mid_singer_500/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeArtistImageUrl('001KH6924JPQ7a', 500));
    });
  });
  describe('size=57', function(){
    it('should get 58px', function(){
      'http://i.gtimg.cn/music/photo/mid_singer_58/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeArtistImageUrl('001KH6924JPQ7a', 57));
    });
  });
  describe('size=59', function(){
    it('should get 68px', function(){
      'http://i.gtimg.cn/music/photo/mid_singer_68/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeArtistImageUrl('001KH6924JPQ7a', 59));
    });
  });
  describe('size=751', function(){
    it('should get 750px', function(){
      'http://i.gtimg.cn/music/photo/mid_singer_750/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeArtistImageUrl('001KH6924JPQ7a', 751));
    });
  });
});


describe('Album Avatar', function(){
  describe('size=300, even if size is not specified', function(){
    it('should get 300px, even if size not specified', function(){
      'http://i.gtimg.cn/music/photo/mid_album_300/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeAlbumImageUrl('001KH6924JPQ7a', 300));
      'http://i.gtimg.cn/music/photo/mid_album_300/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeAlbumImageUrl('001KH6924JPQ7a'));
    });
  });
  describe('size=500', function(){
    it('should get 500px', function(){
      'http://i.gtimg.cn/music/photo/mid_album_500/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeAlbumImageUrl('001KH6924JPQ7a', 500));
    });
  });
  describe('size=57', function(){
    it('should get 58px', function(){
      'http://i.gtimg.cn/music/photo/mid_album_58/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeAlbumImageUrl('001KH6924JPQ7a', 57));
    });
  });
  describe('size=59', function(){
    it('should get 68px', function(){
      'http://i.gtimg.cn/music/photo/mid_album_68/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeAlbumImageUrl('001KH6924JPQ7a', 59));
    });
  });
  describe('size=751', function(){
    it('should get 500px', function(){
      'http://i.gtimg.cn/music/photo/mid_album_500/7/a/001KH6924JPQ7a.jpg'.should.equal( gnr.makeAlbumImageUrl('001KH6924JPQ7a', 751));
    });
  });
});
