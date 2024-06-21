import qrcode

# Data to embed in the QR code
product_id = "afr12345"
data = f"http://localhost:5000/form.html?product_id={product_id}"

# Generate QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)

# Create an image
img = qr.make_image(fill_color="black", back_color="white")

# Save the image
img.save("qrcode.png")
print("QR Code generated and saved as qrcode.png")
