const { QRCodeService } = require("./qrcode.service");

const qrcodeService = new QRCodeService();

module.exports = { 
    qrcodeService,
    QRCodeService 
};
