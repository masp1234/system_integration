print('helloø'.encode(encoding='utf8'))


encoded_string = "hallå".encode()

# b prefix er fordi det er en byte string (eller stream??)
print(encoded_string)

decodedString = encoded_string.decode()
print(decodedString)