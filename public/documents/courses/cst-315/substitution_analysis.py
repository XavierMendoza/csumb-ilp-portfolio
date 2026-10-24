"""
Substitution Cipher Frequency Analysis Tool

This program supports the frequency analysis lab by:
1. Reading ciphertext.txt
2. Computing single-letter, bigram, and trigram frequencies
3. Applying the recovered substitution key
4. Writing the final secret key and plaintext output files

Run:
    python3 substitution_analysis.py ciphertext.txt
"""

import sys
from collections import Counter


CIPHER_TO_PLAIN = {
    "a": "c", "b": "f", "c": "m", "d": "y", "e": "p", "f": "v",
    "g": "b", "h": "r", "i": "l", "j": "q", "k": "x", "l": "w",
    "m": "i", "n": "e", "o": "j", "p": "d", "q": "s", "r": "g",
    "s": "k", "t": "h", "u": "n", "v": "a", "w": "z", "x": "o",
    "y": "t", "z": "u"
}


def read_file(filename):
    """Read and return the ciphertext from a file."""
    with open(filename, "r", encoding="utf-8") as file:
        return file.read().lower()


def only_letters(text):
    """Return text with only alphabetic letters."""
    return "".join(char for char in text if char.isalpha())


def count_ngrams(text, n):
    """Count n-grams such as single letters, bigrams, and trigrams."""
    letters = only_letters(text)
    return Counter(letters[i:i + n] for i in range(len(letters) - n + 1))


def print_top(title, counter, total, limit):
    """Print the most common frequency results."""
    print(title)
    print("-" * len(title))

    for item, count in counter.most_common(limit):
        percent = (count / total) * 100
        print(f"{item}: {count} ({percent:.2f}%)")

    print()


def decrypt(ciphertext):
    """Decrypt the ciphertext using the recovered substitution table."""
    plaintext = ""

    for char in ciphertext:
        if char.isalpha():
            plaintext += CIPHER_TO_PLAIN[char]
        else:
            plaintext += char

    return plaintext


def write_secret_key():
    """Write the substitution key to secret_key.txt."""
    plain_alphabet = "abcdefghijklmnopqrstuvwxyz"

    plain_to_cipher = {}
    for cipher_letter, plain_letter in CIPHER_TO_PLAIN.items():
        plain_to_cipher[plain_letter] = cipher_letter

    encryption_key = "".join(plain_to_cipher[letter] for letter in plain_alphabet)

    with open("secret_key.txt", "w", encoding="utf-8") as file:
        file.write("Substitution Cipher Secret Key\n")
        file.write("==============================\n\n")
        file.write("Plain alphabet:\n")
        file.write(plain_alphabet + "\n\n")
        file.write("Encryption key:\n")
        file.write(encryption_key + "\n\n")
        file.write("Ciphertext-to-plaintext mapping:\n")

        for cipher_letter in sorted(CIPHER_TO_PLAIN):
            file.write(f"{cipher_letter} -> {CIPHER_TO_PLAIN[cipher_letter]}\n")


def main():
    """Run frequency analysis and generate the output files."""
    if len(sys.argv) != 2:
        print("Usage: python3 substitution_analysis.py ciphertext.txt")
        sys.exit(1)

    ciphertext = read_file(sys.argv[1])
    letters = only_letters(ciphertext)

    single_counts = count_ngrams(ciphertext, 1)
    bigram_counts = count_ngrams(ciphertext, 2)
    trigram_counts = count_ngrams(ciphertext, 3)

    print_top("Single Letter Frequencies", single_counts, len(letters), 26)
    print_top("Top 20 Bigrams", bigram_counts, sum(bigram_counts.values()), 20)
    print_top("Top 20 Trigrams", trigram_counts, sum(trigram_counts.values()), 20)

    plaintext = decrypt(ciphertext)

    with open("plaintext.txt", "w", encoding="utf-8") as file:
        file.write(plaintext)

    write_secret_key()

    print("Generated plaintext.txt")
    print("Generated secret_key.txt")


if __name__ == "__main__":
    main()