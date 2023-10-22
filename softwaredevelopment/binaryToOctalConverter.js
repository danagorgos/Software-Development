function convertBinaryToOctal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const binaryNumber = binaryInput.trim();

    if (!isValidBinary(binaryNumber)) {
        document.getElementById('result').innerText = 'Invalid binary number';
        return;
    }

    const octalNumber = binaryToOctal(binaryNumber);
    document.getElementById('result').innerText = `Octal: ${octalNumber}`;
}

function isValidBinary(binary) {
    // Check if the input consists of only 0s and 1s
    return /^[01]+$/.test(binary);
}

function binaryToOctal(binary) {
    // Pad the binary number with leading zeros if needed to make it a multiple of 3
    while (binary.length % 3 !== 0) {
        binary = '0' + binary;
    }

    let octal = '';
    for (let i = 0; i < binary.length; i += 3) {
        const binaryChunk = binary.substr(i, 3);
        const decimalValue = parseInt(binaryChunk, 2);
        octal += decimalValue.toString(8);
    }

    return octal;
}
