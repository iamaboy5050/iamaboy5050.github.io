const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "廻廻奇譚",
        artist: 'Eve',
        url: 'https://drive.google.com/uc?export=download&id=1mD5ZhAm9PexzAacMGbyn34UtEQNn0p10',
        cover: '',
        lrc: '',
      }
    ]
});