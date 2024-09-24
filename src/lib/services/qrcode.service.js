const QRCode = require('qrcode');

class QRCodeService {
    async generateBuffer({ text }) {
        if (!Boolean(text)) {
            throw Error('The text must not be empty.');
        }

        const buffer = await QRCode.toBuffer(text);

        return buffer;
    }
}

module.exports = { QRCodeService };
