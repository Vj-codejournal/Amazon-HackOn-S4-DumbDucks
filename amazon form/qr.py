import qrcode

# Data to embed in the QR code
product_id = "afr12345"
customer_name="John Wick"
product_name="Amazon Echo(11268H)"
data = f"http://localhost:3000/form.html?product_id={product_id}&customer_name={customer_name}&product_name={product_name}"

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