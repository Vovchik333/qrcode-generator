const { qrcodeService } = require('../../src/lib/services');

describe('QR-code service tests', () => {
    it('should generate a QR code buffer', async () => {
        const text = 'https://www.example.com';
        const buffer = await qrcodeService.generateBuffer({text});

        expect(Buffer.isBuffer(buffer)).toBe(true);
    });

    it('should throw error that text must not be empty', async () => {
        expect.assertions(1);

        try {
            const text = '';
            await qrcodeService.generateBuffer({text});
        } catch(error) {
            expect(error.message).toBe('The text must not be empty.');
        }
    });
});
