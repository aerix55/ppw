// [ikon, warna latar ikon, label, isi kanan (html), tampilkan panah]
// Only Wi-Fi is active and connected. Other items are visual only.
const SETTINGS_GROUPS = [
  [
    ['airplane', '#ff9500', 'Airplane Mode', '<span class="toggle"></span>', false],
    ['wifi', '#0a84ff', 'Wi-Fi', `<span class="val">${esc(CONFIG.wifi)}</span><span class="check">✓</span>`, true],
    ['bluetooth', '#0a84ff', 'Bluetooth', '<span class="val">Off</span>', true],
    ['cell', '#34c759', 'Cellular', '<span class="val">No SIM</span>', true],
    ['link', '#34c759', 'Personal Hotspot', '<span class="val">Off</span>', true],
  ],
  [
    ['bell', '#ff3b30', 'Notifications', '', true],
    ['speaker', '#ff2d55', 'Sounds & Haptics', '', true],
    ['moon', '#5856d6', 'Fokus', '', true],
    ['hourglass', '#5856d6', 'Screen Time', '', true],
  ],
  [
    ['gear', '#8e8e93', 'General', '', true],
    ['control', '#8e8e93', 'Control Center', '', true],
    ['sun', '#0a84ff', 'Display & Brightness', '', true],
    ['wallpaper', '#0a84ff', 'Wallpaper', '', true],
    ['access', '#0a84ff', 'Accessibility', '', true],
    ['wave', '#8e8e93', 'Siri & Search', '', true],
  ],
  [
    ['bolt', '#34c759', 'Battery', '', true],
    ['lock', '#0a84ff', 'Privacy & Security', '', true],
    ['key', '#8e8e93', 'Passwords', '', true],
    ['wallet', '#ff9500', 'Wallet', '', true],
    ['store', '#0a84ff', 'App Store', '', true],
  ],
];

registerApp('settings', (page) => {
  page.innerHTML = `
    <div class="large-title">Settings</div>
    <div class="group">
      <div class="row">
        <div class="avatar-md" style="${bgStyle(CONFIG.profile.hanni, solid(PEOPLE.hanni.color))}"></div>
        <div class="grow">
          <div class="row-title">Winay</div>
          <div class="sub">Account, iCloud, Media & Purchases</div>
        </div>
        <span class="chev-r">${svg('chevron', { size: 18, color: '#c7c7cc', sw: 2.2 })}</span>
      </div>
    </div>`;

  SETTINGS_GROUPS.forEach((items) => {
    const group = el('div', 'group');
    items.forEach(([icon, color, label, right, arrow]) => {
      const r = el('div', 'row');
      r.innerHTML = `
        <span class="ico" style="background:${color}">${svg(icon, { size: 18, color: '#fff', sw: 2 })}</span>
        <span class="grow row-title">${label}</span>
        ${right}
        ${arrow ? `<span class="chev-r">${svg('chevron', { size: 18, color: '#c7c7cc', sw: 2.2 })}</span>` : ''}`;
      group.appendChild(r);
    });
    page.appendChild(group);
  });
});