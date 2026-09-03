// Needs to be updated with the real links after we have a real release.
export const GITHUB_URL = "https://github.com/Keypr-org";
export const EXTENSION_URL = "https://github.com/Keypr-org/browser_extension";

// Examples, need to be replaced with real links after we have a real release.
export const DOWNLOAD_LINKS = {
  windows: `${GITHUB_URL}/qt_client/releases`,
  macos: `${GITHUB_URL}/qt_client/releases`,
  linux: `${GITHUB_URL}/qt_client/releases`,
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Showcase", href: "#showcase" },
  { label: "Download", href: "#download" },
] as const;
