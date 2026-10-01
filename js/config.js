// ============================================================
// METEOR ADDONS CONFIG - Edit this file to customize everything
// ============================================================

const CONFIG = {
  // Base data source - change this to use your own addon list
  dataSource: 'https://raw.githubusercontent.com/cqb13/meteor-addon-scanner/refs/heads/addons/addons.json',
  
  // Site branding
  siteName: 'Meteor Addons',
  siteDescription: 'A list of Meteor Client Addons',
  
  // Download URL overrides - swap any addon's download with your own
  // Key = "owner/repo" (matches repo.id), Value = new download URL
  downloadOverrides: {
    // Example: Override a specific addon's download
    // 'maxsupermanhd/meteor-villager-roller': 'https://your-server.com/custom-roller.jar',
    // 'cqb13/mc-games': 'https://your-cdn.com/mc-games-modified.jar',
  },

  // Download proxy - ALL downloads go through this URL prefix
  // Set to '' to disable. Downloads become: proxyPrefix + originalUrl
  downloadProxy: '',
  // Example: 'https://your-proxy.com/download?url='

  // Custom addons to inject into the list
  customAddons: [
    // Example:
    // {
    //   name: 'My Custom Addon',
    //   description: 'My awesome custom addon',
    //   mc_version: '1.21.11',
    //   authors: ['YourName'],
    //   features: { modules: [], commands: [], hud_elements: [], tabs: null, themes: null, feature_count: 0 },
    //   verified: false,
    //   repo: { id: 'custom/my-addon', owner: 'custom', name: 'my-addon', archived: false, fork: false, forks: 0, stars: 0, downloads: 0, last_update: new Date().toISOString(), creation_date: new Date().toISOString() },
    //   links: { github: '', downloads: ['https://your-server.com/my-addon.jar'], latest_release: 'https://your-server.com/my-addon.jar', discord: '', homepage: '', icon: '' },
    //   custom: { description: '', tags: ['Utility'], supported_versions: ['1.21.11'], icon: '', discord: '', homepage: '' }
    // }
  ],

  // Addons to hide from listing (by repo.id)
  hiddenAddons: [
    // 'owner/repo-name',
  ],

  // Metadata overrides - change any addon's display info
  // Key = "owner/repo", Value = object with fields to override
  metadataOverrides: {
    // Example:
    // 'cqb13/mc-games': {
    //   name: 'MC Games (Modified)',
    //   description: 'Custom modified version',
    //   icon: 'https://your-server.com/custom-icon.png'
    // }
  },

  // Default icon for addons without one
  defaultIcon: '/default-addon-icon.webp',
};

if (typeof window !== 'undefined') {
  window.METEOR_CONFIG = CONFIG;
}

export default CONFIG;
