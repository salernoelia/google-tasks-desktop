const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    show: false,
    icon: path.join(__dirname, "assets", "icon.icns"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.maximize();
  win.show();
  // Load the Google Tasks URL.
  win.loadURL("https://calendar.google.com/calendar/u/0/r/tasks");
}

// Called when Electron has finished initialization.
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS).
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// Re-create a window when the app is activated (macOS).
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
