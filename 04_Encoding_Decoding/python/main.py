str_original = 'Helloæøå'

bytes_encoded = str_original.encode(encoding='utf-8') #encode utf8 to bytestring
print(type(bytes_encoded))

str_decoded = bytes_encoded.decode() #decode bytestring to utf8
print(type(str_decoded))

print('Encoded bytes =', bytes_encoded)
print('Decoded String =', str_decoded)
print('str_original equals str_decoded =', str_original == str_decoded)