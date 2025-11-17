import qrcode

url = input("Enter the URL or text to encode in QR Code: ").strip()
file_path = "D:\\09.09.2025\\All\\Python\\Projects\\QR_Code_Generator\\images\\qrcode.png"

# Create QR code instance
qr = qrcode.QRCode()
qr.add_data(url)

img = qr.make_image(fill_color="black", back_color="white")
img.save(file_path)

print(f"QR Code generated and saved to {file_path}")