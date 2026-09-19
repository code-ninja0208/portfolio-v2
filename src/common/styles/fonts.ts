// Keep production builds independent of external font downloads.
// Render (and other restricted build environments) may not be able to reach Google Fonts.
// These system-safe stacks preserve the intended typography without a network dependency.

const font = (fontFamily: string) => ({
  style: { fontFamily },
});

export const jakartaSans = font(
  '"Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
);

export const firaCode = font(
  '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
);

export const soraSans = font(
  'Sora, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
);

export const onestSans = font(
  'Onest, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
);
