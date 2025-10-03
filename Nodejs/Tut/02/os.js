const os = require('os');

// Get OS platform
const platform = os.platform();
console.log(`Platform: ${platform}`);

// Get OS architecture
const architecture = os.arch();
console.log(`Architecture: ${architecture}`);

// Get CPU information
const cpus = os.cpus();
console.log(`CPU Info:`, cpus);

// Get total memory
const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory} bytes`);

// Get free memory
const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory} bytes`);

// Get home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// Get temporary directory
const tempDir = os.tmpdir();
console.log(`Temporary Directory: ${tempDir}`);

// Get system uptime
const uptime = os.uptime();
console.log(`System Uptime: ${uptime} seconds`);

// Get network interfaces
const networkInterfaces = os.networkInterfaces();
console.log(`Network Interfaces:`, networkInterfaces);

// Get endianness
const endianness = os.endianness();
console.log(`Endianness: ${endianness}`);

// Get OS release
const release = os.release();
console.log(`OS Release: ${release}`);

// Get user information
const userInfo = os.userInfo();
console.log(`User Info:`, userInfo);

