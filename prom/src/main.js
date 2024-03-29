const { app, BrowserWindow } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1143,
    height: 832,
    minWidth: 1143,
    minHeight: 832,
    frame: false,
  });
  win.loadURL("http://localhost:3000");
}
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
