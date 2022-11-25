const { app, BrowserWindow } = require('electron');

const MIN_WIDTH = 800;
const MIN_HEIGHT = 600;

const createWindow = () => {
	const win = new BrowserWindow({
		width: MIN_WIDTH,
		height: MIN_HEIGHT,
		autoHideMenuBar: true
	});

	win.setMinimumSize(MIN_WIDTH, MIN_HEIGHT);
	win.loadFile('app/index.html');

	win.webContents.on('dom-ready', (event, input) => {
		win.webContents.zoomFactor = 1;
	});
	win.webContents.on('before-input-event', (event, input) => {
		if (input.control && input.key === '+') {
			console.log('zoom in');

			win.webContents.zoomFactor += 0.1;

			event.preventDefault();
		} else if (input.control && input.key === '-') {
			console.log('zoom out');

			win.webContents.zoomFactor -= 0.1;

			event.preventDefault();
		} else if (input.control && input.key.toLowerCase() === 'r') {
			win.webContents.zoomFactor = 1;
			event.preventDefault();
		}
	});
};

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
