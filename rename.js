const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
const src1 = path.join(imgDir, 'WhatsApp Image 2026-05-23 at 2.05.22 PM.jpeg');
const src2 = path.join(imgDir, 'WhatsApp Image 2026-05-23 at 2.06.32 PM.jpeg');

const dest1 = path.join(imgDir, 'construction-plan-1.jpg');
const dest2 = path.join(imgDir, 'construction-plan-2.jpg');

try {
  if (fs.existsSync(src1)) {
    fs.copyFileSync(src1, dest1);
    console.log('Successfully copied Plan 1');
  } else {
    console.log('Plan 1 not found at ' + src1);
  }

  if (fs.existsSync(src2)) {
    fs.copyFileSync(src2, dest2);
    console.log('Successfully copied Plan 2');
  } else {
    console.log('Plan 2 not found at ' + src2);
  }
} catch (err) {
  console.error('Error copying files:', err);
}
