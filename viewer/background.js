chrome.runtime.onStartup.addListener(() => {
    // Code to start your Node.js server
    // Replace `nodeServerCommand` with the appropriate command to start your Node.js server
    const nodeServerCommand = 'node server.js';
    chrome.runtime.getPlatformInfo((platformInfo) => {
      if (platformInfo.os === 'win') {
        // On Windows, use `cmd.exe` to execute the command
        const command = `cmd.exe /c start ${nodeServerCommand}`;
        chrome.runtime.openOptionsPage(() => {
          chrome.system.executeCommand({ command: command });
        });
      } else {
        // On other platforms (e.g., macOS, Linux), use `open` to execute the command
        const command = `open -a Terminal.app ${nodeServerCommand}`;
        chrome.runtime.openOptionsPage(() => {
          chrome.system.executeCommand({ command: command });
        });
      }
    });
  });
  