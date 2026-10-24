// Home screen icons.
// image: path gambar di assets/icons/. If the image file is missing, the built-in SVG icon will be displayed.
// icon: nama ikon di core/icons.js (cadangan)
// fill: true for filled icons (Photos)
const APPS = [
  { id: 'notes',     name: 'Notes',     icon: 'notes',     image: 'assets/icons/notes.png',     bg: '#ffffff', fg: '#ffb300' },
  { id: 'photos',    name: 'Photos',      icon: 'photos',    image: 'assets/icons/gallery.svg',   bg: '#ffffff', fg: '#ff7a59', fill: true },
  { id: 'settings',  name: 'Settings',  icon: 'settings',  image: 'assets/icons/settings.png',  bg: 'linear-gradient(#8e8e93,#636366)', fg: '#ffffff' },
  { id: 'instagram', name: 'Instagram', icon: 'instagram', image: 'assets/icons/igapp.png', bg: 'linear-gradient(45deg,#feda75,#d62976 50%,#962fbf)', fg: '#ffffff', dark: true },
  { id: 'safari',    name: 'Safari',      icon: 'safari',    image: 'assets/icons/safari.png',    bg: 'linear-gradient(#5ac8fa,#0a84ff)', fg: '#ffffff', dock: true },
  { id: 'camera',    name: 'Camera',      icon: 'camera',    image: 'assets/icons/camera.png',    bg: 'linear-gradient(#5a5a5f,#2c2c2e)', fg: '#ffffff', dock: true, dark: true },
  { id: 'line',      name: 'LINE',        icon: 'line',      image: 'assets/icons/lineapp.png',   bg: '#06c755', fg: '#ffffff', dock: true },
  { id: 'music',     name: 'Apple Music', icon: 'music',     image: 'assets/icons/appmusic.webp', bg: '#ffffff', fg: '#fa243c', dock: true },
  
];